<script setup></script>

<template>
  <div class="header__navigation--button">
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
.header__navigation--button {
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

@media (max-width: 1024px) {
  .header__navigation--button {
    display: block;
  }
}
</style>
