import type { Prisma } from '@prisma/client'

import type { IngredientName } from './ingredients'
import type { ProductName } from './products'
import type { SizeName } from './sizes'

import { prisma } from '@/shared/lib/prisma'
import { toNameIdMap } from '@/shared/lib/to-name-id-map'

type ProductVariation = Prisma.ProductVariationUncheckedCreateInput

type BaseIngredients = (
   | IngredientName
   | {
        ingredientName: IngredientName
        isBasic?: boolean
        choiceType?: 'NONE' | 'SINGLE' | 'MULTIPLE'
     }
)[]

type FoodValue = {
   calories: number
   proteins: number
   fats: number
   carbohydrates: number
   weight: number
}

type Variations = {
   sizeName: SizeName
   isDefault?: boolean
   dough?: IngredientName
   imageUrl: string
   price: number
   foodValue?: FoodValue
}[]

const withDough = (dough: IngredientName | undefined, base?: BaseIngredients) => {
   const safeBase = base ?? []

   return dough ? [{ ingredientName: dough, isBasic: true }, ...safeBase] : safeBase
}

const RECIPES: Partial<
   Record<
      ProductName,
      {
         base?: BaseIngredients
         variations: Variations
      }
   >
> = {
   'Терияки': {
      base: [
         { ingredientName: 'Нежный цыпленок', choiceType: 'SINGLE' },
         { ingredientName: 'Сладкий перец', choiceType: 'SINGLE' },
         { ingredientName: 'Красный лук', choiceType: 'SINGLE' },
         'Моцарелла',
         'Соус терияки',
         'Фирменный соус альфредо',
      ],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198da9ed4d370c4b33eb837edde00b9.avif',
            price: 379,
            foodValue: { calories: 262, proteins: 11, fats: 9.1, carbohydrates: 34, weight: 230 },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198da9edab47041b58610a9deb6a305.avif',
            price: 519,
            foodValue: {
               calories: 259.8,
               proteins: 10.2,
               fats: 8.5,
               carbohydrates: 35.7,
               weight: 350,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198da9ee2dd75038d9b6f7f23810d42.avif',
            price: 799,
            foodValue: {
               calories: 258.4,
               proteins: 10.2,
               fats: 8.6,
               carbohydrates: 35.1,
               weight: 530,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198da9f048273e690f16d79110f25ef.avif',
            price: 979,
            foodValue: {
               calories: 249.8,
               proteins: 9.9,
               fats: 8.2,
               carbohydrates: 34,
               weight: 730,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198da9ee9277855ba6f8efa56d5cd39.avif',
            price: 799,
            foodValue: { calories: 254.9, proteins: 11, fats: 9.7, carbohydrates: 31, weight: 430 },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198da9f048273e690f16d79110f25ef.avif',
            price: 979,
            foodValue: {
               calories: 244,
               proteins: 10.3,
               fats: 8.9,
               carbohydrates: 30.7,
               weight: 630,
            },
         },
      ],
   },
   'Чесночный цыпленок': {
      base: [
         { ingredientName: 'Нежный цыпленок', choiceType: 'SINGLE' },
         { ingredientName: 'Свежие томаты', choiceType: 'SINGLE' },
         { ingredientName: 'Чеснок', choiceType: 'SINGLE' },
         'Моцарелла',
         'Фирменный соус альфредо',
      ],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf23ebad745fb87ace38910786fb.avif',
            price: 289,
            foodValue: {
               calories: 264.1,
               proteins: 11.3,
               fats: 9.8,
               carbohydrates: 33.1,
               weight: 220,
            },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf24084770e496d9c114396234c5.avif',
            price: 369,
            foodValue: {
               calories: 267.6,
               proteins: 10.7,
               fats: 9,
               carbohydrates: 35.9,
               weight: 330,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif',
            price: 629,
            foodValue: {
               calories: 254,
               proteins: 10.3,
               fats: 8.7,
               carbohydrates: 33.5,
               weight: 520,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf243a297705b202e0d2fbcf8573.avif',
            price: 849,
            foodValue: {
               calories: 251.7,
               proteins: 10.2,
               fats: 8.6,
               carbohydrates: 33.4,
               weight: 700,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf24287773ef8556864040c2d743.avif',
            price: 629,
            foodValue: {
               calories: 261.9,
               proteins: 11.6,
               fats: 10.4,
               carbohydrates: 30.4,
               weight: 400,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf2457327473ae1d45c4e1a27346.avif',
            price: 849,
            foodValue: {
               calories: 246,
               proteins: 10.7,
               fats: 9.4,
               carbohydrates: 29.7,
               weight: 600,
            },
         },
      ],
   },
   'Пикантные колбаски': {
      base: [
         'Классические колбаски',
         { ingredientName: 'Красный лук', choiceType: 'SINGLE' },
         'Моцарелла',
         'Фирменный томатный соус',
      ],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf24e1e37803b79df2dbd793a06f.avif',
            price: 289,
            foodValue: {
               calories: 291.7,
               proteins: 11.1,
               fats: 13.2,
               carbohydrates: 32.2,
               weight: 230,
            },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf24f1737354bc05f207bfea1b05.avif',
            price: 369,
            foodValue: {
               calories: 305,
               proteins: 10.9,
               fats: 13.8,
               carbohydrates: 34.4,
               weight: 350,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf25089a74d08e08629b41ed39ee.avif',
            price: 649,
            foodValue: {
               calories: 291.9,
               proteins: 10.6,
               fats: 12.8,
               carbohydrates: 33.6,
               weight: 530,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf25a25a735e8492dff423cdf4ae.avif',
            price: 849,
            foodValue: {
               calories: 285.6,
               proteins: 10.2,
               fats: 12.3,
               carbohydrates: 33.6,
               weight: 710,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf252713792e905c9fffa6acfc4b.avif',
            price: 649,
            foodValue: {
               calories: 296.1,
               proteins: 11.4,
               fats: 14.9,
               carbohydrates: 29.1,
               weight: 430,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf25a7b2719a8262c1581686d397.avif',
            price: 849,
            foodValue: {
               calories: 285.6,
               proteins: 10.7,
               fats: 13.6,
               carbohydrates: 30.1,
               weight: 610,
            },
         },
      ],
   },
   'Четыре сыра': {
      base: [
         { ingredientName: 'Сыр блю чиз', choiceType: 'SINGLE' },
         { ingredientName: 'Сыры чеддер и пармезан', choiceType: 'SINGLE' },
         'Моцарелла',
         'Фирменный соус альфредо',
      ],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf48c4ea7973984b2c0ad3463c47.avif',
            price: 399,
            foodValue: {
               calories: 303.5,
               proteins: 12.4,
               fats: 12.9,
               carbohydrates: 34.5,
               weight: 210,
            },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf48d5637727bf280aa084e6d7e8.avif',
            price: 569,
            foodValue: {
               calories: 304.1,
               proteins: 11.7,
               fats: 12.3,
               carbohydrates: 34.4,
               weight: 340,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf48e02377e9adc0b190c9676321.avif',
            price: 839,
            foodValue: {
               calories: 298.5,
               proteins: 11.5,
               fats: 12.1,
               carbohydrates: 33.8,
               weight: 510,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf48f9a872668043789597fb0afd.avif',
            price: 1029,
            foodValue: {
               calories: 300,
               proteins: 11.6,
               fats: 12.4,
               carbohydrates: 33.4,
               weight: 690,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf48e7ab7462be0c3748703a3157.avif',
            price: 839,
            foodValue: {
               calories: 310.4,
               proteins: 13,
               fats: 14.5,
               carbohydrates: 29.9,
               weight: 400,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf48ff2e78839646810e2cea20d2.avif',
            price: 1029,
            foodValue: {
               calories: 311.7,
               proteins: 12.7,
               fats: 14.3,
               carbohydrates: 30.8,
               weight: 570,
            },
         },
      ],
   },
   'Сырная': {
      base: ['Моцарелла', 'Сыры чеддер и пармезан', 'Фирменный соус альфредо'],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf40dc1574eca41f1be918150dff.avif',
            price: 289,
            foodValue: {
               calories: 328.3,
               proteins: 13.1,
               fats: 12.8,
               carbohydrates: 40.2,
               weight: 180,
            },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf40e2987242886716627224c196.avif',
            price: 339,
            foodValue: {
               calories: 294.1,
               proteins: 10.6,
               fats: 10.3,
               carbohydrates: 37.8,
               weight: 310,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf40eb1171aabe90b1b3ce07c0c5.avif',
            price: 619,
            foodValue: {
               calories: 292.8,
               proteins: 10.8,
               fats: 10.6,
               carbohydrates: 36.7,
               weight: 470,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf4107ab727ca78f5f0a80f9966f.avif',
            price: 779,
            foodValue: {
               calories: 291.4,
               proteins: 10.7,
               fats: 10.7,
               carbohydrates: 36,
               weight: 640,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf40f3da72bd8d205ff00cc3613e.avif',
            price: 619,
            foodValue: {
               calories: 304.3,
               proteins: 12.1,
               fats: 12.7,
               carbohydrates: 33.2,
               weight: 360,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf410ffa72d9b35802f9f0c97c43.avif',
            price: 779,
            foodValue: {
               calories: 296.5,
               proteins: 11.5,
               fats: 12.2,
               carbohydrates: 33.1,
               weight: 530,
            },
         },
      ],
   },
   'Ветчина и сыр': {
      base: [
         { ingredientName: 'Ветчина', choiceType: 'SINGLE' },
         'Моцарелла',
         'Фирменный соус альфредо',
      ],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf2824e4797e898804ed01ef1cb7.avif',
            price: 339,
            foodValue: {
               calories: 306.8,
               proteins: 12.7,
               fats: 11.5,
               carbohydrates: 38.1,
               weight: 190,
            },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf28326a76069673951c0086b4f8.avif',
            price: 479,
            foodValue: {
               calories: 283.7,
               proteins: 10.7,
               fats: 9.7,
               carbohydrates: 36.6,
               weight: 320,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf283b2372ea8e7cfc8adae9ea84.avif',
            price: 709,
            foodValue: {
               calories: 282.1,
               proteins: 10.7,
               fats: 9.8,
               carbohydrates: 35.9,
               weight: 480,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf2859e1745d8b2bde952cf1283f.avif',
            price: 839,
            foodValue: {
               calories: 285.9,
               proteins: 10.6,
               fats: 9.9,
               carbohydrates: 36.6,
               weight: 630,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf284e0e74ffb47b0a668686351b.avif',
            price: 709,
            foodValue: {
               calories: 290.2,
               proteins: 12,
               fats: 11.7,
               carbohydrates: 32.3,
               weight: 370,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf28744a788e8ea8e1efa999caf6.avif',
            price: 839,
            foodValue: {
               calories: 274.2,
               proteins: 10.8,
               fats: 10.6,
               carbohydrates: 31.9,
               weight: 550,
            },
         },
      ],
   },
   'Двойной цыпленок': {
      base: [
         { ingredientName: 'Нежный цыпленок', choiceType: 'SINGLE' },
         'Моцарелла',
         'Фирменный соус альфредо',
      ],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf3e364b70b8942b0e862a54efa3.avif',
            price: 349,
            foodValue: {
               calories: 312.1,
               proteins: 14.8,
               fats: 11.2,
               carbohydrates: 38.1,
               weight: 190,
            },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf3e3bec72d2997d447502c2e3ee.avif',
            price: 489,
            foodValue: {
               calories: 249.2,
               proteins: 11,
               fats: 8.3,
               carbohydrates: 32.6,
               weight: 360,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf3e424371b49f0b8d7dbe320a70.avif',
            price: 749,
            foodValue: {
               calories: 258,
               proteins: 11.6,
               fats: 8.8,
               carbohydrates: 33.2,
               weight: 520,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf3e5cc077b49d3968b9fe3d7b99.avif',
            price: 869,
            foodValue: {
               calories: 253,
               proteins: 11.5,
               fats: 8.6,
               carbohydrates: 32.5,
               weight: 710,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf3e48527603ae064ff5994c99f3.avif',
            price: 749,
            foodValue: {
               calories: 248.4,
               proteins: 12.4,
               fats: 9.7,
               carbohydrates: 27.8,
               weight: 430,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf3e62ab78d88f34d70f2f5ba902.avif',
            price: 869,
            foodValue: {
               calories: 247.6,
               proteins: 12.2,
               fats: 9.3,
               carbohydrates: 28.8,
               weight: 610,
            },
         },
      ],
   },
   'Креветка и песто ': {
      base: [
         { ingredientName: 'Креветки', choiceType: 'SINGLE' },
         { ingredientName: 'Свежие томаты', choiceType: 'SINGLE' },
         { ingredientName: 'Шампиньоны', choiceType: 'SINGLE' },
         'Соус песто',
         'Моцарелла',
         { ingredientName: 'Итальянские травы', choiceType: 'SINGLE' },
         'Фирменный томатный соус',
      ],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf4d13d57341a8d5f712f26566b1.avif',
            price: 519,
            foodValue: {
               calories: 220.1,
               proteins: 9.5,
               fats: 8,
               carbohydrates: 27.6,
               weight: 270,
            },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf4d195f788db1a467b7b136e22c.avif',
            price: 749,
            foodValue: {
               calories: 216.4,
               proteins: 9,
               fats: 7.6,
               carbohydrates: 28.1,
               weight: 430,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf4d218b75d4a3e667fc2f6d7643.avif',
            price: 1129,
            foodValue: {
               calories: 226.6,
               proteins: 9.3,
               fats: 8,
               carbohydrates: 29.3,
               weight: 610,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf4d40af763397802e21641fe6c4.avif',
            price: 1319,
            foodValue: {
               calories: 210.7,
               proteins: 8.7,
               fats: 7.2,
               carbohydrates: 27.8,
               weight: 860,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf4d2c25799584e880b35987fc63.avif',
            price: 1129,
            foodValue: {
               calories: 226.4,
               proteins: 10.1,
               fats: 9.2,
               carbohydrates: 25.7,
               weight: 490,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf4d479a76d68d33d6e7483d59d7.avif',
            price: 1319,
            foodValue: {
               calories: 215,
               proteins: 9.5,
               fats: 8.1,
               carbohydrates: 26,
               weight: 710,
            },
         },
      ],
   },
   'Аррива!': {
      base: [
         { ingredientName: 'Нежный цыпленок', choiceType: 'SINGLE' },
         { ingredientName: 'Острая чоризо', choiceType: 'SINGLE' },
         'Соус бургер',
         { ingredientName: 'Сладкий перец', choiceType: 'SINGLE' },
         { ingredientName: 'Красный лук', choiceType: 'SINGLE' },
         { ingredientName: 'Свежие томаты', choiceType: 'SINGLE' },
         'Моцарелла',
         'Соус ранч',
         { ingredientName: 'Чеснок', choiceType: 'SINGLE' },
      ],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf2e49b574eeb7ebb1d81dd6091c.avif',
            price: 469,
            foodValue: {
               calories: 280.8,
               proteins: 10.9,
               fats: 12.7,
               carbohydrates: 30.7,
               weight: 240,
            },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf2e4f9c7980a5390fb80de3fb04.avif',
            price: 669,
            foodValue: {
               calories: 285.1,
               proteins: 10.2,
               fats: 11.8,
               carbohydrates: 32.5,
               weight: 370,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf2e5d2973a4bf5ec61161496f91.avif',
            price: 969,
            foodValue: {
               calories: 276.9,
               proteins: 9.9,
               fats: 11.7,
               carbohydrates: 31.1,
               weight: 570,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf2e84ed7564b0265013a4e43711.avif',
            price: 1159,
            foodValue: {
               calories: 274.8,
               proteins: 9.9,
               fats: 11.4,
               carbohydrates: 31.2,
               weight: 760,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf2e637f77198d981810a1d0e1bd.avif',
            price: 969,
            foodValue: {
               calories: 282.1,
               proteins: 10.8,
               fats: 13.7,
               carbohydrates: 27.1,
               weight: 460,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf2e910172f1a0c13d2cd564daa7.avif',
            price: 1159,
            foodValue: {
               calories: 276.2,
               proteins: 10.5,
               fats: 12.8,
               carbohydrates: 27.9,
               weight: 650,
            },
         },
      ],
   },
   'Карбонара': {
      base: [
         { ingredientName: 'Бекон', choiceType: 'SINGLE' },
         { ingredientName: 'Сыры чеддер и пармезан', choiceType: 'SINGLE' },
         'Моцарелла',
         { ingredientName: 'Свежие томаты', choiceType: 'SINGLE' },
         { ingredientName: 'Красный лук', choiceType: 'SINGLE' },
         { ingredientName: 'Чеснок', choiceType: 'SINGLE' },
         'Фирменный соус альфредо',
         { ingredientName: 'Итальянские травы', choiceType: 'SINGLE' },
      ],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf2adf8d75e7b6ceb4d0834c16a5.avif',
            price: 479,
            foodValue: {
               calories: 325.8,
               proteins: 11.6,
               fats: 16.2,
               carbohydrates: 33.5,
               weight: 220,
            },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf2aec0173979677b991c86a96ac.avif',
            price: 659,
            foodValue: {
               calories: 312.2,
               proteins: 9.8,
               fats: 16.3,
               carbohydrates: 29.3,
               weight: 410,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf2b03447079941f2d5ac6e986a9.avif',
            price: 1009,
            foodValue: {
               calories: 316.7,
               proteins: 10.2,
               fats: 16.3,
               carbohydrates: 30.1,
               weight: 590,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf2b2f8a72938d1d3475aa698261.avif',
            price: 1119,
            foodValue: {
               calories: 322.3,
               proteins: 10.2,
               fats: 17.1,
               carbohydrates: 29.7,
               weight: 800,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf2b11d17553b5ad83befb476632.avif',
            price: 1009,
            foodValue: {
               calories: 305.4,
               proteins: 10.2,
               fats: 17.8,
               carbohydrates: 23.9,
               weight: 520,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf2b3be9737f94e700a75aaf786a.avif',
            price: 1119,
            foodValue: {
               calories: 321.8,
               proteins: 10.5,
               fats: 18.7,
               carbohydrates: 25.7,
               weight: 710,
            },
         },
      ],
   },
   'Пепперони': {
      base: [
         { ingredientName: 'Пикантная пепперони', choiceType: 'SINGLE' },
         'Моцарелла',
         'Фирменный томатный соус',
      ],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf39cec4752e97c008ea0f506c3b.avif',
            price: 359,
            foodValue: {
               calories: 284.8,
               proteins: 11.2,
               fats: 11.8,
               carbohydrates: 33.4,
               weight: 220,
            },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf39d4bb722e8908d1031ff9b626.avif',
            price: 519,
            foodValue: {
               calories: 310.4,
               proteins: 12.4,
               fats: 12.5,
               carbohydrates: 35,
               weight: 340,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif',
            price: 789,
            foodValue: {
               calories: 283.9,
               proteins: 11.5,
               fats: 11.4,
               carbohydrates: 31.9,
               weight: 550,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf3a0957743c9338d8083d4baec4.avif',
            price: 929,
            foodValue: {
               calories: 267.2,
               proteins: 10.6,
               fats: 10.4,
               carbohydrates: 30.9,
               weight: 760,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf39e3dd78b084d229ddcb7695a1.avif',
            price: 789,
            foodValue: {
               calories: 284.6,
               proteins: 12.5,
               fats: 13.1,
               carbohydrates: 27.3,
               weight: 450,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf3a5b75773ba1a7b0335afcf4dd.avif',
            price: 929,
            foodValue: {
               calories: 275.8,
               proteins: 11.6,
               fats: 12,
               carbohydrates: 28.5,
               weight: 630,
            },
         },
      ],
   },
   'Гавайская': {
      base: [
         { ingredientName: 'Нежный цыпленок', choiceType: 'SINGLE' },
         { ingredientName: 'Сочные ананасы', choiceType: 'SINGLE' },
         'Моцарелла',
         'Фирменный соус альфредо',
      ],
      variations: [
         {
            sizeName: '20 см',
            dough: 'Традиционное тесто 20',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf52e6f171639e5cc76145ff04a8.avif',
            price: 369,
            foodValue: {
               calories: 276.7,
               proteins: 12.8,
               fats: 9.6,
               carbohydrates: 34.7,
               weight: 220,
            },
         },
         {
            sizeName: '25 см',
            dough: 'Традиционное тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:366x366/0198bf52ecc4752d9e467974aa185ada.avif',
            price: 539,
            foodValue: {
               calories: 250,
               proteins: 10.2,
               fats: 7.7,
               carbohydrates: 33.4,
               weight: 390,
            },
         },
         {
            sizeName: '30 см',
            isDefault: true,
            dough: 'Традиционное тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.avif',
            price: 829,
            foodValue: {
               calories: 246.8,
               proteins: 10.2,
               fats: 7.7,
               carbohydrates: 32.4,
               weight: 590,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Традиционное тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf532a5e799fa877b3f9f41ff27b.avif',
            price: 969,
            foodValue: {
               calories: 241,
               proteins: 10.1,
               fats: 7.5,
               carbohydrates: 31.7,
               weight: 810,
            },
         },
         {
            sizeName: '30 см',
            dough: 'Тонкое тесто 30',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf53118a74faa7bff011898e0afa.avif',
            price: 829,
            foodValue: {
               calories: 239.9,
               proteins: 10.8,
               fats: 8.5,
               carbohydrates: 28.3,
               weight: 490,
            },
         },
         {
            sizeName: '35 см',
            dough: 'Тонкое тесто 35',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf53388a75debe7321cf10bff79d.avif',
            price: 969,
            foodValue: {
               calories: 243.9,
               proteins: 10.9,
               fats: 8.3,
               carbohydrates: 29.6,
               weight: 680,
            },
         },
      ],
   },

   'Римская Песто': {
      base: [
         { ingredientName: 'Нежный цыпленок', choiceType: 'SINGLE' },
         { ingredientName: 'Свежие томаты', choiceType: 'SINGLE' },
         { ingredientName: 'Кубики брынзы', choiceType: 'SINGLE' },
         'Моцарелла',
         'Фирменный соус альфредо',
         'Соус песто',
      ],
      variations: [
         {
            sizeName: '25 см',
            isDefault: true,
            dough: 'Римское тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198c34c7163724e8d457fcf25b47e0a.avif',
            price: 729,
            foodValue: {
               calories: 264.2,
               proteins: 12,
               fats: 10.2,
               carbohydrates: 31.1,
               weight: 440,
            },
         },
      ],
   },
   'Римская Аррива!': {
      base: [
         { ingredientName: 'Острая чоризо', choiceType: 'SINGLE' },
         { ingredientName: 'Нежный цыпленок', choiceType: 'SINGLE' },
         { ingredientName: 'Свежие томаты', choiceType: 'SINGLE' },
         'Соус бургер',
         { ingredientName: 'Сладкий перец', choiceType: 'SINGLE' },
         { ingredientName: 'Красный лук', choiceType: 'SINGLE' },
         'Моцарелла',
         'Соус ранч',
         { ingredientName: 'Чеснок', choiceType: 'SINGLE' },
      ],
      variations: [
         {
            sizeName: '25 см',
            isDefault: true,
            dough: 'Римское тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198c34dfcc67080b7f471fccffd4afe.avif',
            price: 699,
            foodValue: {
               calories: 291.5,
               proteins: 10.9,
               fats: 13,
               carbohydrates: 32.8,
               weight: 420,
            },
         },
      ],
   },
   'Римская Жюльен': {
      base: [
         { ingredientName: 'Нежный цыпленок', choiceType: 'SINGLE' },
         { ingredientName: 'Шампиньоны', choiceType: 'SINGLE' },
         'Сливочный соус с грибами',
         { ingredientName: 'Красный лук', choiceType: 'SINGLE' },
         { ingredientName: 'Чеснок', choiceType: 'SINGLE' },
         'Моцарелла',
         { ingredientName: 'Сыры чеддер и пармезан', choiceType: 'SINGLE' },
         'Фирменный соус альфредо',
      ],
      variations: [
         {
            sizeName: '25 см',
            isDefault: true,
            dough: 'Римское тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198c34ea0c7723aac1648821db230dc.avif',
            price: 699,
            foodValue: {
               calories: 245.4,
               proteins: 11.9,
               fats: 7.9,
               carbohydrates: 31.6,
               weight: 440,
            },
         },
      ],
   },
   'Римская Пепперони': {
      base: [
         { ingredientName: 'Пикантная пепперони', choiceType: 'SINGLE' },
         'Моцарелла',
         'Фирменный томатный соус',
      ],
      variations: [
         {
            sizeName: '25 см',
            isDefault: true,
            dough: 'Римское тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198c34f3137721b9fffdbc55f92c692.avif',
            price: 549,
            foodValue: {
               calories: 297,
               proteins: 14.1,
               fats: 10.6,
               carbohydrates: 36.3,
               weight: 370,
            },
         },
      ],
   },
   'Римская Карбонара': {
      base: [
         { ingredientName: 'Бекон', choiceType: 'SINGLE' },
         'Сыры чеддер и пармезан',
         'Моцарелла',
         { ingredientName: 'Свежие томаты', choiceType: 'SINGLE' },
         { ingredientName: 'Красный лук', choiceType: 'SINGLE' },
         { ingredientName: 'Чеснок', choiceType: 'SINGLE' },
         'Фирменный соус альфредо',
         { ingredientName: 'Итальянские травы', choiceType: 'SINGLE' },
      ],
      variations: [
         {
            sizeName: '25 см',
            isDefault: true,
            dough: 'Римское тесто 25',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198c34d60ab75cda799d93c7ce7888b.avif',
            price: 729,
            foodValue: {
               calories: 302.8,
               proteins: 11.7,
               fats: 13.4,
               carbohydrates: 33.8,
               weight: 400,
            },
         },
      ],
   },

   'Креветки терияки': {
      variations: [
         {
            sizeName: '5 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198556badcf772484ba8ef325c9f09f.avif',
            price: 379,
            foodValue: {
               calories: 282.9,
               proteins: 18.1,
               fats: 5.1,
               carbohydrates: 41,
               weight: 80,
            },
         },
         {
            sizeName: '9 шт',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198556bb50b74009740b7a4a1b3f7ae.avif',
            price: 639,
            foodValue: {
               calories: 262.1,
               proteins: 15.8,
               fats: 4.4,
               carbohydrates: 39.9,
               weight: 140,
            },
         },
      ],
   },
   'Хашбрауны': {
      variations: [
         {
            sizeName: '2 шт',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01981875a1c1762893de32cb1e0cf197.avif',
            price: 139,
            foodValue: {
               calories: 228.5,
               proteins: 2.3,
               fats: 13.3,
               carbohydrates: 24.9,
               weight: 80,
            },
         },
         {
            sizeName: '3 шт',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01981875a7d7761981860bad1e849e26.avif',
            price: 189,
            foodValue: {
               calories: 229.5,
               proteins: 2.3,
               fats: 13.4,
               carbohydrates: 25,
               weight: 120,
            },
         },
         {
            sizeName: '4 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01981875ae8e75239a409d63775530d8.avif',
            price: 239,
            foodValue: {
               calories: 228.8,
               proteins: 2.3,
               fats: 13.3,
               carbohydrates: 24.9,
               weight: 160,
            },
         },
      ],
   },
   'Чикен ролл': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980e8a432071ca863e03212730c399.avif',
            price: 239,
            foodValue: {
               calories: 212.9,
               proteins: 8.2,
               fats: 8.6,
               carbohydrates: 24.2,
               weight: 150,
            },
         },
      ],
   },
   'Картофель по-деревенски': {
      variations: [
         {
            sizeName: 'Стандартная',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980e91c07075d9be384b7b94e75a8f.avif',
            price: 149,
            foodValue: {
               calories: 174.6,
               proteins: 3.3,
               fats: 5.5,
               carbohydrates: 28.2,
               weight: 100,
            },
         },
         {
            sizeName: 'Большая',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980e91c716737a920a68bb2f90dd65.avif',
            price: 289,
            foodValue: {
               calories: 188.9,
               proteins: 3.3,
               fats: 6,
               carbohydrates: 30.5,
               weight: 190,
            },
         },
      ],
   },
   'Паста Креветка и песто': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198e2f708ea73ed9b0f96052ddbbcca.avif',
            price: 409,
            foodValue: {
               calories: 210.2,
               proteins: 8.3,
               fats: 11.1,
               carbohydrates: 19.2,
               weight: 290,
            },
         },
      ],
   },
   'Креветки': {
      variations: [
         {
            sizeName: '3 шт',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980e9151ba7805945d99e607b80ad8.avif',
            price: 229,
            foodValue: {
               calories: 282.9,
               proteins: 18.1,
               fats: 5.1,
               carbohydrates: 41,
               weight: 40,
            },
         },
         {
            sizeName: '5 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980e9159aa74ca93e7daaa7db3e9fd.avif',
            price: 359,
            foodValue: {
               calories: 282.9,
               proteins: 18.1,
               fats: 5.1,
               carbohydrates: 41,
               weight: 70,
            },
         },
         {
            sizeName: '9 шт',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980e916510756482c2125234dd0359.avif',
            price: 609,
            foodValue: {
               calories: 242.1,
               proteins: 15.5,
               fats: 4.4,
               carbohydrates: 35.1,
               weight: 140,
            },
         },
      ],
   },
   'Омлет с пепперони в пите': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198605864fc73b8a8259cbfa18e95c8.avif',
            price: 239,
            foodValue: {
               calories: 262.1,
               proteins: 13.3,
               fats: 15.4,
               carbohydrates: 17.7,
               weight: 150,
            },
         },
      ],
   },
   'Дэнвич с говядиной': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01981879683b7800b043f47530267f30.avif',
            price: 319,
            foodValue: {
               calories: 319,
               proteins: 15.3,
               fats: 13,
               carbohydrates: 33,
               weight: 170,
            },
         },
      ],
   },
   'Острый Додстер': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980cbb11e677738af9e254a413763f.avif',
            price: 279,
            foodValue: {
               calories: 183.8,
               proteins: 9.8,
               fats: 7.1,
               carbohydrates: 20.2,
               weight: 190,
            },
         },
      ],
   },
   'Сырный Стартер': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980e9041a377569779e41755a81ad1.avif',
            price: 249,
            foodValue: {
               calories: 321.5,
               proteins: 13.4,
               fats: 20.1,
               carbohydrates: 21.8,
               weight: 160,
            },
         },
      ],
   },
   'Куриные наггетсы': {
      variations: [
         {
            sizeName: '5 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198131dce8b706bb3ed5a169df1bc84.avif',
            price: 179,
            foodValue: {
               calories: 260,
               proteins: 11.8,
               fats: 14.2,
               carbohydrates: 21.3,
               weight: 110,
            },
         },
         {
            sizeName: '10 шт',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198131dd4ad799f8a87e1d3f7e8302e.avif',
            price: 349,
            foodValue: {
               calories: 260,
               proteins: 11.8,
               fats: 14.2,
               carbohydrates: 21.3,
               weight: 220,
            },
         },
      ],
   },
   'Картофель из печи с соусом': {
      variations: [
         {
            sizeName: 'Стандартная',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198ae98f5a377b4938dd4c854f1857c.avif',
            price: 180,
            foodValue: {
               calories: 288.2,
               proteins: 3.4,
               fats: 17.7,
               carbohydrates: 28.9,
               weight: 100,
            },
         },
         {
            sizeName: 'Большая',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01956ba6122877128bd6bb67a66ccc59.avif',
            price: 329,
            foodValue: {
               calories: 288.2,
               proteins: 3.4,
               fats: 17.7,
               carbohydrates: 28.9,
               weight: 180,
            },
         },
      ],
   },
   'Картофель из печи': {
      variations: [
         {
            sizeName: 'Стандартная',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019840bab7aa74cd8d4149cd161ba42d.avif',
            price: 149,
            foodValue: {
               calories: 218.2,
               proteins: 3.8,
               fats: 6.9,
               carbohydrates: 35.2,
               weight: 80,
            },
         },
         {
            sizeName: 'Большая',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019840babe5a75b99481401e94b8f6a8.avif',
            price: 289,
            foodValue: {
               calories: 218.2,
               proteins: 3.8,
               fats: 6.9,
               carbohydrates: 35.2,
               weight: 160,
            },
         },
      ],
   },
   'Салат Цезарь': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bebb723d747c983fbd6a7d91e898.avif',
            price: 315,
            foodValue: {
               calories: 118.7,
               proteins: 9.7,
               fats: 5.7,
               carbohydrates: 7,
               weight: 170,
            },
         },
      ],
   },

   'Персиковый молочный коктейль': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880e437cf72dc8443a2522c3b0dac.avif',
            price: 269,
            foodValue: {
               calories: 120.9,
               proteins: 2.9,
               fats: 3.3,
               carbohydrates: 19.8,
               weight: 320,
            },
         },
         {
            sizeName: '0.6 л',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880e43e6974a7b6fffe1642a495e7.avif',
            price: 439,
            foodValue: {
               calories: 110.2,
               proteins: 2.9,
               fats: 3.2,
               carbohydrates: 17.4,
               weight: 500,
            },
         },
      ],
   },
   'Молочный коктейль Фисташка': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880f785d074bbaa91e9941f69886d.avif',
            price: 269,
            foodValue: {
               calories: 119.9,
               proteins: 3.2,
               fats: 4.1,
               carbohydrates: 17.6,
               weight: 320,
            },
         },
         {
            sizeName: '0.6 л',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880f78e66793ea10da6b7a68bc876.avif',
            price: 439,
            foodValue: {
               calories: 109.3,
               proteins: 3.2,
               fats: 4,
               carbohydrates: 15.2,
               weight: 500,
            },
         },
      ],
   },
   'Молочный коктейль с печеньем Орео': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880e8b6937532b97793190301bc16.avif',
            price: 269,
            foodValue: {
               calories: 152.2,
               proteins: 3.5,
               fats: 5.8,
               carbohydrates: 20.4,
               weight: 320,
            },
         },
         {
            sizeName: '0.6 л',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880e8bc7f75f7a208eaf26a3fe5d3.avif',
            price: 439,
            foodValue: {
               calories: 147.4,
               proteins: 3.6,
               fats: 6,
               carbohydrates: 19.7,
               weight: 510,
            },
         },
      ],
   },
   'Классический молочный коктейль': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880db637073d9845a6716db10ee2f.avif',
            price: 225,
            foodValue: {
               calories: 103.2,
               proteins: 3.3,
               fats: 3.9,
               carbohydrates: 14,
               weight: 280,
            },
         },
         {
            sizeName: '0.6 л',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880db690e718ea0d6cbd14713bf4a.avif',
            price: 329,
            foodValue: {
               calories: 88.5,
               proteins: 3.2,
               fats: 3.6,
               carbohydrates: 10.7,
               weight: 440,
            },
         },
      ],
   },
   'Клубничный молочный коктейль': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880e09a9a76b2863cc38afed7cecc.avif',
            price: 269,
            foodValue: {
               calories: 127.8,
               proteins: 3,
               fats: 3.5,
               carbohydrates: 21.1,
               weight: 310,
            },
         },
         {
            sizeName: '0.6 л',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880e0a2167232b6f243e479b8f284.avif',
            price: 439,
            foodValue: {
               calories: 114.8,
               proteins: 3,
               fats: 3.4,
               carbohydrates: 18.1,
               weight: 480,
            },
         },
      ],
   },
   'Шоколадный молочный коктейль': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880f355447458a0550f03664b9bf0.avif',
            price: 269,
            foodValue: {
               calories: 164.7,
               proteins: 3.8,
               fats: 7.8,
               carbohydrates: 18.7,
               weight: 280,
            },
         },
         {
            sizeName: '0.6 л',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880f35ab877de862c1bba70a50fd0.avif',
            price: 439,
            foodValue: {
               calories: 123.5,
               proteins: 3.7,
               fats: 3.9,
               carbohydrates: 18.4,
               weight: 470,
            },
         },
      ],
   },

   'Айс Американо': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880a7cf08704eb1d12bfe60c86d15.avif',
            price: 119,
            foodValue: {
               calories: 7.6,
               proteins: 0.4,
               fats: 0.4,
               carbohydrates: 0.5,
               weight: 390,
            },
         },
      ],
   },
   'Айс Кофе': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880ae50287638a7791638577caddd.avif',
            price: 159,
            foodValue: {
               calories: 40.2,
               proteins: 2,
               fats: 2.2,
               carbohydrates: 3,
               weight: 250,
            },
         },
      ],
   },
   'Эспрессо-Тоник': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880d39c7174308c8bfddab9f464ac.avif',
            price: 169,
            foodValue: {
               calories: 25.3,
               proteins: 0.6,
               fats: 0.6,
               carbohydrates: 4.4,
               weight: 340,
            },
         },
      ],
   },
   'Холодный бамбл кофе': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019889895ae171a39e525e1eb15f9112.avif',
            price: 199,
            foodValue: {
               calories: 40.4,
               proteins: 0.6,
               fats: 0.6,
               carbohydrates: 8.2,
               weight: 350,
            },
         },
      ],
   },
   'Айс капучино': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880abad8071e49e7074a462d96a6f.avif',
            price: 270,
            foodValue: {
               calories: 106.1,
               proteins: 3.4,
               fats: 3.8,
               carbohydrates: 13.8,
               weight: 280,
            },
         },
         {
            sizeName: '0.6 л',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019880abb33f731f8cb737c0081f990d.avif',
            price: 349,
            foodValue: {
               calories: 101.7,
               proteins: 3.3,
               fats: 5.9,
               carbohydrates: 9,
               weight: 480,
            },
         },
      ],
   },
   'Кофе Капучино': {
      variations: [
         {
            sizeName: '0.4 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019840b6488170018dd640026aea9961.avif',
            price: 179,
            foodValue: {
               calories: 54.5,
               proteins: 2.8,
               fats: 3,
               carbohydrates: 4,
               weight: 240,
            },
         },
      ],
   },
   'Кофе Латте': {
      variations: [
         {
            sizeName: '0.4 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01982280dc9a778c941ba53768d94882.avif',
            price: 179,
            foodValue: {
               calories: 55.7,
               proteins: 2.8,
               fats: 3.1,
               carbohydrates: 4.2,
               weight: 320,
            },
         },
      ],
   },
   'Кофе Американо': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198227e7648741ead340c4c96da45a4.avif',
            price: 119,
            foodValue: {
               calories: 16,
               proteins: 0.9,
               fats: 0.9,
               carbohydrates: 1,
               weight: 310,
            },
         },
         {
            sizeName: '0.4 л',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198227e7bd6747dba99b60e75697c75.avif',
            price: 129,
            foodValue: {
               calories: 17.3,
               proteins: 1,
               fats: 1,
               carbohydrates: 1.1,
               weight: 400,
            },
         },
      ],
   },

   'Айсти зеленый со вкусом лесных ягод': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198a7fe871b78fa9d851008cf535f66.avif',
            price: 139,
            foodValue: {
               calories: 20.8,
               proteins: 0,
               fats: 0,
               carbohydrates: 5.2,
               weight: 0,
            },
         },
      ],
   },
   'Лимонад Домашний': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            dough: 'Со льдом',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01987e4e953b786c949c4cebb4b9438b.avif',
            price: 169,
            foodValue: {
               calories: 28.7,
               proteins: 0,
               fats: 0,
               carbohydrates: 7.1,
               weight: 340,
            },
         },
         {
            sizeName: '0.6 л',
            dough: 'Со льдом',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01987e4ea244714d9f82e18c1fbca2f7.avif',
            price: 279,
            foodValue: {
               calories: 27.4,
               proteins: 0,
               fats: 0,
               carbohydrates: 6.8,
               weight: 600,
            },
         },
         {
            sizeName: '0.3 л',
            dough: 'Без льда',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01987e4e99a477ac99c5dd5a9a161dbf.avif',
            price: 169,
            foodValue: {
               calories: 29.5,
               proteins: 0,
               fats: 0,
               carbohydrates: 7.3,
               weight: 330,
            },
         },
         {
            sizeName: '0.6 л',
            dough: 'Без льда',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01987e4ea7df70bfbcebc4ad7cea4224.avif',
            price: 279,
            foodValue: {
               calories: 28.3,
               proteins: 0,
               fats: 0,
               carbohydrates: 7,
               weight: 580,
            },
         },
      ],
   },
   'Добрый Кола': {
      variations: [
         {
            sizeName: '0.5 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980e8d35af7157a519bd92cabda4f7.avif',
            price: 155,
            foodValue: {
               calories: 42,
               proteins: 0,
               fats: 0,
               carbohydrates: 10.6,
               weight: 0,
            },
         },
      ],
   },
   'Добрый Кола без сахара': {
      variations: [
         {
            sizeName: '0.5 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0197f8650cad733baf4fcfeb53fb32e4.avif',
            price: 155,
            foodValue: {
               calories: 0.3,
               proteins: 0,
               fats: 0,
               carbohydrates: 0,
               weight: 0,
            },
         },
      ],
   },
   'Рич Чай Черный с лимоном': {
      variations: [
         {
            sizeName: '0.5 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0197f868dc4e7112ab7f594535dee17b.avif',
            price: 159,
            foodValue: {
               calories: 20,
               proteins: 0,
               fats: 0,
               carbohydrates: 4.8,
               weight: 0,
            },
         },
      ],
   },
   'Рич Чай Зеленый': {
      variations: [
         {
            sizeName: '0.5 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0197f868ed507997948b292b5ad77228.avif',
            price: 159,
            foodValue: {
               calories: 20,
               proteins: 0,
               fats: 0,
               carbohydrates: 4.8,
               weight: 0,
            },
         },
      ],
   },
   'Сок Добрый Яблоко': {
      variations: [
         {
            sizeName: '1 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0197f866677d77d580aa9f99dd242835.avif',
            price: 279,
         },
      ],
   },
   'Вода BonaAqua негазированная': {
      variations: [
         {
            sizeName: '0.5 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0197f8622bea796bbf371c7b54bb9fb4.avif',
            price: 100,
         },
      ],
   },
   'Морс Черная смородина': {
      variations: [
         {
            sizeName: '0.45 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0197f86db50d71cd87171622bb122c9c.avif',
            price: 179,
            foodValue: {
               calories: 36,
               proteins: 0,
               fats: 0,
               carbohydrates: 9,
               weight: 0,
            },
         },
      ],
   },
   'Какао': {
      variations: [
         {
            sizeName: '0.3 л',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198228137be72d0a399945b32057515.avif',
            price: 159,
            foodValue: {
               calories: 72.5,
               proteins: 2.2,
               fats: 2.1,
               carbohydrates: 10.7,
               weight: 240,
            },
         },
      ],
   },

   'Тирамису': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198beb73b7d771a946dc64393dffde6.avif',
            price: 199,
            foodValue: {
               calories: 324,
               proteins: 3.6,
               fats: 19.2,
               carbohydrates: 34.3,
               weight: 90,
            },
         },
      ],
   },
   'Чизкейк Нью-Йорк': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/019840ba1e6078459e4aa5777065f0bc.avif',
            price: 189,
            foodValue: {
               calories: 341,
               proteins: 6.9,
               fats: 22.1,
               carbohydrates: 28.5,
               weight: 100,
            },
         },
      ],
   },
   'Сырники со сгущенным молоком': {
      variations: [
         {
            sizeName: '2 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980d419be874a5abd2ce54dcac236f.avif',
            price: 179,
            foodValue: {
               calories: 301,
               proteins: 11.2,
               fats: 15.8,
               carbohydrates: 28.6,
               weight: 140,
            },
         },
         {
            sizeName: '4 шт',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980d41a20470598e0bde9dc43e1546.avif',
            price: 349,
            foodValue: {
               calories: 314.9,
               proteins: 6.6,
               fats: 11.3,
               carbohydrates: 46.8,
               weight: 270,
            },
         },
      ],
   },
   'Сырники': {
      variations: [
         {
            sizeName: '2 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980d4050e8787b9f4a8c22c2d45cb5.avif',
            price: 155,
            foodValue: {
               calories: 288.7,
               proteins: 11.3,
               fats: 16,
               carbohydrates: 24.8,
               weight: 130,
            },
         },
         {
            sizeName: '4 шт',
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980d4057d5727facc43d4835a37a1c.avif',
            price: 299,
            foodValue: {
               calories: 288.7,
               proteins: 11.3,
               fats: 16,
               carbohydrates: 24.8,
               weight: 260,
            },
         },
      ],
   },

   'Тысяча островов': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/01980cbdbaef76e1b1aec6df48c66b64.avif',
            price: 49,
            foodValue: {
               calories: 330,
               proteins: 1,
               fats: 31,
               carbohydrates: 10,
               weight: 25,
            },
         },
      ],
   },
   'Сырный': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0197f86ac30a734eb384d710bb1789f3.avif',
            price: 49,
            foodValue: {
               calories: 470,
               proteins: 1.6,
               fats: 49.8,
               carbohydrates: 3,
               weight: 25,
            },
         },
      ],
   },
   'Чесночный': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0197f86b0d7d744992dae61761c9ba0d.avif',
            price: 49,
            foodValue: {
               calories: 330,
               proteins: 1,
               fats: 31,
               carbohydrates: 12,
               weight: 25,
            },
         },
      ],
   },
   'Барбекю': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0197f86a9e7a7766a15028ff1fa74e4b.avif',
            price: 49,
            foodValue: {
               calories: 170,
               proteins: 0.6,
               fats: 0,
               carbohydrates: 26.3,
               weight: 25,
            },
         },
      ],
   },
   'Малиновое варенье': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0197f86a743777209156e78285b05bef.avif',
            price: 45,
            foodValue: {
               calories: 260,
               proteins: 0.2,
               fats: 0.1,
               carbohydrates: 63.7,
               weight: 25,
            },
         },
      ],
   },
   'Сгущёнка в стиках, 7 г': {
      variations: [
         {
            sizeName: '1 шт',
            isDefault: true,
            imageUrl:
               'https://media.dodostatic.net/image/r:584x584/0198bf1ecc3b7148bd270117b8edf400.avif',
            price: 15,
            foodValue: {
               calories: 329.3,
               proteins: 7.2,
               fats: 8.5,
               carbohydrates: 56,
               weight: 7,
            },
         },
      ],
   },
}

const getProductVariations = async () => {
   const sizes = await prisma.size.findMany()
   const products = await prisma.product.findMany()
   const ingredients = await prisma.ingredient.findMany()

   const productsMap = toNameIdMap<ProductName>(products)
   const sizesMap = toNameIdMap<SizeName>(sizes)
   const ingredientsMap = toNameIdMap<IngredientName>(ingredients)

   const generateVariation = (
      productName: ProductName,
      {
         sizeName,
         dough,
         isDefault,
         base,
         imageUrl,
         price,
         foodValue,
      }: {
         sizeName: SizeName
         isDefault?: boolean
         dough?: IngredientName
         base?: BaseIngredients
         imageUrl: string
         price: number
         foodValue?: FoodValue
      }
   ): ProductVariation => {
      const ingredientsData = withDough(dough, base).map(ingredient =>
         typeof ingredient === 'string'
            ? { ingredientId: ingredientsMap[ingredient] }
            : {
                 ingredientId: ingredientsMap[ingredient.ingredientName],
                 isBasic: ingredient.isBasic ?? false,
                 choiceType: ingredient.choiceType ?? 'NONE',
              }
      )

      return {
         productId: productsMap[productName],
         sizeId: sizesMap[sizeName],
         imageUrl,
         price,
         isDefault,
         ...(ingredientsData.length > 0 && {
            ingredients: { createMany: { data: ingredientsData } },
         }),
         ...(foodValue && { foodValue: { create: { ...foodValue } } }),
      }
   }

   return Object.entries(RECIPES).flatMap(([productName, recipe]) =>
      recipe.variations.map(variation =>
         generateVariation(productName as ProductName, {
            ...variation,
            base: recipe.base,
         })
      )
   )
}

export { getProductVariations }
