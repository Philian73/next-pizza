/* eslint-disable max-lines */

import type { Prisma } from '@prisma/client'

import { hashSync } from 'bcryptjs'

type User = Prisma.UserUncheckedCreateInput

type Category = Omit<Prisma.CategoryUncheckedCreateInput, 'slug'>

type Ingredient = Prisma.IngredientUncheckedCreateInput

type Product = Omit<Prisma.ProductUncheckedCreateInput, 'slug'>

type ProductItem = Prisma.ProductItemUncheckedCreateInput

const hashedPassword = hashSync('@123Qwe', 10)

const USERS: User[] = [
   {
      fullName: 'Тестовый Юзер',
      email: 'test@next-pizza.ru',
      password: hashedPassword,
      verifiedAt: new Date(),
   },
   {
      fullName: 'Тестовый Админ',
      email: 'admin@next-pizza.ru',
      password: hashedPassword,
      verifiedAt: new Date(),
      role: 'ADMIN',
   },
]

const CATEGORIES: Category[] = [
   {
      name: 'Пиццы',
   },
   {
      name: 'Закуски',
   },
   {
      name: 'Коктейли',
   },
   {
      name: 'Напитки',
   },
   {
      name: 'Соусы',
   },
   {
      name: 'Завтрак',
   },
]

const INGREDIENTS = [
   {
      name: 'Сырный бортик',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
      price: 179,
   },
   {
      name: 'Пряная говядина',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png',
      price: 119,
   },
   {
      name: 'Моцарелла',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
      price: 79,
   },
   {
      name: 'Сыры чеддер и пармезан',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
      price: 79,
   },
   {
      name: 'Сыр блю чиз',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6A277BB50',
      price: 149,
   },
   {
      name: 'Острый перец халапеньо',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
      price: 59,
   },
   {
      name: 'Пикантная пепперони',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
      price: 79,
   },
   {
      name: 'Нежный цыпленок',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
      price: 79,
   },
   {
      name: 'Шампиньоны',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
      price: 59,
   },
   {
      name: 'Бекон',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
      price: 79,
   },
   {
      name: 'Ветчина',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
      price: 79,
   },
   {
      name: 'Острая чоризо',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
      price: 79,
   },
   {
      name: 'Маринованные огурчики',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
      price: 59,
   },
   {
      name: 'Свежие томаты',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
      price: 59,
   },
   {
      name: 'Красный лук',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
      price: 59,
   },
   {
      name: 'Сочные ананасы',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
      price: 59,
   },
   {
      name: 'Итальянские травы',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
      price: 39,
   },
   {
      name: 'Сладкий перец',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
      price: 59,
   },
   {
      name: 'Кубики брынзы',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
      price: 79,
   },
   {
      name: 'Митболы',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
      price: 79,
   },
   {
      name: 'Баварские колбаски',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/11ee9d3660793feda24a236677d3013e.png',
      price: 129,
   },
   {
      name: 'Креветки',
      imageUrl:
         'https://cdn.dodostatic.net/static/Img/Ingredients/11eee5d51d4c576da0f0db611c8947bd.png',
      price: 199,
   },
] satisfies Ingredient[]

const PIZZAS: Product[] = [
   {
      categoryId: 1,
      name: 'Дикий Карбонар',
      description:
         'Как выглядела пицца с беконом, чеддером, пармезаном и чесноком до вмешательства человека? Это забавное название для меню, а в коробке приедет обычная пицца Карбонара',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019591b13a1a724b90092c16d9b1c05a.avif',
      status: 'HIT',
   },
   {
      categoryId: 1,
      name: 'Терияки',
      description:
         'Нежный цыпленок, красный лук, зеленый перец, соус терияки, сыр моцарелла и фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197fa0f7ee07568a39ac9a8c2f8c827.avif',
      status: 'NEW',
   },
   {
      categoryId: 1,
      name: 'Чесночный цыпленок',
      description: 'Цыпленок, чеснок, томаты, моцарелла, фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197d0d4283575589ff0032eadd7cb68.avif',
      status: 'NEW',
   },
   {
      categoryId: 1,
      name: 'Пикантные колбаски',
      description: 'Классические колбаски, лук красный, моцарелла, фирменный томатный соус',
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197d0f934c372c3b17f812f340dc1ca.avif',
      status: 'NEW',
   },
   {
      categoryId: 1,
      name: 'Сырная 👶',
      description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 1,
      name: 'Пепперони фреш',
      description:
         'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 1,
      name: 'Чоризо фреш',
      description: 'Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 1,
      name: 'Ветчина и сыр',
      description: 'Ветчина, моцарелла, фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/11ee7d60fda22358ac33c6a44eb093a2.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 1,
      name: 'Двойной цыпленок 👶',
      description: 'Цыпленок, моцарелла, фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/11ee7d614cbe0530b7234b6d7a6e5f8e.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 1,
      name: 'Охотничья',
      description:
         'Двойная порция классических колбасок, красный лук, томаты, соус барбекю, моцарелла, фирменный томатный соус',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019635b27c727302835040e5d7c27caa.avif',
      status: 'NEW',
   },
   {
      categoryId: 1,
      name: 'Креветка и песто',
      description:
         'Креветки, томаты, шампиньоны, соус песто, моцарелла, итальянские травы, фирменный томатный соус',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif',
      status: 'NEW',
   },
   {
      categoryId: 1,
      name: 'Четыре сыра',
      description: 'Сыр блю чиз, сыры чеддер и пармезан, моцарелла, фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/11ee7d612a1c13cbbfcc286c332d7762.avif',
      status: 'REGULAR',
   },
]

const SNACKS: Product[] = [
   {
      categoryId: 2,
      name: 'Креветки терияки',
      description: 'Цельные креветки в хрустящей панировке с соусом терияки',
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198556badcf772484ba8ef325c9f09f.avif',
      status: 'NEW',
   },
   {
      categoryId: 2,
      name: 'Ланчбокс Охотничий',
      description:
         'Горячий сытный обед с картофелем из печи, классическими колбасками, огурчиками маринованными и соусом барбекю',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019873d7f4c6750a8e15193b71d64dac.avif',
      status: 'NEW',
   },
   {
      categoryId: 2,
      name: 'Салат Овощной микс',
      description:
         'Хрустящий салат айсберг, сочные томаты черри, перец, кубики брынзы, соус бальзамик и итальянские травы',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198131e781e75a9b8998432866822a6.avif',
      status: 'NEW',
   },
   {
      categoryId: 2,
      name: 'Креветки',
      description: 'Цельные креветки в хрустящей панировке',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980e9159aa74ca93e7daaa7db3e9fd.avif',
      status: 'REGULAR',
   },
]

const COCKTAILS: Product[] = [
   {
      categoryId: 3,
      name: 'Персиковый молочный коктейль',
      description: 'Сочный, спелый персик и приятная свежесть мороженого',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198227c07ae7244ad5deb11b2169dfb.avif',
      status: 'NEW',
   },
   {
      categoryId: 3,
      name: 'Молочный коктейль Фисташка',
      description: 'Сочетание нежности, сливочной текстуры и тонкого вкуса фисташки',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198227c9627795b991b79142c0e3ba0.avif',
      status: 'NEW',
   },
   {
      categoryId: 3,
      name: 'Молочный коктейль с печеньем Орео',
      description:
         'Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198227b830478b599cefb215fad4e36.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 3,
      name: 'Классический молочный коктейль',
      description: 'Это классика: молоко, мороженое и ничего лишнего',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198227af85e7443b2a25aa7e79aea7a.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 3,
      name: 'Клубничный молочный коктейль',
      description:
         'Не важно, какое время года на улице, этот коктейль с клубничным сиропом вернет вас в лето с одного глотка',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198227d306776d897d4781cc1a225bd.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 3,
      name: 'Шоколадный молочный коктейль',
      description: 'Это шок! Шоколадный молочный коктейль со сливочным мороженым и фирменным какао',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198227a5584782da0705172f28058a6.avif',
      status: 'REGULAR',
   },
]

const DRINKS: Product[] = [
   {
      categoryId: 4,
      name: 'Добрый Кола Ледяной Лимон',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f864b10576268f6cc150c744dd69.avif',
      status: 'NEW',
   },
   {
      categoryId: 4,
      name: 'Добрый Кола',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980e8d35af7157a519bd92cabda4f7.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Добрый Кола без сахара',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f8650cad733baf4fcfeb53fb32e4.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Rich Tea Черный с лимоном',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f868dc4e7112ab7f594535dee17b.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Rich Tea Зеленый',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f868ed507997948b292b5ad77228.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Rich Tea Зеленый с манго',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f869012977299dea763d56f31e67.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Нектар Добрый апельсин',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980d4f28e575df80d1bfe852522d32.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Нектар Добрый мультифрукт',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86779ad7937990dab2a0fb51377.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Сок Добрый Яблоко',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f866677d77d580aa9f99dd242835.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Морс Клюква 👶',
      description:
         'Фирменный ягодный морс из натуральной клюквы с терпким послевкусием Дизайн товара может отличаться',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86e0aa870ad8924478d3d37aa40.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Морс Черная смородина 👶',
      description:
         'Фирменный ягодный морс из натуральной душистой черной смородины Дизайн товара может отличаться',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86db50d71cd87171622bb122c9c.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Морс Вишня 👶',
      description:
         'Фирменный ягодный морс из натуральной спелой вишни. В меру сладкий и с приятной кислинкой Дизайн товара может отличаться',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86de6d4772aa558450aff00e595.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Какао',
      description: 'Насыщенное, плотное и такое знакомое какао с молоком',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198228137be72d0a399945b32057515.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 4,
      name: 'Таежный чай, 10 пакетиков',
      description: 'Зеленый листовой чай с листьями мяты и лепестками василька',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86d0f5d7793940dc4643e31b3ef.avif',
      status: 'REGULAR',
   },
]

const SAUCES: Product[] = [
   {
      categoryId: 5,
      name: 'Тысяча островов',
      description:
         'Фирменный соус с нотками томата и пряностей для горячих закусок и бортиков пиццы, 25 г',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980cbdbaef76e1b1aec6df48c66b64.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 5,
      name: 'Сырный',
      description:
         'Фирменный соус со вкусом расплавленного сыра для бортиков пиццы и горячих закусок, 25 г',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86ac30a734eb384d710bb1789f3.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 5,
      name: 'Чесночный',
      description: 'Фирменный соус с чесночным вкусом для бортиков пиццы и горячих закусок, 25 г',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86b0d7d744992dae61761c9ba0d.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 5,
      name: 'Барбекю',
      description: 'Фирменный соус с дымным ароматом для бортиков пиццы и горячих закусок, 25 г',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86a9e7a7766a15028ff1fa74e4b.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 5,
      name: 'Медово-горчичный',
      description:
         'Фирменный медово-горчичный соус со жгучей сладостью для бортиков пиццы и горячих закусок, 25 г',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86aea5a71a696a29c4dc5286c71.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 5,
      name: 'Малиновое варенье',
      description: 'Идеально к сырникам, 25 г',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86a743777209156e78285b05bef.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 5,
      name: 'Сгущёнка в стиках, 7 г',
      description: 'Идеально к сырникам',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0194d50772dd74ca9b67f5b54bbcd0c8.avif',
      status: 'REGULAR',
   },
]

const BREAKFAST: Product[] = [
   {
      categoryId: 6,
      name: 'Хашбрауны 👶',
      description:
         'Это любимые картофельные оладушки, приготовленные в печи: хрустящая корочка, немного масла и тот самый вкус',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01981875ae8e75239a409d63775530d8.avif',
      status: 'NEW',
   },
   {
      categoryId: 6,
      name: 'Омлет с томатами в пите',
      description:
         'Легкий и питательный завтрак: омлет из печи с томатами и моцареллой в пшеничной пите. Удобно брать с собой',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019860554d1474818d8cd5982dae2144.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 6,
      name: 'Омлет с беконом в пите',
      description:
         'Горячий сытный омлет с поджаристой корочкой, бекон, моцарелла и томаты в пшеничной пите. Удобно взять с собой',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198604c583a7487a958608727edca10.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 6,
      name: 'Омлет с ветчиной и грибами в пите',
      description:
         'Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла в пшеничной пите. Удобно взять с собой',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019860510daa726fa023e04a1ae06a87.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 6,
      name: 'Додстер с ветчиной',
      description:
         'Горячий завтрак с ветчиной, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980cba8e9e70dab9df8aa0f577e527.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 6,
      name: 'Сырники со сгущенным молоком',
      description: 'Нежные сырники, приготовленные в печи, с порционным сгущенным молоком',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980d4162e076c08fac16ff25f3c6b5.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 6,
      name: 'Сырники с малиновым вареньем 👶',
      description:
         'Любимый десерт многих гостей — румяные сырники из печи с малиновым вареньем. Нежные, в меру сладкие и напоминающие детство',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980d40cb2c77c69809dc155da7b8d4.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 6,
      name: 'Сырники',
      description:
         'Любимый десерт многих гостей — румяные сырники из печи. Нежные, в меру сладкие и напоминающие детство',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980d3fd54678fa9b9fe6c9d7c0d24c.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 6,
      name: 'Кофе Американо',
      description: 'Горячий кофе для ценителей чистого вкуса',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198227e7648741ead340c4c96da45a4.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 6,
      name: 'Кофе Капучино',
      description: 'Легендарный рецепт кофе: эспрессо, горячее молоко и плотная молочная пенка',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019840b6488170018dd640026aea9961.avif',
      status: 'REGULAR',
   },
   {
      categoryId: 6,
      name: 'Кофе Латте',
      description:
         'Идеально сбалансированное сочетание кофе, увеличенной порции молока и нежнейшей пенки',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01982280dc9a778c941ba53768d94882.avif',
      status: 'REGULAR',
   },
]

const ALL_PRODUCTS = [...PIZZAS, ...SNACKS, ...COCKTAILS, ...DRINKS, ...SAUCES, ...BREAKFAST]

let productId = 1

const PIZZA_ITEMS: ProductItem[] = [
   // Дикий Карбонар
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/019591b1343c746bb4c108bede4d469c.avif',
      price: 659,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019591b13a1a724b90092c16d9b1c05a.avif',
      price: 1009,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019591b14a2e7663a8daf17169cfd23f.avif',
      price: 1119,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019591b141c877ac8054d155c9cb6b19.avif',
      price: 1009,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019591b1518e735c8da6eeef256663e1.avif',
      price: 1119,
   },

   // Терияки
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/0197fa0f5ec97710899e9eed3bfa3285.avif',
      price: 519,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197fa0f7ee07568a39ac9a8c2f8c827.avif',
      price: 799,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197fa0f924d7391a80a755f0542d6c4.avif',
      price: 979,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197fa0f880173c2973578ec15805ba9.avif',
      price: 799,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197fa0f9e4d7670b513b091a9d643fb.avif',
      price: 979,
   },

   // Чесночный цыпленок
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/0197d0d417c3752ca71d9799181bcd8b.avif',
      price: 369,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197d0d4283575589ff0032eadd7cb68.avif',
      price: 629,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197d0d4317f744ab150036ef60c980b.avif',
      price: 849,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197d0d42f1d73219bb02dbefc6144c0.avif',
      price: 629,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197d0d455ba71c5b89b7a845acc51b4.avif',
      price: 849,
   },

   // Пикантные колбаски
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/0197d0f92be2787a8100a5d351c3046a.avif',
      price: 369,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197d0f934c372c3b17f812f340dc1ca.avif',
      price: 649,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197d0f942c7785090a074f87dda2d1a.avif',
      price: 849,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197d0f93ad474698c058fc29b7e59c0.avif',
      price: 649,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197d0f950a973d5a0595c6f68c22d28.avif',
      price: 849,
   },

   // Сырная
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/11ee7d610cf7e265b7c72be5ae757ca7.avif',
      price: 339,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d610d2925109ab2e1c92cc5383c.avif',
      price: 619,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d610d91679bb519f38c3f45880f.avif',
      price: 779,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d610d5dbb14a551b640b90776fc.avif',
      price: 619,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d610dbefef68ade96df563888b4.avif',
      price: 779,
   },

   // Пепперони фреш
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/11ee7d612f98bc0ea828957caff9c8ec.avif',
      price: 369,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif',
      price: 629,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d6130241e75b0ab33725248c0d0.avif',
      price: 749,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d612ff49f2c98064fb647c3aa86.avif',
      price: 629,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d61304faf5a98a6958f2bb2d260.avif',
      price: 749,
   },

   // Чоризо фреш
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/11ee7d61703f8b47b1e4933820a7d91f.avif',
      price: 339,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d61706d472f9a5d71eb94149304.avif',
      price: 619,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d6170d5f99c89e91a2b3b91d16e.avif',
      price: 779,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d61709f9f34a0b85f25ecdb286d.avif',
      price: 619,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d6171059e7d8d5af72d04721d66.avif',
      price: 779,
   },

   // Ветчина и сыр
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/11ee7d60fd0c652e824db2e99c8ca4bd.avif',
      price: 479,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d60fda22358ac33c6a44eb093a2.avif',
      price: 709,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d60fdfc92f19d5a6c8dee6ddb9b.avif',
      price: 839,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d60fdce8a11955760fe05b45e23.avif',
      price: 709,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d60fe254005a3e82e36c1a6b6dd.avif',
      price: 839,
   },

   // Двойная цыпленок
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/11ee7d614c92fba9a7c5f124c809fe88.avif',
      price: 489,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d614cbe0530b7234b6d7a6e5f8e.avif',
      price: 749,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d614d1bb6cb8ded93790d79e466.avif',
      price: 869,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d614ce7d88391642fe26ecb2245.avif',
      price: 749,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d614d572a8e844206649c75c132.avif',
      price: 869,
   },

   // Охотничья
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/019635b2756a750f950f0a8a6c0fc3ca.avif',
      price: 669,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif',
      price: 969,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019635b28af9747e9eb429274ea72ff5.avif',
      price: 1279,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019635b2850c78fdab057b063d74e565.avif',
      price: 969,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019635b29274798bb53c6c3780bcba88.avif',
      price: 1279,
   },

   // Креветка и песто
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/019591b63bf275848050cb5bad0b6909.avif',
      price: 749,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
      price: 1129,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019591b65300735382df265607f4f75a.avif',
      price: 1319,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019591b64b35739688984108f86b6c17.avif',
      price: 1129,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019591b6647379b190a16b9c12183a1b.avif',
      price: 1319,
   },

   // Четыре сыра
   {
      productId,
      type: 1,
      size: 25,
      imageUrl:
         'https://media.dodostatic.net/image/r:366x366/11ee7d6129efa5199e5804122865390f.avif',
      price: 569,
   },
   {
      productId,
      type: 1,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d612a1c13cbbfcc286c332d7762.avif',
      price: 839,
   },
   {
      productId,
      type: 1,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d612a81468c99a6038db62dd54a.avif',
      price: 1029,
   },
   {
      productId,
      type: 2,
      size: 30,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d612a4f55c98de733cd1818c613.avif',
      price: 839,
   },
   {
      productId: productId++,
      type: 2,
      size: 35,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/11ee7d612aaf9ce0b0ed874462faf808.avif',
      price: 1029,
   },
]

const SNACKS_ITEMS: ProductItem[] = [
   {
      productId,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198556badcf772484ba8ef325c9f09f.avif',
      price: 379,
      size: 5,
   },
   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198556bb50b74009740b7a4a1b3f7ae.avif',
      price: 639,
      size: 9,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019873d7f4c6750a8e15193b71d64dac.avif',
      price: 409,
      size: 1,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198131e781e75a9b8998432866822a6.avif',
      price: 295,
      size: 1,
   },

   {
      productId,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980e9151ba7805945d99e607b80ad8.avif',
      price: 229,
      size: 3,
   },
   {
      productId,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980e9159aa74ca93e7daaa7db3e9fd.avif',
      price: 359,
      size: 5,
   },
   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980e916510756482c2125234dd0359.avif',
      price: 609,
      size: 9,
   },
]

const COCKTAILS_ITEMS: ProductItem[] = [
   {
      productId,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198227c07ae7244ad5deb11b2169dfb.avif',
      size: 0.3,
      price: 269,
   },
   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198080a37247107b18c414676842c7d.avif',
      size: 0.6,
      price: 439,
   },

   {
      productId,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198227c9627795b991b79142c0e3ba0.avif',
      size: 0.3,
      price: 269,
   },
   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019808099d0271c3999692798b376dc3.avif',
      size: 0.6,
      price: 439,
   },

   {
      productId,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198227b830478b599cefb215fad4e36.avif',
      size: 0.3,
      price: 269,
   },
   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198080b1d8b77fbba25e7bd40b68504.avif',
      size: 0.6,
      price: 439,
   },

   {
      productId,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198227af85e7443b2a25aa7e79aea7a.avif',
      size: 0.3,
      price: 225,
   },
   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198080d45e9723ebb6653256241820b.avif',
      size: 0.6,
      price: 329,
   },

   {
      productId,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198227d306776d897d4781cc1a225bd.avif',
      size: 0.3,
      price: 269,
   },
   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198080c64787949bbf5994a441ca13d.avif',
      size: 0.6,
      price: 439,
   },

   {
      productId,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198227a5584782da0705172f28058a6.avif',
      size: 0.3,
      price: 269,
   },
   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198080dacbc76f39c004c87d79168a0.avif',
      size: 0.6,
      price: 439,
   },
]

const DRINKS_ITEMS: ProductItem[] = [
   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f864b10576268f6cc150c744dd69.avif',
      price: 155,
      size: 0.5,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980e8d35af7157a519bd92cabda4f7.avif',
      price: 155,
      size: 0.5,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f8650cad733baf4fcfeb53fb32e4.avif',
      price: 155,
      size: 0.5,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f868dc4e7112ab7f594535dee17b.avif',
      price: 159,
      size: 0.5,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f868ed507997948b292b5ad77228.avif',
      price: 159,
      size: 0.5,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f869012977299dea763d56f31e67.avif',
      price: 159,
      size: 0.5,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980d4f28e575df80d1bfe852522d32.avif',
      price: 279,
      size: 1,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f86779ad7937990dab2a0fb51377.avif',
      price: 279,
      size: 1,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f866677d77d580aa9f99dd242835.avif',
      price: 279,
      size: 1,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f86e0aa870ad8924478d3d37aa40.avif',
      price: 169,
      size: 0.45,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f86db50d71cd87171622bb122c9c.avif',
      price: 169,
      size: 0.45,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f86de6d4772aa558450aff00e595.avif',
      price: 169,
      size: 0.45,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198228137be72d0a399945b32057515.avif',
      price: 159,
      size: 0.3,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f86d0f5d7793940dc4643e31b3ef.avif',
      price: 289,
      size: 1,
   },
]

const SAUCES_ITEMS: ProductItem[] = [
   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980cbdbaef76e1b1aec6df48c66b64.avif',
      price: 49,
      size: 1,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f86ac30a734eb384d710bb1789f3.avif',
      price: 49,
      size: 1,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f86b0d7d744992dae61761c9ba0d.avif',
      price: 49,
      size: 1,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f86a9e7a7766a15028ff1fa74e4b.avif',
      price: 49,
      size: 1,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f86aea5a71a696a29c4dc5286c71.avif',
      price: 49,
      size: 1,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0197f86a743777209156e78285b05bef.avif',
      price: 45,
      size: 1,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0194d50772dd74ca9b67f5b54bbcd0c8.avif',
      price: 15,
      size: 1,
   },
]

const BREAKFAST_ITEMS: ProductItem[] = [
   {
      productId,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01981875a1c1762893de32cb1e0cf197.avif',
      price: 139,
      size: 2,
   },
   {
      productId,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01981875a7d7761981860bad1e849e26.avif',
      price: 189,
      size: 3,
   },
   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01981875ae8e75239a409d63775530d8.avif',
      price: 239,
      size: 4,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019860554d1474818d8cd5982dae2144.avif',
      price: 239,
      size: 1,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198604c583a7487a958608727edca10.avif',
      price: 239,
      size: 1,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019860510daa726fa023e04a1ae06a87.avif',
      price: 239,
      size: 1,
   },

   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980cba8e9e70dab9df8aa0f577e527.avif',
      price: 239,
      size: 1,
   },

   {
      productId,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980d4162e076c08fac16ff25f3c6b5.avif',
      price: 179,
      size: 2,
   },
   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980d41682070de9cf890c70819c0a8.avif',
      price: 239,
      size: 4,
   },

   {
      productId,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980d40cb2c77c69809dc155da7b8d4.avif',
      price: 179,
      size: 2,
   },
   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980d40d0f174f29f5be3699920c1d9.avif',
      price: 349,
      size: 4,
   },

   {
      productId,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980d3fd54678fa9b9fe6c9d7c0d24c.avif',
      price: 155,
      size: 2,
   },
   {
      productId: productId++,
      type: 3,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01980d3fdc297472a5e2b8524df21317.avif',
      price: 299,
      size: 4,
   },

   {
      productId,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198227e7648741ead340c4c96da45a4.avif',
      price: 119,
      size: 0.3,
   },
   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/0198227e7bd6747dba99b60e75697c75.avif',
      price: 129,
      size: 0.4,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/019840b6488170018dd640026aea9961.avif',
      price: 179,
      size: 0.4,
   },

   {
      productId: productId++,
      type: 4,
      imageUrl:
         'https://media.dodostatic.net/image/r:584x584/01982280dc9a778c941ba53768d94882.avif',
      price: 179,
      size: 0.4,
   },
]

const ALL_PRODUCT_ITEMS = [
   ...PIZZA_ITEMS,
   ...SNACKS_ITEMS,
   ...COCKTAILS_ITEMS,
   ...DRINKS_ITEMS,
   ...SAUCES_ITEMS,
   ...BREAKFAST_ITEMS,
]

export const SEEDS = {
   USERS,
   CATEGORIES,
   INGREDIENTS,
   PRODUCTS: ALL_PRODUCTS,
   PRODUCT_ITEMS: ALL_PRODUCT_ITEMS,
}
