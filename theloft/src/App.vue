<template>
  <div id="app">
    <div class="wrapper">
      <header class="header">
        <div class="container header__container">
          <a href="#" class="logo header__logo"><img class="logo__img" src="./assets/img/logo.png" alt="the Loft"></a>
          <nav class="navigation">
            <ul class="navigation__ul">
              <li class="navigation__li" v-for="item in navigation">
                <a :href="item.link" class="navigation__link">{{item.name}}</a>
              </li>
            </ul>
          </nav>
          <div class="socials">
            <a href="#" class="socials__link"><i class="fa fa-vk" aria-hidden="true"></i></a>
            <a href="#" class="socials__link"><i class="fa fa-youtube" aria-hidden="true"></i></a>
            <a href="#" class="socials__link"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          </div>
        </div>
      </header>
      <main class="main">
        <section class="head">
          <div class="slider">
            <div class="slider__cell" v-for="item in slider" :style="{ backgroundImage: 'url(' + item.image + ')' }">
              <div class="container head__container">
                <span class="head__background-title">
                                                  {{item.title}}
                                              </span>
                <h1 class="title1 head__title">{{item.title}}</h1>
                <p class="subtitle head__subtitle">{{item.text}}</p>
                <a :href="item.button.link" class="btn head__btn">{{item.button.text}}</a>
              </div>
            </div>
          </div>
          <div class="zones">
            <ul class="zones__ul">
              <li class="zones__li" v-for="item in slider">
                <div :class="'zones__link' + ' ' + item.pagination.class">
                  <span class="zones__link-content">
                          <span class="zones__tag">{{item.pagination.hash}}</span>
                  <span class="zones__text">{{item.pagination.title}}</span>
                  <a :href="item.pagination.link.link" class="zones__inner-link">{{item.pagination.link.text}}</a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="section about" :style="{'background-image': 'url(' + require('./assets/img/about-bg.jpg') + ')'}">
          <img src="./assets/img/lamps.png" alt="The loft Lamps" class="about__lamps">
          <img src="./assets/img/pictures.png" alt="The loft Lamps" class="about__pictures">
          <div class="container">
            <h2 class="title2">{{about.title}}</h2>
            <p class="about__text">
              {{about.text}}
            </p>
          </div>
        </section>
        <section class="section events" :style="{'background-image': 'url(' + require('./assets/img/events-bg.jpg') + ')'}">
          <div class="container events__container">
            <h2 class="title2">Наши мероприятия</h2>
            <div class="card__wrap">
              <a :href="card.link" class="card" v-for="card in cards">
                <div class="card__front">
                  <img :src="card.image.src" :alt="card.image.alt" class="card__icon">
                  <span class="card__title">{{card.title}}</span>
                </div>
                <div class="card__main">
                  <span class="card__text">
                          {{card.text}}
                        </span>
                  <object><a :href="card.link" class="btn card__button">{{card.button.text}}</a></object>
                </div>
              </a>
            </div>
            <div class="card__pagination">
              <a href="#" class="icon__prev"></a>
              <a href="#" class="icon__next"></a>
            </div>
          </div>
        </section>
        <section class="section about" :style="{'background-image': 'url(' + require('./assets/img/calendar-bg.jpg') + ')'}">
  
        </section>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        navigation: [{
            name: 'О НАС',
            link: '#'
          },
          {
            name: 'МЕРОПРИЯТИЯ',
            link: '#'
          },
          {
            name: 'РАСПИСАНИЕ',
            link: '#'
          },
          {
            name: 'КОНТАКТЫ',
            link: '#'
          },
          {
            name: 'БЛОГ',
            link: '#'
          },
        ],
        slider: [{
            title: 'The Loft',
            image: require('./assets/img/header-bg.jpg'),
            text: 'краткое описание заведения, буквально пару слов о нем, уникальное предложение, приглашение посетить,или другая завлекаловка',
            button: {
              text: 'Узнать более',
              link: '#'
            },
            pagination: {
              hash: '#1',
              title: 'Белая зона',
              class: 'zones__link_active',
              link: {
                text: 'забронировать',
                link: '#'
              }
            }
          },
          {
            title: 'The Bolt',
            image: require('./assets/img/header-bg.jpg'),
            text: 'краткое описание заведения, буквально пару слов о нем, уникальное предложение, приглашение посетить,или другая завлекаловка',
            button: {
              text: 'Узнать более',
              link: '#'
            },
            pagination: {
              hash: '#2',
              title: 'Белая зона',
              class: '',
              link: {
                text: 'забронировать',
                link: '#'
              }
            }
          },
          {
            title: 'The Black',
            image: require('./assets/img/header-bg.jpg'),
            text: 'краткое описание заведения, буквально пару слов о нем, уникальное предложение, приглашение посетить,или другая завлекаловка',
            button: {
              text: 'Узнать более',
              link: '#'
            },
            pagination: {
              hash: '#3',
              title: 'Белая зона',
              class: '',
              link: {
                text: 'забронировать',
                link: '#'
              }
            }
          },
          {
            title: 'The Brock',
            image: require('./assets/img/header-bg.jpg'),
            text: 'краткое описание заведения, буквально пару слов о нем, уникальное предложение, приглашение посетить,или другая завлекаловка',
            button: {
              text: 'Узнать более',
              link: '#'
            },
            pagination: {
              hash: '#4',
              title: 'Белая зона',
              class: '',
              link: {
                text: 'забронировать',
                link: '#'
              }
            }
          }
        ],
        about: {
          title: 'Название текста',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasiarchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
        },
        cards: [{
            title: 'Настольные игры',
            image: {
              src: require('./assets/img/card-icon.png'),
              alt: ''
            },
            link: '#',
            text: 'Кинотеатр на территории ТРЦ «THE Loft» состоит из нескольких кинозалов. В Красном зале (Grand) на 325 мест установлен экран размером 23 на 12,5 м. Остальные залы вмещают до 100 зрителей. На территории кинотеатра работает АНТИкафе',
            button: {
              text: 'Подробнее'
            }
          },
          {
            title: 'Игра «Мафия»',
            image: {
              src: require('./assets/img/card-icon2.png'),
              alt: ''
            },
            link: '#',
            text: 'Кинотеатр на территории ТРЦ «THE Loft» состоит из нескольких кинозалов. В Красном зале (Grand) на 325 мест установлен экран размером 23 на 12,5 м. Остальные залы вмещают до 100 зрителей. На территории кинотеатра работает АНТИкафе',
            button: {
              text: 'Подробнее'
            }
          },
          {
            title: 'Квесты',
            image: {
              src: require('./assets/img/card-icon3.png'),
              alt: ''
            },
            link: '#',
            text: 'Кинотеатр на территории ТРЦ «THE Loft» состоит из нескольких кинозалов. В Красном зале (Grand) на 325 мест установлен экран размером 23 на 12,5 м. Остальные залы вмещают до 100 зрителей. На территории кинотеатра работает АНТИкафе',
            button: {
              text: 'Подробнее'
            }
          },
          {
            title: 'Настольные игры',
            image: {
              src: require('./assets/img/card-icon.png'),
              alt: ''
            },
            link: '#',
            text: 'Кинотеатр на территории ТРЦ «THE Loft» состоит из нескольких кинозалов. В Красном зале (Grand) на 325 мест установлен экран размером 23 на 12,5 м. Остальные залы вмещают до 100 зрителей. На территории кинотеатра работает АНТИкафе',
            button: {
              text: 'Подробнее'
            }
          },
          {
            title: 'Игра «Мафия»',
            image: {
              src: require('./assets/img/card-icon2.png'),
              alt: ''
            },
            link: '#',
            text: 'Кинотеатр на территории ТРЦ «THE Loft» состоит из нескольких кинозалов. В Красном зале (Grand) на 325 мест установлен экран размером 23 на 12,5 м. Остальные залы вмещают до 100 зрителей. На территории кинотеатра работает АНТИкафе',
            button: {
              text: 'Подробнее'
            }
          },
          {
            title: 'Квесты',
            image: {
              src: require('./assets/img/card-icon3.png'),
              alt: ''
            },
            link: '#',
            text: 'Кинотеатр на территории ТРЦ «THE Loft» состоит из нескольких кинозалов. В Красном зале (Grand) на 325 мест установлен экран размером 23 на 12,5 м. Остальные залы вмещают до 100 зрителей. На территории кинотеатра работает АНТИкафе',
            button: {
              text: 'Подробнее'
            }
          },
          {
            title: 'Настольные игры',
            image: {
              src: require('./assets/img/card-icon.png'),
              alt: ''
            },
            link: '#',
            text: 'Кинотеатр на территории ТРЦ «THE Loft» состоит из нескольких кинозалов. В Красном зале (Grand) на 325 мест установлен экран размером 23 на 12,5 м. Остальные залы вмещают до 100 зрителей. На территории кинотеатра работает АНТИкафе',
            button: {
              text: 'Подробнее'
            }
          },
        ]
      }
    }
  }
</script>

<style lang="scss">
  // @import './assets/style/main.scss';
</style>

