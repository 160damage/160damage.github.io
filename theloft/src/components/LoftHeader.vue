<template>
  <header class="header">
    <div class="container header__container">
      <a href="#" class="logo header__logo"><img class="logo__img" :src="logo" alt="the Loft"></a>
      <nav class="navigation">
        <ul class="navigation__ul">
          <li class="navigation__li" v-for="item in navigation">
            <a :href="item.link" class="navigation__link">{{item.title}}</a></li>
        </ul>
      </nav>
      <div class="socials">
        <a href="#" class="socials__link"><icon name="vk"></icon></a>
        <a href="#" class="socials__link"><icon name="youtube"></icon></a>
        <a href="#" class="socials__link"><icon name="instagram"></icon></a>
      </div>
    </div>
  </header>
</template>
<script>
import 'vue-awesome/icons'
  import Image from '../assets/logo.png'
  export default {
    name: 'LoftHeader',
    data() {
      return {
        logo: Image,
        navigation: [{
            title: 'О нас',
            link: 'https://www.youtube.com/watch?v=p-7Zi9xYt2M&t=2441s'
          },
          {
            title: 'МЕРОПРИЯТИЯ',
            link: 'https://www.youtube.com/watch?v=p-7Zi9xYt2M&t=2441s'
          },
          {
            title: 'РАСПИСАНИЕ',
            link: 'https://www.youtube.com/watch?v=p-7Zi9xYt2M&t=2441s'
          },
          {
            title: 'КОНТАКТЫ',
            link: 'https://www.youtube.com/watch?v=p-7Zi9xYt2M&t=2441s'
          },
          {
            title: 'БЛОГ',
            link: 'https://www.youtube.com/watch?v=p-7Zi9xYt2M&t=2441s'
          }
        ]
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $textColor:#cccccc;
  $accentColor: #eab156;
  $white: #fff;

  .header {
    position: fixed;
    width: 100%;
    z-index: 20;
    &__container {
      display: flex;
      align-items: baseline; // justify-content: space-between;
    }
    &__logo {
      position: relative;
      top: 13px;
    }
  }

  .logo {
    &__img {
      width: 131px;
      height: 51px;
    }
  }

  .navigation {
    margin: 0 auto;
    &__ul {
      display: flex;
    }
    &__li {
      &+& {
        margin-left: 55px;
      }
    }
    &__link {
      font-size: 12px;
      color: $white;
      text-transform: uppercase;
      transition: color .3s ease-in-out;
      &:hover {
        color: $accentColor;
      }
    }
  }

</style>
