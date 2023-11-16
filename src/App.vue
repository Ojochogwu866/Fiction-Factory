<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation/Navigation.vue';
import Footer from './components/Navigation/Footer.vue';
import Landing from './components/Landing/index.vue'
</script>

<template>
  <header class="">
    <Navigation/>
  </header>
  <Landing/>
  <Footer />
  <RouterView />
</template>

