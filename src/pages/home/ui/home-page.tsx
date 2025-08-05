import { ArrowUpDownIcon } from 'lucide-react'

import { PRODUCTS } from '@/entities/product'
import { Container } from '@/shared/ui/container'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/shared/ui/shadcn/dropdown-menu'
import { TopBar } from '@/widgets/top-bar'

import { FiltersPanel } from './filters/filters-panel'
import { FiltersSheet } from './filters/filters-sheet'
import { ProductsGroupList } from './products-group-list'

export const HomePage = () => {
   return (
      <div className={``}>
         <TopBar />

         <Container className={'flex gap-20 pt-5 pb-10'}>
            <FiltersPanel className={'max-lg:hidden'} />

            <div className={'flex flex-1 flex-col gap-1.5'}>
               <div
                  className={`
                     flex items-center justify-between gap-1.5
                     max-sm:flex-col
                     lg:self-end
                  `}
               >
                  <DropdownMenu>
                     <DropdownMenuTrigger
                        className={`
                           inline-flex h-10 w-fit items-center gap-1.5 self-end rounded-lg bg-muted
                           px-3 py-0.5 font-bold
                        `}
                     >
                        <ArrowUpDownIcon size={16} />

                        <span>Сортировка: </span>

                        <span className={'text-primary'}>популярное</span>
                     </DropdownMenuTrigger>

                     <DropdownMenuContent
                        className={'w-[var(--radix-dropdown-menu-trigger-width)]'}
                     >
                        <ul>
                           <li>
                              <DropdownMenuItem>рейтинг</DropdownMenuItem>
                           </li>
                        </ul>
                     </DropdownMenuContent>
                  </DropdownMenu>

                  <FiltersSheet />
               </div>

               <div className={'flex flex-col gap-6'}>
                  <ProductsGroupList title={'Пиццы'} products={PRODUCTS.PIZZAS} categoryId={1} />

                  <ProductsGroupList title={'Комбо'} products={PRODUCTS.COMBO} categoryId={2} />
               </div>
            </div>
         </Container>
      </div>
   )
}
