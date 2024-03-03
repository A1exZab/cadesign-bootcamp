// Переиспользуемый vue компонент для использования svg файлов

<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

// Используется для загрузки svg только тогда, когда это необходимо
const icon = defineAsyncComponent(() => import(`@/assets/images/${props.name}.svg`))
</script>

<template>
  <component :is="icon" class="vue-svg" />
</template>
