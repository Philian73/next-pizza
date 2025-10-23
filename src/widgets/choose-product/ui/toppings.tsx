import type { ComponentProps } from 'react'

import type { ApiSchemas } from '@/shared/api'

import { CircleCheckIcon } from 'lucide-react'
import { useCallback } from 'react'

import Image from 'next/image'

import { formatPriceRub } from '@/shared/lib/format-price-rub'
import { cn } from '@/shared/lib/utils'
import { ScrollArea } from '@/shared/ui/shadcn/scroll-area'
import { Typography } from '@/shared/ui/typography'

import { useChooseProductFilters } from '../model/use-choose-product-filters'

type ToppingsProps = {
   items: ApiSchemas['Topping'][]
} & Omit<ComponentProps<'section'>, 'children'>

export const Toppings = ({ items, ...rest }: ToppingsProps) => {
   const { toppings, handleToppingsChange } = useChooseProductFilters()

   const toggleTopping = useCallback(
      (toppingId: string) => () => {
         const index = toppings.indexOf(toppingId)
         const newArray = [...toppings]

         if (index === -1) {
            newArray.push(toppingId)
         } else {
            newArray.splice(index, 1)
         }

         handleToppingsChange(newArray)
      },
      [toppings, handleToppingsChange]
   )

   if (items.length === 0) {
      return null
   }

   return (
      <section {...rest}>
         <Typography as={'span'} variant={'h4'}>
            Добавить по вкусу
         </Typography>

         <ScrollArea type={'always'} className={'-mx-4 my-0.5'}>
            <div className={'flex h-60 flex-wrap gap-2 px-4 py-3'}>
               {items.map(topping => {
                  const selected = toppings.includes(topping.id)

                  return (
                     <button
                        type={'button'}
                        data-selected={selected}
                        key={topping.id}
                        className={cn(
                           `
                              relative flex w-[calc(33.333%-0.5rem)] touch-manipulation flex-col
                              items-center rounded-md border-1 border-background bg-background p-2
                              shadow-[0_0_20px_rgba(6,5,50,0.12)] transition-shadow duration-150
                              ease-out
                              data-[selected=true]:border-primary data-[selected=true]:shadow-none
                           `
                        )}
                        onClick={toggleTopping(topping.id)}
                     >
                        <Image
                           className={'relative block'}
                           src={topping.thumbnailUrl ?? ''}
                           height={88}
                           width={88}
                           alt={''}
                        />
                        <CircleCheckIcon
                           size={24}
                           className={cn(
                              `
                                 absolute top-1 right-1 text-primary opacity-0 transition-opacity
                                 duration-150 ease-out
                              `,
                              selected && 'opacity-100'
                           )}
                        />
                        <Typography variant={'xs'} className={'h-8 grow'}>
                           {topping.name}
                        </Typography>
                        <Typography>{formatPriceRub(topping.price)}</Typography>
                     </button>
                  )
               })}

               <span className={'block border border-background/0'} />
            </div>
         </ScrollArea>
      </section>
   )
}
