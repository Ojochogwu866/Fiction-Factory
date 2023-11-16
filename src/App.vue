<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation/Navigation.vue';
import Landing from './components/Landing/index.vue'
</script>

<template>
  <header class="">
    <Navigation/>
  </header>
  <Landing/>
  <RouterView />
</template>

