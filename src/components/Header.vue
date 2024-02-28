<script setup>
import BurgerMenu from './BurgerMenu.vue'
import Socials from './Socials.vue'
</script>

<template>
  <header class="header">
    <div class="header__container _container">
      <a class="header__logo" href="#">
        <icon name="cadesign-logo" />
      </a>
      <nav class="header__menu">
        <ul class="menu__list">
          <li class="menu__item">
            <a href="#" class="menu__link">О нас</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Наши ценности</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Вакансии</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Начало карьеры</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link">Контакты</a>
          </li>
          <li class="menu__item">
            <Socials />
          </li>
        </ul>
        <BurgerMenu />
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #f2f2f2;
}

.header__container {
  display: flex;
  justify-content: space-between;
  min-height: 98px;
}

.header__logo {
  margin: 46px 0 0 0;
  height: 25px;
  width: 115px;
}

.header__menu {
  display: flex;
  margin: 49px 0 0 0;
}

.menu__list {
  display: flex;
  flex-wrap: wrap;
}

.menu__item {
  &:not(:last-of-type) {
    margin: 0 64px 0 0;
  }

  &:has(a:hover) {
    border-bottom: 2px solid $orange;
  }
}

.menu__link {
  line-height: 20px;
  color: $dark;
}

@media (max-width: 1024px) {
  .header__logo {
    margin: 34px 0 0 0;
  }
  .header__menu {
    align-items: center;
    margin: 0;
  }
  .menu__list {
    display: none;
  }
}
</style>
