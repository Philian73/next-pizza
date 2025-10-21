'use client'

import type { ComponentProps, FormEvent } from 'react'

import type { ApiSchemas } from '@/shared/api'

import { formatPriceRub } from '@/shared/lib/format-price-rub'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/shadcn/button'
import { Typography } from '@/shared/ui/typography'

import { useProductStore } from '../model/choice-product-store'
import { useChooseProductFilters } from '../model/use-choose-product-filters'
import { BasesTabs } from './bases-tabs'
import { FoodValuesTooltip } from './food-values-tooltip'
import { Ingredients } from './ingredients'
import { PreviewImage } from './preview-image'
import { SizeTabs } from './size-tabs'
import { Toppings } from './toppings'

type ChooseProductFormProps = {
   product: ApiSchemas['Product']
   onSubmit?: (
      data: {
         productId: string
         variationId: string
         removedIngredients: string[]
         toppings: string[]
      },
      e: FormEvent<HTMLFormElement>
   ) => void
} & Omit<ComponentProps<'form'>, 'children' | 'onSubmit'>

export const ChooseProductForm = ({
   product,
   className,
   onSubmit,
   ...rest
}: ChooseProductFormProps) => {
   const getVariationById = useProductStore(state => state.getVariationById)
   const getDefaultVariation = useProductStore(state => state.getDefaultVariation)

   const { variationId, removedIngredients, toppings, handleSizeChange, handleBaseChange } =
      useChooseProductFilters()

   const currentVariation = getVariationById(variationId) ?? getDefaultVariation()
   const currentSize = currentVariation?.size.name || ''
   const currentBase = currentVariation?.base || ''

   const [sizeValue] = currentSize.split(' ')

   const variationInfo = [
      currentVariation?.size.name,
      currentVariation?.baseFull,
      currentVariation?.foodValue?.weight ? currentVariation.foodValue.weight + ' г' : '',
   ]
      .filter(Boolean)
      .join(', ')

   const productPrice = +currentVariation.price
   const toppingsPrice = currentVariation.toppings
      .filter(topping => toppings.includes(topping.id))
      .reduce((acc, { price }) => acc + price, 0)

   const totalPrice = productPrice + toppingsPrice

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const data = {
         productId: product.id,
         variationId: currentVariation?.id,
         removedIngredients: removedIngredients,
         toppings: toppings,
      }

      console.log(data)

      onSubmit?.(data, e)
   }

   return (
      <form
         className={cn('grid grid-cols-[530px_1fr]', className)}
         onSubmit={handleSubmit}
         {...rest}
      >
         <PreviewImage
            productName={product.name}
            imageUrl={currentVariation?.imageUrl}
            sizeValue={sizeValue}
         />

         <div className={'flex flex-col justify-between'}>
            <div className={'flex flex-col gap-1.5'}>
               <div className={'flex justify-between'}>
                  <Typography className={'text-2xl'} variant={'large'} as={'h1'}>
                     {product.name}
                  </Typography>

                  <FoodValuesTooltip foodValues={currentVariation?.foodValue} />
               </div>

               <Typography className={'lowercase'} variant={'lead'}>
                  {variationInfo}
               </Typography>

               {currentVariation.ingredients.length > 0 ? (
                  <Ingredients />
               ) : (
                  <Typography>{product.description}</Typography>
               )}

               <SizeTabs value={currentSize} onValueChange={handleSizeChange(currentBase)} />

               <BasesTabs
                  currentSize={currentSize}
                  value={currentBase}
                  onValueChange={handleBaseChange(currentSize)}
               />

               <Toppings items={currentVariation.toppings} />
            </div>

            <Button className={'rounded-3xl font-bold'} size={'lg'}>
               В корзину {formatPriceRub(totalPrice)}
            </Button>
         </div>
      </form>
   )
}
