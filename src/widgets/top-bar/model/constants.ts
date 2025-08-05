export type CategoryItem = {
   label: string
} & (
   | {
        children: (Omit<CategoryItem, 'children'> & { href: string })[]
        href?: never
     }
   | {
        href: string
        children?: never
     }
)

export const CATEGORIES: CategoryItem[] = [
   {
      label: 'Пиццы',
      href: '/#Пиццы',
   },
   {
      label: 'Комбо',
      href: '/#Комбо',
   },
   {
      label: 'Закуски',
      href: '/#Закуски',
   },
   {
      label: 'Коктейли',
      href: '/#Коктейли',
   },
   {
      label: 'Кофе',
      href: '/#Кофе',
   },
   {
      label: 'Напитки',
      href: '/#Напитки',
   },
   {
      label: 'Десерты',
      href: '/#Десерты',
   },
   {
      label: 'Ещё',
      children: [
         {
            label: 'Хиты',
            href: '/',
         },
         {
            label: 'На компанию',
            href: '/',
         },
         {
            label: 'Любят дети',
            href: '/',
         },
      ],
   },
]
