<script setup>
import { ref, watchEffect } from 'vue'
import { onClickOutside } from '@vueuse/core'

//Объявление props компонента (состояние модального окна)
const props = defineProps({
  isOpen: Boolean
})

// const showModal = ref(props.isOpen)

// Объявление события modal-close, которое может сгенерировано компонентом для родителя
const emit = defineEmits(['closeModal'])

const target = ref(null)
onClickOutside(target, () => emit('closeModal'))

watchEffect(() => {
  if (props.isOpen) {
    document.body.classList.add('modal-open')
  } else {
    document.body.classList.remove('modal-open')
  }
})
</script>

<template>
  <!-- Условынй рендеринг Modal -->
  <div v-if="isOpen" class="modal__mask">
    <div class="modal__container" ref="target">
      <!-- Отображение дочерних компонентов Modal -->
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal__mask {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 41, 41, 0.9);
  overflow: auto;
}
.modal__container {
  margin: 0 auto;
  max-width: fit-content;
}
</style>
