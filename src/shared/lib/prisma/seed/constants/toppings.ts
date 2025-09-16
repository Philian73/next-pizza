import type { Prisma } from '@prisma/client'

import type { IngredientName } from './ingredients'
import type { SizeName } from './sizes'

import { prisma } from '@/shared/lib/prisma'

type Topping = Prisma.ToppingUncheckedCreateInput

const getToppings = async (): Promise<Topping[]> => {
   const ingredients = await prisma.ingredient.findMany()
   const sizes = await prisma.size.findMany()
   const ingredientsMap = ingredients.reduce(
      (acc, ingredient) => {
         const name = ingredient.name as IngredientName

         acc[name] = ingredient.id

         return acc
      },
      {} as Record<IngredientName, string>
   )
   const sizesMap = sizes.reduce(
      (acc, size) => {
         const name = size.name as SizeName

         acc[name] = size.id

         return acc
      },
      {} as Record<SizeName, string>
   )

   const generateTopping = ({
      ingredientName,
      prices,
      sizeNames,
   }: {
      ingredientName: IngredientName
      prices: number[]
      sizeNames: SizeName[]
   }): Topping => {
      if (prices.length !== sizeNames.length) {
         throw new Error('Prices and sizes length mismatch')
      }

      return {
         ingredientId: ingredientsMap[ingredientName],
         prices: {
            createMany: {
               data: sizeNames.map((sizeName, index) => ({
                  price: prices[index],
                  sizeId: sizesMap[sizeName],
               })),
            },
         },
      }
   }

   return [
      generateTopping({
         ingredientName: 'Сырный бортик',
         prices: [179, 199],
         sizeNames: ['30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Пряная говядина',
         prices: [59, 99, 119, 149],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Моцарелла',
         prices: [49, 69, 79, 99],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Сыры чеддер и пармезан',
         prices: [49, 69, 79, 99],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Сыр блю чиз',
         prices: [59, 99, 149, 199],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Острый перец халапеньо',
         prices: [39, 49, 59, 79],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Нежный цыпленок',
         prices: [49, 69, 79, 99],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Шампиньоны',
         prices: [39, 49, 59, 79],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Бекон',
         prices: [49, 69, 79, 99],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Ветчина',
         prices: [49, 69, 79, 99],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Пикантная пепперони',
         prices: [49, 69, 79, 99],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Острая чоризо',
         prices: [49, 69, 79, 99],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Маринованные огурчики',
         prices: [39, 49, 59, 79],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Свежие томаты',
         prices: [39, 49, 59, 79],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Красный лук',
         prices: [39, 49, 59, 79],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Сочные ананасы',
         prices: [39, 49, 59, 79],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Итальянские травы',
         prices: [19, 29, 39, 59],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Сладкий перец',
         prices: [39, 49, 59, 79],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Кубики брынзы',
         prices: [49, 69, 79, 99],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Баварские колбаски',
         prices: [59, 119, 129, 159],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Креветки',
         prices: [99, 179, 199, 219],
         sizeNames: ['20 см', '25 см', '30 см', '35 см'],
      }),
      generateTopping({
         ingredientName: 'Молоко',
         prices: [15, 15],
         sizeNames: ['0.3 л', '0.4 л'],
      }),
      generateTopping({
         ingredientName: 'Сироп черный лес',
         prices: [20, 20],
         sizeNames: ['0.3 л', '0.4 л'],
      }),
      generateTopping({
         ingredientName: 'Сироп со вкусом карамели',
         prices: [20, 20],
         sizeNames: ['0.3 л', '0.4 л'],
      }),
      generateTopping({
         ingredientName: 'Сироп со вкусом фундука',
         prices: [20, 20],
         sizeNames: ['0.3 л', '0.4 л'],
      }),
      generateTopping({
         ingredientName: 'Кокосовый сироп',
         prices: [20, 20],
         sizeNames: ['0.3 л', '0.4 л'],
      }),
   ]
}

export { getToppings }
