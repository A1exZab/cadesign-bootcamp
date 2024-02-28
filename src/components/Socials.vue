<script setup>
import { ref } from 'vue'

const showTooltip = () => {
  isTooltipVisible.value = true
}

const hideTooltip = () => {
  isTooltipVisible.value = false
}

const keepTooltipVisible = () => {
  isTooltipVisible.value = true
}
const isTooltipVisible = ref(false)
</script>

<template>
  <div class="social__wrapper">
    <a class="social__link" href="#" @mouseenter="showTooltip" @mouseleave="hideTooltip"
      >Социальные сети <span>&#x25BE;</span></a
    >
    <div
      v-show="isTooltipVisible"
      class="social__container"
      @mouseover="keepTooltipVisible"
      @mouseleave="hideTooltip"
    >
      <nav class="social__links-block">
        <div class="social__item">
          <a href="#"><icon name="vk-logo" /></a>
        </div>
        <div class="social__item">
          <a href="#"><icon name="fb-logo" /></a>
        </div>
        <div class="social__item">
          <a href="#"><icon name="ok-logo" /></a>
        </div>
        <div class="social__item">
          <a href="#"><icon name="inst-logo" /></a>
        </div>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social__wrapper {
  position: relative;
}
.social__link {
  display: block;
  height: 20px;
  margin: 2px 0 0 0;
  font-family: 'Gilroy Medium';
  font-size: 14px;
  line-height: 16px;
  color: $blue;

  & > span {
    color: $dark;
  }

  &:hover + div {
    box-shadow: 0px 17px 46px 0px #00000014;
  }
}
.social__container {
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
.social__links-block {
  width: 135px;
  height: 99px;
  background: #e0e0e0;
  position: relative;
}
.social__item {
  @include flex-center;

  position: absolute;
  background: $white;
  height: 48px;
  width: 66px;
  cursor: pointer;

  &:nth-of-type(1) {
    left: 1px;
    top: 1px;
  }

  &:nth-of-type(2) {
    left: 1px;
    bottom: 1px;
  }

  &:nth-of-type(3) {
    right: 1px;
    top: 1px;
  }

  &:nth-of-type(4) {
    right: 1px;
    bottom: 1px;
  }

  & .vue-svg {
    color: $orange;
  }

  &:hover .vue-svg {
    color: $main-blue;
  }
}
</style>
