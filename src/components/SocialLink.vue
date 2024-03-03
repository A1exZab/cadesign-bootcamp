<script setup>
import { ref } from 'vue'

// Логика отобрадения тултипа
const isTooltipVisible = ref(false)

const showTooltip = () => {
  isTooltipVisible.value = true
}

const hideTooltip = () => {
  isTooltipVisible.value = false
}

const keepTooltipVisible = () => {
  isTooltipVisible.value = true
}
</script>

<template>
  <div class="social__wrapper">
    <span class="social-link" @mouseenter="showTooltip" @mouseleave="hideTooltip"
      >Социальные сети <span>&#x25BE;</span></span
    >
    <!-- Скрытие элемента, когда тултип не виден -->
    <div
      v-show="isTooltipVisible"
      class="social-icons__wrapper"
      @mouseover="keepTooltipVisible"
      @mouseleave="hideTooltip"
    >
      <div class="social-icons__container">
        <div class="social-icons__item">
          <a href="https://vk.com" target="_blank"><icon name="vk-logo" /></a>
        </div>
        <div class="social-icons__item">
          <a href=""><icon name="fb-logo" /></a>
        </div>
        <div class="social-icons__item">
          <a href="https://www.odnoklassniki.ru" target="_blank"><icon name="ok-logo" /></a>
        </div>
        <div class="social-icons__item">
          <a href=""><icon name="inst-logo" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social__wrapper {
  position: relative;
}
.social-link {
  display: block;
  height: 20px;
  margin: 2px 0 0 0;
  font-family: 'Gilroy Medium';
  font-size: 14px;
  line-height: 16px;
  color: $blue;
  cursor: pointer;

  & > span {
    color: $dark;
  }

  &:hover + div {
    box-shadow: 0px 17px 46px 0px #00000014;
  }
}
.social-icons__wrapper {
  @include flex-center;

  position: absolute;
  top: 20px;
  left: 0;
  background: $white;
  height: 137px;
  width: 173px;
  z-index: 10;

  &:hover {
    box-shadow: 0px 17px 46px 0px #00000014;
  }
}

.social-icons__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.social-icons__item {
  @include flex-center;

  background: $white;
  height: 48px;
  width: 66px;
  cursor: pointer;
  border: 1px solid #e0e0e0;

  &:nth-of-type(2n) {
    margin-left: -1px;
  }

  &:nth-of-type(n + 3) {
    margin-top: -1px;
  }

  & .vue-svg {
    color: $orange;
  }

  &:hover .vue-svg {
    color: $main-blue;
  }
}
</style>
