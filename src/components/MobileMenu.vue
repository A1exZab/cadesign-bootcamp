<script setup>
const emit = defineEmits(['closeModal'])
</script>

<template>
  <div class="header__container_mobile">
    <nav class="header__menu_mobile">
      <ul class="menu__list_mobile">
        <li class="menu__item_mobile">
          <a href="" class="menu__link_mobile">О нас</a>
        </li>
        <li class="menu__item_mobile">
          <a href="" class="menu__link_mobile">Наши ценности</a>
        </li>
        <li class="menu__item_mobile">
          <a href="" class="menu__link_mobile">Вакансии</a>
        </li>
        <li class="menu__item_mobile">
          <a href="" class="menu__link_mobile">Начало карьеры</a>
        </li>
        <li class="menu__item_mobile">
          <a href="" class="menu__link_mobile">Контакты</a>
        </li>
        <li class="menu__item_mobile">
          <div class="social-icons__container_mobile">
            <div class="social-icons__item_mobile">
              <a href="https://vk.com" target="_blank"><icon name="vk-logo" /></a>
            </div>
            <div class="social-icons__item_mobile">
              <a href=""><icon name="fb-logo" /></a>
            </div>
            <div class="social-icons__item_mobile">
              <a href="https://www.odnoklassniki.ru" target="_blank"><icon name="ok-logo" /></a>
            </div>
            <div class="social-icons__item_mobile">
              <a href=""><icon name="inst-logo" /></a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <icon name="close-icon" @click="emit('closeModal')" />
  </div>

  >
</template>

<style lang="scss" scoped>
.header__container_mobile {
  display: flex;
  flex-direction: column;
  background-color: $dark;
  height: 472px;
  padding-top: 68px;
  position: relative;

  & > .vue-svg {
    color: $white;
    position: absolute;
    right: 26px;
    top: 26px;
    cursor: pointer;
  }
}

.header__menu_mobile {
  @include flex-center;
  flex-direction: column;
}
.menu__list_mobile {
  display: flex;
  flex-direction: column;
  max-width: fit-content;
}
.menu__item_mobile {
  &:not(:last-of-type) {
    margin-bottom: 39px;
  }

  &:last-of-type {
    margin-top: 21px;
  }
}
.menu__link_mobile {
  color: $white;

  &:hover {
    color: $orange;
  }
}
.social-icons__container_mobile {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 240px;
}

.social-icons__item_mobile {
  @include flex-center;

  background: $dark;
  height: 35px;
  width: 48px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.08);

  & > * {
    margin: 0;
  }

  &:hover {
    border: 1px solid $white;
  }

  & .vue-svg {
    color: $white;
    transform: scale(0.7);
  }

  &:hover .vue-svg {
    color: $white;
  }
}
</style>
