<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import TeaserItem from './TeaserItem.vue'
import * as data from '@/data.json'

const { teasers } = data

// Настройки для карусели
const settings = {
  itemsToShow: 1,
  snapAlign: 'center'
}

const breakpoints = {
  767: {
    itemsToShow: 2,
    snapAlign: 'start'
  }
}

// Отслеживание ширины viewport
const viewportWidth = ref(window.innerWidth)

const handleResize = () => {
  viewportWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="teasers__container _container">
    <!-- Рендерин списка элементов -->
    <div v-if="viewportWidth > 1279" class="teasers__wrapper">
      <TeaserItem
        v-for="(teaser, index) in teasers"
        :key="index"
        :path="teaser.path"
        :name="teaser.name"
        :description="teaser.description"
      />
    </div>
  </div>

  <div v-if="viewportWidth < 1279" class="teasers__container _container">
    <!-- Отображение компонента карусели -->
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="(teaser, index) in teasers" :key="index">
        <TeaserItem
          :key="index"
          :path="teaser.path"
          :name="teaser.name"
          :description="teaser.description"
        />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss">
.teasers__wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 76px;
}

.carousel__pagination {
  margin-top: 37.5px;
}

.carousel__pagination-button {
  padding: 12.5px;

  &::after {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: #e0e0e0;
  }
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  background-color: $orange;
}
</style>
