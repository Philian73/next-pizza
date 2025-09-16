import type { Prisma } from '@prisma/client'

import type { CategoryName } from './categories'

import slugify from 'slugify'

import { toNameIdMap } from '@/shared/lib/to-name-id-map'

import { prisma } from '../../prisma-client'

type Product = Prisma.ProductUncheckedCreateInput

type PartialProduct = Omit<Product, 'slug' | 'categoryId'>

const PIZZAS = [
   {
      name: 'Терияки',
      description:
         'Нежный цыпленок, красный лук, сладкий перец, соус терияки, сыр моцарелла и фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198da9ee2dd75038d9b6f7f23810d42.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Чесночный цыпленок',
      description: 'Цыпленок, чеснок, томаты, моцарелла, фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Пикантные колбаски',
      description: 'Классические колбаски, лук красный, моцарелла, фирменный томатный соус',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf25089a74d08e08629b41ed39ee.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Четыре сыра',
      description: 'Сыр блю чиз, сыры чеддер и пармезан, моцарелла, фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf48e02377e9adc0b190c9676321.avif',
      status: 'DEFAULT',
      traits: {
         create: {
            vegan: true,
         },
      },
   },
   {
      name: 'Сырная',
      description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf40eb1171aabe90b1b3ce07c0c5.avif',
      status: 'DEFAULT',
      traits: {
         create: {
            vegan: true,
            forChildren: true,
         },
      },
   },
   {
      name: 'Ветчина и сыр',
      description: 'Ветчина, моцарелла, фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf283b2372ea8e7cfc8adae9ea84.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Двойной цыпленок',
      description: 'Двойная порция цыпленка, моцарелла, фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf3e424371b49f0b8d7dbe320a70.avif',
      status: 'DEFAULT',
      traits: {
         create: {
            forChildren: true,
         },
      },
   },
   {
      name: 'Креветка и песто ',
      description:
         'Креветки, томаты, шампиньоны, соус песто, моцарелла, итальянские травы, фирменный томатный соус',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf4d218b75d4a3e667fc2f6d7643.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Аррива!',
      description:
         'Цыпленок, острые колбаски чоризо, соус бургер, сладкий перец, красный лук, томаты, моцарелла, соус ранч, чеснок',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf2e5d2973a4bf5ec61161496f91.avif',
      status: 'HIT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Карбонара',
      description:
         'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf2b03447079941f2d5ac6e986a9.avif',
      status: 'HIT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Пепперони',
      description: 'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf39dda97082912be8d1f3f2b233.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Гавайская',
      description: 'Двойная порция цыпленка, ананасы, моцарелла, фирменный соус альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf530345746e98039478001d5108.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
] as const satisfies PartialProduct[]

const ROMAN_PIZZAS = [
   {
      name: 'Римская Песто',
      description:
         'Хрустящее воздушное тесто с цыпленком, кубиками брынзы, томатами, моцареллой и соусом песто',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/0198c34c7163724e8d457fcf25b47e0a.avif',
      status: 'HIT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Римская Аррива!',
      description:
         'Хрустящее воздушное тесто с цыпленком, чоризо, сладким перцем, красным луком, томатами и соусом бургер',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/0198c34dfcc67080b7f471fccffd4afe.avif',
      status: 'HIT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Римская Жюльен',
      description:
         'Хрустящее воздушное тесто с цыпленком, шампиньонами, луком, сырным соусом и смесью сыров чеддер и пармезан',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/0198c34ea0c7723aac1648821db230dc.avif',
      status: 'HIT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Римская Пепперони',
      description:
         'Хрустящее воздушное тесто с пепперони, увеличенной порцией моцареллы и томатным фирменным соусом',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/0198c34f3137721b9fffdbc55f92c692.avif',
      status: 'HIT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Римская Карбонара',
      description:
         'Хрустящее воздушное тесто с беконом, томатами, красным луком, сырами чеддер, пармезан и соусом альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/0198c34d60ab75cda799d93c7ce7888b.avif',
      status: 'HIT',
      traits: {
         create: {},
      },
   },
] as const satisfies PartialProduct[]

const SNACKS = [
   {
      name: 'Креветки терияки',
      description: 'Цельные креветки в хрустящей панировке с соусом терияки',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/0198556badcf772484ba8ef325c9f09f.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Хашбрауны',
      description:
         'Картофельные оладушки из печи. Отличная закуска для завтрака или перекуса в любое время дня',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/01981875ae8e75239a409d63775530d8.avif',
      status: 'NEW',
      traits: {
         create: {
            vegan: true,
            forChildren: true,
         },
      },
   },
   {
      name: 'Чикен ролл',
      description:
         'Холодная закуска для легкого перекуса: ролл с цыпленком, свежим салатом, томатами, чеддером и пармезаном с соусом ранч',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/01980e8a432071ca863e03212730c399.avif',
      status: 'HIT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Картофель по-деревенски',
      description: 'Дольки картофеля, запеченные в печи до хрустящей корочки',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/01980e91c07075d9be384b7b94e75a8f.avif',
      status: 'NEW',
      traits: {
         create: {
            vegan: true,
         },
      },
   },
   {
      name: 'Паста Креветка и песто',
      description:
         'Паста из печи с соусом песто, креветками, томатами, моцареллой и фирменным соусом альфредо',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/0198e2f708ea73ed9b0f96052ddbbcca.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Креветки',
      description: 'Цельные креветки в хрустящей панировке',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/01980e9159aa74ca93e7daaa7db3e9fd.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Омлет с пепперони в пите',
      description:
         'Для тех, кто не пропускает завтраки — омлет с поджаристой корочкой, пикантная пепперони, томаты и моцарелла в пшеничной пите. Удобно взять с собой',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/0198605864fc73b8a8259cbfa18e95c8.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Дэнвич с говядиной',
      description:
         'Хрустящая чиабатта с ароматной пряной говядиной и цыпленком с соусами бургер и барбекю, свежими томатами и моцареллой',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/01981879683b7800b043f47530267f30.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Острый Додстер',
      description:
         'Горячая закуска с цыпленком, перчиком халапеньо, маринованными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/01980cbb11e677738af9e254a413763f.avif',
      status: 'DEFAULT',
      traits: {
         create: {
            spicy: true,
         },
      },
   },
   {
      name: 'Сырный Стартер',
      description:
         'Горячая закуска с очень сырной начинкой. Моцарелла, пармезан, чеддер и соус ранч в тонкой пшеничной лепешке',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/01980e9041a377569779e41755a81ad1.avif',
      status: 'DEFAULT',
      traits: {
         create: {
            vegan: true,
         },
      },
   },
   {
      name: 'Куриные наггетсы',
      description: 'Нежное куриное мясо в хрустящей панировке',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/0198131dce8b706bb3ed5a169df1bc84.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Картофель из печи с соусом',
      description: 'Запеченная в печи картошечка с пряными специями. В комплекте сырный соус',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/0198ae98f5a377b4938dd4c854f1857c.avif',
      status: 'DEFAULT',
      traits: {
         create: {
            forChildren: true,
            vegan: true,
         },
      },
   },
   {
      name: 'Картофель из печи',
      description:
         'Запеченная в печи картошечка — привычный вкус и мало масла. В составе пряные специи',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/019840bab7aa74cd8d4149cd161ba42d.avif',
      status: 'DEFAULT',
      traits: {
         create: {
            vegan: true,
            forChildren: true,
         },
      },
   },
   {
      name: 'Салат Цезарь',
      description:
         'Цыпленок, свежие листья салата айсберг, томаты черри, сыры чеддер и пармезан, соус цезарь, пшеничные гренки, итальянские травы',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/0198bebb723d747c983fbd6a7d91e898.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
] as const satisfies PartialProduct[]

const COCKTAILS = [
   {
      name: 'Персиковый молочный коктейль',
      description: 'Сочный, спелый персик и приятная свежесть мороженого',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/019880e437cf72dc8443a2522c3b0dac.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Молочный коктейль Фисташка',
      description: 'Сочетание нежности, сливочной текстуры и тонкого вкуса фисташки',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019880f785d074bbaa91e9941f69886d.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Молочный коктейль с печеньем Орео',
      description:
         'Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019880e8b6937532b97793190301bc16.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Классический молочный коктейль',
      description: 'Это классика: молоко, мороженое и ничего лишнего',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019880db637073d9845a6716db10ee2f.avif',
      status: 'DEFAULT',
      traits: {
         create: {
            forChildren: true,
         },
      },
   },
   {
      name: 'Клубничный молочный коктейль',
      description:
         'Не важно, какое время года на улице, этот коктейль с клубничным сиропом вернет вас в лето с одного глотка',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019880e09a9a76b2863cc38afed7cecc.avif',
      status: 'DEFAULT',
      traits: {
         create: {
            forChildren: true,
         },
      },
   },
   {
      name: 'Шоколадный молочный коктейль',
      description: 'Это шок! Шоколадный молочный коктейль со сливочным мороженым и фирменным какао',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019880f355447458a0550f03664b9bf0.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
] as const satisfies PartialProduct[]

const COFFEE = [
   {
      name: 'Айс Американо',
      description: 'Лаконичная бодрость со льдом',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019880a7cf08704eb1d12bfe60c86d15.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Айс Кофе',
      description: 'Все освежающее — просто: эспрессо с молоком и несколько кубиков льда',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019880ae50287638a7791638577caddd.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Эспрессо-Тоник',
      description: 'Насыщенный вкус кофе вместе с игристой свежестью',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019880d39c7174308c8bfddab9f464ac.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Холодный бамбл кофе',
      description:
         'Необычное сочетание слоев насыщенного эспрессо, цитрусового вкуса апельсинового сока и сладкого карамельного сиропа',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019889895ae171a39e525e1eb15f9112.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Айс капучино',
      description: 'Освежающий холодный кофе с порцией эспрессо и пломбиром',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/019880abad8071e49e7074a462d96a6f.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Кофе Капучино',
      description: 'Легендарный рецепт кофе: эспрессо, горячее молоко и плотная молочная пенка',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/019840b6488170018dd640026aea9961.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Кофе Латте',
      description:
         'Идеально сбалансированное сочетание кофе, увеличенной порции молока и нежнейшей пенки',
      imageUrl:
         'https://media.dodostatic.net/image/r:233x233/01982280dc9a778c941ba53768d94882.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Кофе Американо',
      description: 'Горячий кофе для ценителей чистого вкуса',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198227e7648741ead340c4c96da45a4.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
] as const satisfies PartialProduct[]

const DRINKS = [
   {
      name: 'Айсти зеленый со вкусом лесных ягод',
      description: 'Холодный зеленый чай по нашему рецепту со свежим ароматом лесных ягод',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198a7fe871b78fa9d851008cf535f66.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Лимонад Домашний',
      description: 'Прохладный лимонад, как будто только что приготовленный дома',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01987e4e953b786c949c4cebb4b9438b.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Добрый Кола',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980e8d35af7157a519bd92cabda4f7.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Добрый Кола без сахара',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f8650cad733baf4fcfeb53fb32e4.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Рич Чай Черный с лимоном',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f868dc4e7112ab7f594535dee17b.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Рич Чай Зеленый',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f868ed507997948b292b5ad77228.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Сок Добрый Яблоко',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f866677d77d580aa9f99dd242835.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Вода BonaAqua негазированная',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f8622bea796bbf371c7b54bb9fb4.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Морс Черная смородина',
      description:
         'Фирменный ягодный морс из натуральной душистой черной смородины Дизайн товара может отличаться',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86db50d71cd87171622bb122c9c.avif',
      status: 'DEFAULT',
      traits: {
         create: {
            forChildren: true,
         },
      },
   },
   {
      name: 'Какао',
      description: 'Насыщенное, плотное и такое знакомое какао с молоком',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198228137be72d0a399945b32057515.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
] as const satisfies PartialProduct[]

const DESERTS = [
   {
      name: 'Тирамису',
      description:
         'Многослойный десерт в лучших итальянских традициях: легкий аромат какао, пропитанная кофе бисквитная прослойка и нежный крем',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198beb73b7d771a946dc64393dffde6.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Чизкейк Нью-Йорк',
      description:
         'Нежнейшая сырная основа, тонкий корж песочного теста и никаких добавок. Классика в мире десертов',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/019840ba1e6078459e4aa5777065f0bc.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Сырники со сгущенным молоком',
      description: 'Нежные сырники, приготовленные в печи, с порционным сгущенным молоком',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980d419be874a5abd2ce54dcac236f.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Сырники',
      description:
         'Любимый десерт многих гостей — румяные сырники из печи. Нежные, в меру сладкие и напоминающие детство',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980d4050e8787b9f4a8c22c2d45cb5.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
] as const satisfies PartialProduct[]

const SAUCES = [
   {
      name: 'Тысяча островов',
      description:
         'Фирменный соус с нотками томата и пряностей для горячих закусок и бортиков пиццы, 25 г',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/01980cbdbaef76e1b1aec6df48c66b64.avif',
      status: 'NEW',
      traits: {
         create: {},
      },
   },
   {
      name: 'Сырный',
      description:
         'Фирменный соус со вкусом расплавленного сыра для бортиков пиццы и горячих закусок, 25 г',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86ac30a734eb384d710bb1789f3.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Чесночный',
      description: 'Фирменный соус с чесночным вкусом для бортиков пиццы и горячих закусок, 25 г',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86b0d7d744992dae61761c9ba0d.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Барбекю',
      description: 'Фирменный соус с дымным ароматом для бортиков пиццы и горячих закусок, 25 г',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86a9e7a7766a15028ff1fa74e4b.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Малиновое варенье',
      description: 'Идеально к сырникам, 25 г',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0197f86a743777209156e78285b05bef.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
   {
      name: 'Сгущёнка в стиках, 7 г',
      description: 'Идеально к сырникам',
      imageUrl:
         'https://media.dodostatic.net/image/r:292x292/0198bf1ecc3b7148bd270117b8edf400.avif',
      status: 'DEFAULT',
      traits: {
         create: {},
      },
   },
] as const satisfies PartialProduct[]

type ProductName =
   | (typeof PIZZAS)[number]['name']
   | (typeof ROMAN_PIZZAS)[number]['name']
   | (typeof SNACKS)[number]['name']
   | (typeof COCKTAILS)[number]['name']
   | (typeof COFFEE)[number]['name']
   | (typeof DRINKS)[number]['name']
   | (typeof DESERTS)[number]['name']
   | (typeof SAUCES)[number]['name']

const getProducts = async (): Promise<Product[]> => {
   const categories = await prisma.category.findMany()
   const categoriesMap = toNameIdMap<CategoryName>(categories)

   const pizzas = PIZZAS.map(product => ({
      ...product,
      categoryId: categoriesMap['Пиццы'],
   })) satisfies Omit<Product, 'slug'>[]

   const romanPizzas = ROMAN_PIZZAS.map(product => ({
      ...product,
      categoryId: categoriesMap['Римские пиццы'],
   })) satisfies Omit<Product, 'slug'>[]

   const snacks = SNACKS.map(product => ({
      ...product,
      categoryId: categoriesMap['Закуски'],
   })) satisfies Omit<Product, 'slug'>[]

   const cocktails = COCKTAILS.map(product => ({
      ...product,
      categoryId: categoriesMap['Коктейли'],
   })) satisfies Omit<Product, 'slug'>[]

   const coffee = COFFEE.map(product => ({
      ...product,
      categoryId: categoriesMap['Кофе'],
   })) satisfies Omit<Product, 'slug'>[]

   const drinks = DRINKS.map(product => ({
      ...product,
      categoryId: categoriesMap['Напитки'],
   })) satisfies Omit<Product, 'slug'>[]

   const deserts = DESERTS.map(product => ({
      ...product,
      categoryId: categoriesMap['Десерты'],
   })) satisfies Omit<Product, 'slug'>[]

   const sauces = SAUCES.map(product => ({
      ...product,
      categoryId: categoriesMap['Соусы'],
   })) satisfies Omit<Product, 'slug'>[]

   return [
      ...pizzas,
      ...romanPizzas,
      ...snacks,
      ...cocktails,
      ...coffee,
      ...drinks,
      ...deserts,
      ...sauces,
   ].map(product => ({
      ...product,
      slug: slugify(product.name, {
         lower: true,
         strict: true,
         trim: true,
      }),
   }))
}

export { getProducts }
export type { ProductName }
