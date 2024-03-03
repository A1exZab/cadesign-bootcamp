<script setup>
import { ref } from 'vue'
import SocialLink from './SocialLink.vue'
import MobileMenu from './MobileMenu.vue'
import Modal from './Modal.vue'

// Логика отображение модального окна
const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}
</script>

<template>
  <header class="header">
    <div class="header__container _container">
      <a class="header__logo" href="#">
        <icon name="cadesign-logo" />
      </a>
      <!-- Удаление элемента из DOM при открытом модальном окне -->
      <nav v-if="!isModalOpened" class="header__menu">
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
            <SocialLink />
          </li>
        </ul>
        <div class="header__menu_button" @click="openModal">
          <span></span>
        </div>
      </nav>
    </div>
  </header>
  <!-- Прокидывание в Modal состояния модального окна и функции для его закрытия -->
  <Modal :isOpen="isModalOpened" @closeModal="closeModal">
    <MobileMenu @closeModal="closeModal" />
  </Modal>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #f2f2f2;
}

.header__container {
  display: flex;
  justify-content: space-between;
  height: 98px;
}
.header__logo {
  margin: 46px 0 40px 0;
  height: 25px;
  width: 115px;
}

.header__menu {
  display: flex;
  flex-grow: 1;
  max-width: 882px;
  margin-top: 49px;
}

.menu__list {
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: space-between;
}

.menu__item {
  &:has(a:hover) {
    border-bottom: 2px solid $orange;
  }
}

.menu__link {
  line-height: 20px;
  color: $dark;

  &:hover {
    color: $orange;
  }
}

.header__menu_button {
  display: none;
  position: relative;
  height: 18px;
  min-width: 28px;
  cursor: pointer;

  & span,
  span::after,
  span::before {
    content: '';
    position: absolute;
    left: 0;
    display: block;
    background-color: $main-blue;
    height: 2px;
    width: 100%;
  }

  & span {
    &::before {
      top: 8px;
    }

    &::after {
      top: 16px;
    }
  }
}

@media (max-width: 1279px) {
  .header__logo {
    margin-top: 34px;
  }
  .header__menu {
    justify-content: end;
    align-items: center;
    margin: 0;
  }
  .menu__list {
    display: none;
  }

  .header__menu_button {
    display: block;
  }
}

@media (max-width: 767px) {
  .header__container {
    height: 72px;
  }

  .header__logo {
    margin-top: 24px;
  }
}
</style>
