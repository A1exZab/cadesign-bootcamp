<script setup>
import 'normalize.css'
import './main.css'
import Header from './components/Header.vue'
import Banner from './components/Banner.vue'
import StaffBlock from './components/StaffBlock.vue'
import TeasersBlock from './components/TeasersBlock.vue'
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="content">
      <Banner />
      <TeasersBlock />
      <StaffBlock />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
