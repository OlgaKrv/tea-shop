export default {
  state: {
    shopList: [
      {
        id: 1,
        title: 'Эрл Грей',
        description:
          'Страна: Шри-Ланка\n Ингредиенты: черный чай\n Ароматизатор: бергамот',
        img: require('../assets/Earl_Gray.png'),
        gallery: [
          { name: 'Earl_Gray', img: require('../assets/Earl_Gray.png') },
          { name: 'Earl_Gray_1', img: require('../assets/Earl_Gray_1.png') },
        ],
      },
      {
        id: 2,
        title: 'Черный с мятой',
        description:
          'Страна: Германия\n Ингредиенты: черный чай, кубики ананаса, мята\n Ароматизатор: мята',
        img: require('../assets/Black_with_mint.png'),
        gallery: [
          {
            name: 'Black_with_mint',
            img: require('../assets/Black_with_mint.png'),
          },
          {
            name: 'Black_with_mint_1',
            img: require('../assets/Earl_Gray_1.png'),
          },
        ],
      },
      {
        id: 3,
        title: 'Черный с личи',
        description:
          'Страна: Китай\n Ингредиенты: черный чай\n Ароматизатор: личи',
        img: require('../assets/Black_with_lychee.png'),
        gallery: [
          {
            name: 'Black_with_lychee',
            img: require('../assets/Black_with_lychee.png'),
          },
          {
            name: 'Black_with_lychee_1',
            img: require('../assets/Earl_Gray_1.png'),
          },
        ],
      },
      {
        id: 4,
        title: 'Марракеш',
        description:
          'Страна: Германия\n Ингредиенты: черный чай, ягоды ежевики, изюм, клубника\n Ароматизатор: клубника',
        img: require('../assets/Marrakesh.png'),
        gallery: [
          { name: 'Marrakesh', img: require('../assets/Marrakesh.png') },
          { name: 'Marrakesh_1', img: require('../assets/Earl_Gray_1.png') },
        ],
      },
      {
        id: 5,
        title: 'Волшебная страна',
        description:
          'Страна: Германия\n Ингредиенты: черный чай, какао-бобы, кусочки шоколада, макадамский орех\n Ароматизатор: трюфель',
        img: require('../assets/Wonderland.png'),
        gallery: [
          {
            name: 'Wonderland',
            img: require('../assets/Wonderland.png'),
          },
          {
            name: 'Wonderland_1',
            img: require('../assets/Earl_Gray_1.png'),
          },
        ],
      },
      {
        id: 6,
        title: '1000 и 1 ночь',
        description:
          'Страна: Германия\n Ингредиенты: черный чай, зеленый чай, лепестки подсолнуха, лепестки черной розы\n Ароматизатор: дыня, клубника, виноград',
        img: require('../assets/1000_and_1_night.png'),
        gallery: [
          {
            name: '1000_and_1_night',
            img: require('../assets/1000_and_1_night.png'),
          },
          {
            name: '1000_and_1_night_1',
            img: require('../assets/Earl_Gray_1.png'),
          },
        ],
      },
      {
        id: 7,
        title: 'Черный с розой',
        description:
          'Страна: Китай\n Ингредиенты: черный чай, лепестки чайной розы\n Ароматизатор: роза',
        img: require('../assets/Black_with_rose.png'),
        gallery: [
          {
            name: 'Black_with_rose',
            img: require('../assets/Black_with_rose.png'),
          },
          {
            name: 'Black_with_rose_1',
            img: require('../assets/Earl_Gray_1.png'),
          },
        ],
      },
      {
        id: 8,
        title: 'Апельсиновый десерт',
        description:
          'Страна: Германия\n Ингредиенты: черный чай, цедра апельсина, яблоко, корица, кориандр, гвоздика, розовый перец, кардамон\n Ароматизатор: апельсин, сливки',
        img: require('../assets/Orange_dessert.png'),
        gallery: [
          {
            name: 'Orange_dessert',
            img: require('../assets/Orange_dessert.png'),
          },
          {
            name: 'Orange_dessert_1',
            img: require('../assets/Earl_Gray_1.png'),
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  /* eslint-disable */
  getters: {
    shopList(state) {
      return state.shopList
    },
    teaSample: (state) => (id) => {
      return state.shopList.find((teaVariety) => teaVariety.id == id)
    },
  },
}
