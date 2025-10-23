'use client'

import type { ComponentProps } from 'react'

import { ArrowRightIcon, ChevronRightIcon, ShoppingCartIcon } from 'lucide-react'
import { useEffect } from 'react'

import { useCartStore } from '@/entities/cart'
import { CartSheetItem } from '@/entities/cart/ui/cart-sheet-item'
import { formatPriceRub } from '@/shared/lib/format-price-rub'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/shadcn/button'
import { ScrollArea } from '@/shared/ui/shadcn/scroll-area'
import { Separator } from '@/shared/ui/shadcn/separator'
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from '@/shared/ui/shadcn/sheet'

type CartSheetProps = {
   triggerProps?: ComponentProps<typeof Button>
} & ComponentProps<typeof Sheet>

export const CartSheet = ({ triggerProps, ...rest }: CartSheetProps) => {
   const totalAmount = useCartStore(state => state.totalAmount)
   const items = useCartStore(state => state.items)

   const fetchCartItems = useCartStore(state => state.fetchCartItems)

   useEffect(() => {
      ;(async () => {
         await fetchCartItems()
      })()
   }, [fetchCartItems])

   return (
      <Sheet {...rest}>
         <SheetTrigger asChild>
            <Button
               {...triggerProps}
               className={cn(
                  `
                     group relative gap-4
                     max-lg:hidden
                  `,
                  triggerProps?.className
               )}
            >
               <span className={`font-bold`}>520 ₽</span>

               <Separator className={`opacity-50`} orientation={'vertical'} />

               <div
                  className={`
                     flex items-center gap-1 font-bold transition-all duration-300
                     group-hover:opacity-0
                  `}
               >
                  <ShoppingCartIcon className={'relative'} strokeWidth={2} size={16} />

                  <span className={'font-bold'}>3</span>
               </div>

               <ArrowRightIcon
                  size={20}
                  className={`
                     absolute right-5 -translate-x-2 opacity-0 transition duration-300
                     group-hover:translate-x-0 group-hover:opacity-100
                  `}
               />
            </Button>
         </SheetTrigger>

         <SheetContent className={'flex h-full'}>
            <SheetHeader>
               <SheetTitle className={'text-2xl'}>
                  {getProductWord(items.length)} на {formatPriceRub(totalAmount)}
               </SheetTitle>

               <SheetDescription className={'sr-only'} />
            </SheetHeader>

            <ScrollArea className={'h-9/12'}>
               <div className={'space-y-2 px-4'}>
                  {items.map(item => (
                     <CartSheetItem key={item.variationId} {...item} />
                  ))}
               </div>
            </ScrollArea>

            <SheetFooter className={'border-t shadow-lg'}>
               <div className={'flex justify-between font-bold'}>
                  <span>Сумма заказа</span>
                  <span>{formatPriceRub(totalAmount)}</span>
               </div>

               <Button size={'lg'}>
                  К оформлению заказа
                  <ChevronRightIcon />
               </Button>
            </SheetFooter>
         </SheetContent>
      </Sheet>
   )
}

function getProductWord(count: number) {
   const rule = new Intl.PluralRules('ru-RU').select(count)

   switch (rule) {
      case 'one':
         return `${count} товар`
      case 'few':
         return `${count} товара`
      case 'many':
         return `${count} товаров`
      default:
         return `${count} товаров`
   }
}
