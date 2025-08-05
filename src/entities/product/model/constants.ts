import type { Product } from './product-types'

const PIZZAS: Product[] = [
   {
      id: '1',
      name: 'Чесночный цыпленок',
      price: 329,
      image: 'https://media.dodostatic.net/image/r:292x292/0197d0d4283575589ff0032eadd7cb68.avif',
      description: 'Цыпленок, чеснок, томаты, моцарелла, фирменный соус альфредо',
   },
   {
      id: '2',
      name: 'Пикантные колбаски',
      price: 329,
      image: 'https://media.dodostatic.net/image/r:292x292/0197d0f934c372c3b17f812f340dc1ca.avif',
      description: 'Классические колбаски, лук красный, моцарелла, фирменный томатный соус',
   },
   {
      id: '3',
      name: 'Сырная',
      price: 339,
      image: 'https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.avif',
      description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
   },
   {
      id: '4',
      name: 'Пепперони фреш',
      price: 339,
      image: 'https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif',
      description:
         'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
   },
   {
      id: '5',
      name: 'Чоризо фреш',
      price: 339,
      image: 'https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif',
      description: 'Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус',
   },
   {
      id: '6',
      name: 'Ветчина и сыр',
      price: 399,
      image: 'https://media.dodostatic.net/image/r:292x292/11ee7d60fda22358ac33c6a44eb093a2.avif',
      description: 'Ветчина, моцарелла, фирменный соус альфредо',
   },
   {
      id: '7',
      name: 'Двойной цыпленок',
      price: 399,
      image: 'https://media.dodostatic.net/image/r:292x292/11ee7d614cbe0530b7234b6d7a6e5f8e.avif',
      description: 'Цыпленок, моцарелла, фирменный соус альфредо',
   },
   {
      id: '8',
      name: 'Охотничья',
      price: 589,
      image: 'https://media.dodostatic.net/image/r:292x292/019635b27c727302835040e5d7c27caa.avif',
      description:
         'Двойная порция классических колбасок, красный лук, томаты, соус барбекю, моцарелла, фирменный томатный соус',
   },
   {
      id: '9',
      name: 'Креветка и песто',
      price: 639,
      image: 'https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.avif',
      description:
         'Креветки, томаты, шампиньоны, соус песто, моцарелла, итальянские травы, фирменный томатный соус',
   },
   {
      id: '10',
      name: 'Чилл Грилл',
      price: 459,
      image: 'https://media.dodostatic.net/image/r:292x292/019591c69fac7921a27e4ecd8c99f9df.avif',
      description:
         'Цыпленок, маринованные огурчики, красный лук, соус гриль, моцарелла, чеснок, фирменный соус альфредо',
   },
]

const COMBO: Product[] = [
   {
      id: '1',
      name: 'Комбо Пеппероби ',
      description:
         'Квадратная пицца, чтобы в игре подкрепиться. С пикантной пепперони и моцареллой. В комплекте яркий брелок, такой же как UGC в Мире Додо Пиццы!',
      price: 719,
      image: 'https://media.dodostatic.net/image/r:292x292/0196a9ad810f70ea93151a8281a68058.avif',
   },
   {
      id: '2',
      name: '2 напитка',
      description:
         'Одним словом — литр. Выберите две бутылочки на свой вкус: газировку Добрый или холодный чай Rich',
      price: 270,
      image: 'https://media.dodostatic.net/image/r:292x292/01980e8dad62703bb169ba6f96c60eb3.avif',
   },
   {
      id: '3',
      name: 'Додо Бокс',
      description:
         'Весёлый набор для маленьких создателей: две закуски и напиток на выбор, а самое интересное — игрушка-конструктор из новой коллекции',
      price: 533,
      image: 'https://media.dodostatic.net/image/r:292x292/0195d407347c7105b2de4a33d00bcdd7.avif',
   },
   {
      id: '4',
      name: 'Чикен бокс',
      description:
         'Картошка без курицы, как курица без картошки — лучше вместе. Выбирайте куриные наггетсы, кусочки или крылья барбекю и заказывайте сразу в комбо с пряной картошечкой и соусом',
      price: 337,
      image: 'https://media.dodostatic.net/image/r:292x292/019570d1cf4972f59b57ab333237e745.avif',
   },
   {
      id: '5',
      name: 'Завтрак на двоих',
      description: 'Горячий завтрак для двоих. 2 закуски из подборки и 2 напитка на выбор',
      price: 648,
      image: 'https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.avif',
   },
   {
      id: '6',
      name: 'Четыре в одном',
      description:
         'Если хочется всего понемногу. Маленькая пицца, закуска, напиток и соус. Цена комбо зависит от выбранных продуктов и может быть увеличена',
      price: 802,
      image: 'https://media.dodostatic.net/image/r:292x292/01980e870b7775b890ea97fcd9f3f853.avif',
   },
]

export const PRODUCTS = {
   PIZZAS,
   COMBO,
}
