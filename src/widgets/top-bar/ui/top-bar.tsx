import type { CategoryItem } from '../model/tob-bar-types'

import { CartSheet } from '@/entities/cart'
import { categoryApi } from '@/entities/category'
import { Container } from '@/shared/ui/container'
import { ScrollArea, ScrollBar } from '@/shared/ui/shadcn/scroll-area'

import { CategoriesNav } from './categories-nav'

export const TopBar = async () => {
   const { data: categories } = await categoryApi.getCategories({
      params: {
         query: {
            onlyWithProducts: true,
         },
      },
   })

   const items: CategoryItem[] = [
      ...(categories ?? []).map(category => ({
         label: category.name,
         slug: category.slug,
         href: `/#${category.slug}`,
      })),
      {
         label: 'Ещё',
         slug: 'more',
         children: [
            {
               label: 'Для демонстрации "Ещё" 1',
               slug: 'simple-1',
               href: '/',
            },
            {
               label: 'Для демонстрации "Ещё" 2',
               slug: 'simple-2',
               href: '/',
            },
            {
               label: 'Для демонстрации "Ещё" 3',
               slug: 'simple-2',
               href: '/',
            },
         ],
      },
   ]

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
               <CategoriesNav items={items} />

               <ScrollBar orientation={'horizontal'} className={'-mt-2'} />
            </ScrollArea>

            <CartSheet />
         </Container>
      </div>
   )
}
