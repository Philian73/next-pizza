import type { Prisma } from '@prisma/client'

type Ingredient = Prisma.IngredientUncheckedCreateInput

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
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152f20c570859ff617c0a6ef03d3.png',
   },
   {
      name: 'Пряная говядина',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/01991530635b73ecb1a22658b49e1653.png',
   },
   {
      name: 'Моцарелла',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152f0cb67721b2e278cdffa797eb.png',
   },
   {
      name: 'Сыры чеддер и пармезан',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152f32e47035aefbe8c971c54502.png',
   },
   {
      name: 'Сыр блю чиз',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199153050ea707cbed48b92097e095f.png',
   },
   {
      name: 'Острый перец халапеньо',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152c7eb27553a08f57c8c9861ac3.png',
   },
   {
      name: 'Нежный цыпленок',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152e59157089adb89948280ebb10.png',
   },
   {
      name: 'Шампиньоны',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152bfda5723f8bbecc43a35f83f1.png',
   },
   {
      name: 'Бекон',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/019915303b5377fd97915878fdf2a9f0.png',
   },
   {
      name: 'Ветчина',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152d7fd075a9b11d17f8acaf1670.png',
   },
   {
      name: 'Пикантная пепперони',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152b6e6978a188ec97d9bd52e7d2.png',
   },
   {
      name: 'Острая чоризо',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152e43a67720a2c59d63081e66a5.png',
   },
   {
      name: 'Маринованные огурчики',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152e33ee7722ac038fa5bc26e630.png',
   },
   {
      name: 'Свежие томаты',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152a8428737d9f6b19c1b2329749.png',
   },
   {
      name: 'Красный лук',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152bec117341ad729b24870b55f3.png',
   },
   {
      name: 'Сочные ананасы',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152b81587495b19ba8008c567f5d.png',
   },
   {
      name: 'Итальянские травы',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152ced7677fcb0e49edd0ebf6c90.png',
   },
   {
      name: 'Сладкий перец',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152da27677a7a24a41b4eddfcedd.png',
   },
   {
      name: 'Кубики брынзы',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152a464a781abbc1d135f7d138aa.png',
   },
   {
      name: 'Баварские колбаски',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/019915307407729e970fee55536f6dca.png',
   },
   {
      name: 'Креветки',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0199152abd577969bb76a8123d1a7ea1.png',
   },
] as const satisfies Ingredient[]

const COFFEE_INGREDIENTS = [
   {
      name: 'Молоко',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/019548f1145377ee8bed4ce351c8799b.png',
   },
   {
      name: 'Сироп черный лес',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0196d9742537797d89fdd065f7fdc26c.png',
   },
   {
      name: 'Сироп со вкусом карамели',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0196d974a65c75098c18ddcb1c5c79e2.png',
   },
   {
      name: 'Сироп со вкусом фундука',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0196d97660ae711db3b77115476c84a0.png',
   },
   {
      name: 'Кокосовый сироп',
      thumbnailUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/0196d9758834768aafcb6f5ec3b28c02.png',
   },
] as const satisfies Ingredient[]

type IngredientName =
   | (typeof BASIC_INGREDIENTS)[number]['name']
   | (typeof PIZZA_INGREDIENTS)[number]['name']
   | (typeof COFFEE_INGREDIENTS)[number]['name']

const getIngredients = () => [...BASIC_INGREDIENTS, ...PIZZA_INGREDIENTS, ...COFFEE_INGREDIENTS]

export { getIngredients }
export type { IngredientName }
