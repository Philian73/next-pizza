import type { Prisma } from '@prisma/client'

import slugify from 'slugify'

type Category = Prisma.CategoryUncheckedCreateInput

const CATEGORIES = [
   {
      name: 'Пиццы',
   },
   {
      name: 'Римские пиццы',
   },
   {
      name: 'Закуски',
   },
   {
      name: 'Коктейли',
   },
   {
      name: 'Кофе',
   },
   {
      name: 'Напитки',
   },
   {
      name: 'Десерты',
   },
   {
      name: 'Соусы',
   },
] as const satisfies Omit<Category, 'slug'>[]

type CategoryName = (typeof CATEGORIES)[number]['name']

const getCategories = () =>
   CATEGORIES.map(
      category =>
         ({
            ...category,
            slug: slugify(category.name, {
               lower: true,
               strict: true,
               trim: true,
            }),
         }) satisfies Category
   )

export { getCategories }
export type { CategoryName }
