import { ArrowRightIcon, ShoppingCartIcon } from 'lucide-react'

import { Container } from '@/shared/ui/container'
import { Button } from '@/shared/ui/shadcn/button'
import { ScrollArea, ScrollBar } from '@/shared/ui/shadcn/scroll-area'
import { Separator } from '@/shared/ui/shadcn/separator'

import { CategoriesNav } from './categories-nav'

export const TopBar = () => {
   return (
      <div className={`sticky top-0 z-10 pt-3 pb-1.5 shadow-lg shadow-black/5 backdrop-blur-lg`}>
         <Container className={`flex items-start justify-between gap-3 overflow-x-hidden`}>
            <ScrollArea
               type={'always'}
               className={`
                  max-w-full pb-2
                  lg:max-w-full
               `}
            >
               <CategoriesNav />

               <ScrollBar orientation={'horizontal'} className={'-mt-2'} />
            </ScrollArea>

            <Button
               className={`
                  group relative gap-4
                  max-lg:hidden
               `}
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
         </Container>
      </div>
   )
}
