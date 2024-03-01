<script setup></script>

<template>
  <div class="staff-block__container">
    <div class="staff-block__body">
      <h2 class="staff-block__name">Евдокимова Мария</h2>
      <div class="staff-block__post">Генеральный директор</div>
      <p class="staff-block__description">
        Цель нашей работы обеспечить высочайший сервис нашим клиентам. Дать возможность бизнесу
        сосредоточиться на своих ключевых задачах, передав функции управления персоналом,
        казначейства, финансового учёта и отчётности нам.
      </p>
    </div>
    <div class="staff-block__background">
      <img
        class="staff-block__ceo-photo"
        src="@/assets/images/ceo-photo.png"
        alt="CEO photo"
        loading="lazy"
      />
    </div>
    <nav class="navigation-dots">
      <div class="navigation-dots__item"></div>
      <div class="navigation-dots__item"></div>
      <div class="navigation-dots__item"></div>
    </nav>
    <div class="arrow-button arrow-button_right">
      <icon name="arrow-button" />
    </div>
    <div class="arrow-button arrow-button_left">
      <icon name="arrow-button" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$light-gray: #f7f7f7;
$staff-block-text: #242627;
.staff-block__container {
  margin: 70px 100px 20px 100px;
  background: $light-gray;
  display: flex;
  position: relative;
}

.staff-block__body {
  margin: 117px 0 85px 140px;
  max-width: 630px;
}
.staff-block__name {
  font-size: 36px;
  color: $staff-block-text;
  margin-bottom: 20px;
}
.staff-block__post {
  line-height: 28px;
  color: #828282;
  margin-bottom: 40px;
}
.staff-block__description {
  font-size: 18px;
  line-height: 32px;
  color: $staff-block-text;
}
.staff-block__background {
  width: 100%;
}

.staff-block__ceo-photo {
  max-height: 440px;
  position: absolute;
  bottom: 0;
  right: 0;
  object-position: -30px;
}
.arrow-button {
  @include flex-center;

  height: 94px;
  width: 52px;
  background-color: transparent;
  border: 1px solid #e0e0e0;
  position: absolute;
  top: calc(50% - 47px);
  cursor: pointer;
  z-index: 10;

  & .vue-svg {
    color: $staff-block-text;
  }

  &:hover {
    background-color: $white;
    border: none;
  }
}

.arrow-button_right {
  right: 40px;
}

.arrow-button_left {
  left: 40px;
  & .vue-svg {
    transform: rotate(180deg);
  }

  .navigation-dots {
    display: none;
  }
}

@media (min-width: 1680px) {
  .staff-block__body {
    margin-left: calc((100vw - 1200px) / 2 - 100px);
  }
}

@media (max-width: 1279px) {
  .staff-block__container {
    margin: 60px 40px 20px 40px;
    flex-direction: column-reverse;
    background: $white;
  }

  .staff-block__body {
    margin: 50px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .staff-block__name {
    font-size: 28px;
  }

  .staff-block__description {
    text-align: center;
  }
  .staff-block__background {
    position: relative;
    height: 400px;
    background: $light-gray;
  }

  .staff-block__ceo-photo {
    max-height: 380px;
    transform: translate(50%);
    right: 50%;
    object-position: -80px;
  }

  .arrow-button {
    top: 153px;
  }

  .arrow-button_right {
    right: 32px;
  }

  .arrow-button_left {
    left: 32px;
  }
}

@media (max-width: 767px) {
  .staff-block__container {
    margin: 38px 20px 20px 20px;
  }

  .staff-block__body {
    margin: 25px auto 0 auto;
  }
  .staff-block__name {
    font-size: 20px;
    margin-bottom: 5px;
  }
  .staff-block__post {
    font-size: 13px;
    margin-bottom: 15px;
  }
  .staff-block__description {
    font-size: 12px;
    line-height: 22px;
    margin-bottom: 34px;
  }
  .staff-block__background {
    height: 200px;
  }

  .staff-block__ceo-photo {
    max-height: 190px;
    object-position: -40px;
  }

  .arrow-button {
    display: none;
  }

  .navigation-dots {
    display: flex;
    justify-content: space-between;
    gap: 25px;
    margin: 0 auto;
    order: -1;

    &__item {
      height: 6px;
      width: 6px;
      border-radius: 3px;
      background: #e0e0e0;
      cursor: pointer;

      &:hover {
        background: $orange;
      }
    }
  }
}
</style>
