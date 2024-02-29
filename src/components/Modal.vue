<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['modal-close'])

const target = ref(null)
onClickOutside(target, () => emit('modal-close'))
</script>

<template>
  <div v-if="isOpen" class="modal__mask">
    <!-- <div class="modal__wrapper"> -->
    <div class="modal__container" ref="target">
      <slot />
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
.modal__mask {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal__container {
  z-index: 20;
}
</style>
