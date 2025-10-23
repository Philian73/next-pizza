import type { ApiSchemas } from '@/shared/api'

import { XIcon } from 'lucide-react'

import Image from 'next/image'

import { useCartStore } from '@/entities/cart'
import { formatPriceRub } from '@/shared/lib/format-price-rub'
import { Button } from '@/shared/ui/shadcn/button'
import { Separator } from '@/shared/ui/shadcn/separator'
import { Typography } from '@/shared/ui/typography'

type CartSheetItemProps = ApiSchemas['CartItem']

export const CartSheetItem = ({
   quantity = 1,
   imageUrl,
   product,
   subtotal,
   // variationId,
   id: cartItemId,
   toppings,
   removedIngredients,
}: CartSheetItemProps) => {
   const updateCartItem = useCartStore(state => state.updateCartItem)

   const toppingsNames = toppings.map(({ name }) => name).join(', ')
   const removedIngredientsNames = removedIngredients.map(({ name }) => name).join(', ')

   return (
      <div className={'space-y-3'}>
         <div className={'flex items-start gap-3'}>
            <Image className={'mt-2'} src={imageUrl ?? ''} alt={''} width={64} height={64} />

            <div className={'flex-1'}>
               <div className={'flex items-center justify-between'}>
                  <Typography className={'font-bold'}>{product.name}</Typography>

                  <Button variant={'ghost'} size={'icon'}>
                     <XIcon size={16} />
                  </Button>
               </div>
               <div>
                  <Typography variant={'lead'} className={'lowercase'}>
                     {'пока что пусто'}
                  </Typography>
                  <Typography variant={'lead'} className={'lowercase'}>
                     + {toppingsNames}
                  </Typography>
                  <Typography variant={'lead'} className={'lowercase'}>
                     - {removedIngredientsNames}
                  </Typography>
               </div>
            </div>
         </div>

         <Separator />

         <div className={'flex items-center justify-between'}>
            <Typography className={'font-bold'}>{formatPriceRub(subtotal)}</Typography>

            <div>
               <Button size={'sm'} variant={'link'}>
                  Изменить
               </Button>
               <Button size={'icon'} variant={'ghost'} disabled={quantity === 1}>
                  -
               </Button>
               <Typography
                  className={`
                     inline-flex size-8 items-center justify-center overflow-hidden text-ellipsis
                  `}
                  as={'span'}
               >
                  {quantity}
               </Typography>
               <Button
                  onClick={async () => {
                     await updateCartItem(cartItemId, { quantity: quantity + 1 })
                  }}
                  size={'icon'}
                  variant={'ghost'}
               >
                  +
               </Button>
            </div>
         </div>
      </div>
   )
}
