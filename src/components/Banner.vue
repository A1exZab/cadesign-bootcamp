<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'
import CallForm from './CallForm.vue'

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
  <div class="banner">
    <div class="banner__container _container">
      <div class="banner__body">
        <h1 class="banner__title">
          Энергия твоего роста! – <br />
          заряжаем твою карьеру
        </h1>
        <button class="banner__button" @click="openModal">Стать частью команды</button>
      </div>
    </div>
    <div class="banner__image">
      <img
        class="banner__image_left"
        src="@/assets/images/banner-left.png"
        alt="Banner arrow"
        loading="lazy"
      />
      <img
        class="banner__image_center"
        src="@/assets/images/banner-center.png"
        alt="Banner photo"
        loading="lazy"
      />
      <img
        class="banner__image_right"
        src="@/assets/images/banner-right.jpg"
        alt="Banner background"
        loading="lazy"
      />
    </div>
    <!-- Прокидывание в Modal состояния модального окна и функции для его закрытия -->
    <Modal :isOpen="isModalOpened" @closeModal="closeModal">
      <CallForm @closeModal="closeModal"
    /></Modal>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 448px;
}

.banner__body {
  position: relative;
  margin-top: 36px;
  padding-top: 120px;
  z-index: 4;
}

.banner__title {
  color: $white;
  font-family: 'HeliosC Bold';
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 59px;
}

.banner__image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & > * {
    position: absolute;
    height: 100%;
  }

  &_left {
    top: 0;
    width: 66%;
    z-index: 2;
  }

  &_center {
    z-index: 3;
    left: 50%;
    bottom: 0;
    height: 95%;
  }

  &_right {
    top: 0;
    right: 0;
    z-index: 1;
  }
}

.banner__button {
  @include primary-button;
}

@media (max-width: 1279px) {
  .banner {
    height: 398px;
    margin-bottom: 62px;
  }
  .banner__body {
    margin: 0;
    padding-top: 87px;
  }

  .banner__title {
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 51px;
  }

  .banner__image_center {
    height: 90%;
  }
}

@media (max-width: 767px) {
  .banner {
    height: 318px;
  }

  .banner__body {
    margin: 0;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .banner__title {
    text-align: center;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 148px;
  }
  .banner__image {
    &_left {
      width: 150%;
      z-index: 2;
    }

    &_center {
      height: 75%;
      left: 50%;
      transform: translateX(-50%);
      object-position: 34px;
    }

    &_right {
      display: none;
    }
  }

  .banner__button {
    height: 56px;
    width: 223px;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
