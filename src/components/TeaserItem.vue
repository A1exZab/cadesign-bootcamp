<script setup>
//Объявление props компонента (имя файла с иконкой, заголовок тизера, описание тизера)
const props = defineProps({
  path: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  }
})
</script>

<template>
  <div class="teaser__container">
    <div class="teaser__content">
      <div class="teaser__icon"><icon :name="props.path" /></div>
      <div class="teaser__name">{{ props.name }}</div>
      <div class="teaser__description">
        {{ props.description }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.teaser__container {
  position: relative;
  flex-basis: 33%;
  margin: -1px -1px 0px 0px;
  border: 1px solid #ededed;

  cursor: pointer;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  &:hover {
    box-shadow: 0px 4px 52px 0px rgba(0, 0, 0, 0.13);
    border: 1px solid white;
    color: $orange;
  }
}

.teaser__content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.teaser__name {
  font-size: 20px;
  width: 100%;
  text-align: center;
  line-height: 25px;
  color: #242627;
  margin-top: 40px;
}

.teaser__description {
  font-size: 16px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  line-height: 26px;
  color: #646464;
  margin-top: 25px;
  transition: opacity 0.3s ease-out;
  opacity: 0;
  height: 0;
}

.teaser__content:hover .teaser__description {
  opacity: 1;
  height: auto;
}

@media (max-width: 1279px) {
  .teaser__container {
    flex-basis: 100%;
    margin: 0;

    &:hover {
      box-shadow: none;
      border: 1px solid #ededed;
    }
  }
}

@media (max-width: 767px) {
  .teaser__icon {
    transform: scale(1.5);
  }

  .teaser__name {
    font-size: 30px;
    line-height: 38px;
    margin-top: 60px;
  }

  .teaser__description {
    max-width: 450px;
    font-size: 24px;
    line-height: 39px;
    margin-top: 38px;
  }
}

@media (max-width: 550px) {
  .teaser__icon {
    transform: scale(1);
  }

  .teaser__name {
    font-size: 20px;
    line-height: 25px;
    margin-top: 30px;
  }

  .teaser__description {
    max-width: 300px;
    font-size: 16px;
    line-height: 26px;
    margin-top: 25px;
  }
}
</style>
