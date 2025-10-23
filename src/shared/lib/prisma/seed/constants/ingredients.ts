import type { Prisma } from '@prisma/client'

import type { SizeName } from '@/shared/lib/prisma/seed/constants/sizes'

import { prisma } from '@/shared/lib/prisma'
import { toNameIdMap } from '@/shared/lib/to-name-id-map'

type Ingredient = Prisma.IngredientUncheckedCreateInput

const getIngredients = async () => {
   const sizes = await prisma.size.findMany()
   const sizesMap = toNameIdMap(sizes)

   const BASIC_INGREDIENTS = [
      {
         name: 'Традиционное тесто 20',
         displayName: 'Традиционное',
      },
      {
         name: 'Традиционное тесто 25',
         displayName: 'Традиционное',
      },
      {
         name: 'Традиционное тесто 30',
         displayName: 'Традиционное',
      },
      {
         name: 'Тонкое тесто 30',
         displayName: 'Тонкое',
      },
      {
         name: 'Традиционное тесто 35',
         displayName: 'Традиционное',
      },
      {
         name: 'Тонкое тесто 35',
         displayName: 'Тонкое',
      },
      {
         name: 'Римское тесто 25',
         displayName: 'Римское тесто',
      },
      {
         name: 'Со льдом',
      },
      {
         name: 'Без льда',
      },
      {
         name: 'Чеснок',
      },
      {
         name: 'Классические колбаски',
      },
      {
         name: 'Соус терияки',
      },
      {
         name: 'Соус песто',
      },
      {
         name: 'Соус бургер',
      },
      {
         name: 'Соус ранч',
      },
      {
         name: 'Сливочный соус с грибами',
      },
      {
         name: 'Фирменный соус альфредо',
      },
      {
         name: 'Фирменный томатный соус',
      },
   ] as const satisfies Ingredient[]

   const PIZZA_INGREDIENTS = [
      {
         name: 'Сырный бортик',
         isTopping: true,
         toppingPrices: generatePrices(['30 см', '35 см'], [179, 199]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152f20c570859ff617c0a6ef03d3.png',
      },
      {
         name: 'Пряная говядина',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [59, 99, 119, 149]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/01991530635b73ecb1a22658b49e1653.png',
      },
      {
         name: 'Моцарелла',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [49, 69, 79, 99]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152f0cb67721b2e278cdffa797eb.png',
      },
      {
         name: 'Сыры чеддер и пармезан',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [49, 69, 79, 99]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152f32e47035aefbe8c971c54502.png',
      },
      {
         name: 'Сыр блю чиз',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [59, 99, 149, 199]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199153050ea707cbed48b92097e095f.png',
      },
      {
         name: 'Острый перец халапеньо',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [39, 49, 59, 79]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152c7eb27553a08f57c8c9861ac3.png',
      },
      {
         name: 'Нежный цыпленок',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [49, 69, 79, 99]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152e59157089adb89948280ebb10.png',
      },
      {
         name: 'Шампиньоны',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [39, 49, 59, 79]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152bfda5723f8bbecc43a35f83f1.png',
      },
      {
         name: 'Бекон',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [49, 69, 79, 99]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/019915303b5377fd97915878fdf2a9f0.png',
      },
      {
         name: 'Ветчина',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [49, 69, 79, 99]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152d7fd075a9b11d17f8acaf1670.png',
      },
      {
         name: 'Пикантная пепперони',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [49, 69, 79, 99]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152b6e6978a188ec97d9bd52e7d2.png',
      },
      {
         name: 'Острая чоризо',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [49, 69, 79, 99]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152e43a67720a2c59d63081e66a5.png',
      },
      {
         name: 'Маринованные огурчики',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [39, 49, 59, 79]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152e33ee7722ac038fa5bc26e630.png',
      },
      {
         name: 'Свежие томаты',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [39, 49, 59, 79]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152a8428737d9f6b19c1b2329749.png',
      },
      {
         name: 'Красный лук',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [39, 49, 59, 79]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152bec117341ad729b24870b55f3.png',
      },
      {
         name: 'Сочные ананасы',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [39, 49, 59, 79]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152b81587495b19ba8008c567f5d.png',
      },
      {
         name: 'Итальянские травы',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [19, 29, 39, 59]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152ced7677fcb0e49edd0ebf6c90.png',
      },
      {
         name: 'Сладкий перец',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [39, 49, 59, 79]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152da27677a7a24a41b4eddfcedd.png',
      },
      {
         name: 'Кубики брынзы',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [49, 69, 79, 99]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152a464a781abbc1d135f7d138aa.png',
      },
      {
         name: 'Баварские колбаски',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [59, 119, 129, 159]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/019915307407729e970fee55536f6dca.png',
      },
      {
         name: 'Креветки',
         isTopping: true,
         toppingPrices: generatePrices(['20 см', '25 см', '30 см', '35 см'], [99, 179, 199, 219]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0199152abd577969bb76a8123d1a7ea1.png',
      },
   ] as const satisfies Ingredient[]

   const COFFEE_INGREDIENTS = [
      {
         name: 'Молоко',
         isTopping: true,
         toppingPrices: generatePrices(['0.3 л', '0.4 л'], [15, 15]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/019548f1145377ee8bed4ce351c8799b.png',
      },
      {
         name: 'Сироп черный лес',
         isTopping: true,
         toppingPrices: generatePrices(['0.3 л', '0.4 л'], [20, 20]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0196d9742537797d89fdd065f7fdc26c.png',
      },
      {
         name: 'Сироп со вкусом карамели',
         isTopping: true,
         toppingPrices: generatePrices(['0.3 л', '0.4 л'], [20, 20]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0196d974a65c75098c18ddcb1c5c79e2.png',
      },
      {
         name: 'Сироп со вкусом фундука',
         isTopping: true,
         toppingPrices: generatePrices(['0.3 л', '0.4 л'], [20, 20]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0196d97660ae711db3b77115476c84a0.png',
      },
      {
         name: 'Кокосовый сироп',
         isTopping: true,
         toppingPrices: generatePrices(['0.3 л', '0.4 л'], [20, 20]),
         thumbnailUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/0196d9758834768aafcb6f5ec3b28c02.png',
      },
   ] as const satisfies Ingredient[]

   function generatePrices(sizeNames: SizeName[], prices: number[]) {
      if (prices.length !== sizeNames.length) {
         throw new Error('Prices and sizes length mismatch')
      }

      return {
         createMany: {
            data: sizeNames.map((sizeName, index) => ({
               price: prices[index],
               sizeId: sizesMap[sizeName],
            })),
         },
      }
   }

   return [...BASIC_INGREDIENTS, ...PIZZA_INGREDIENTS, ...COFFEE_INGREDIENTS]
}

type IngredientName = Awaited<ReturnType<typeof getIngredients>>[number]['name']

export { getIngredients }
export type { IngredientName }
