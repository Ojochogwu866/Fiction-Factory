<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation/Navigation.vue'
import Footer from './components/Navigation/Footer.vue'

</script>

<template>
  <Navigation/>
      <RouterView />
  <Footer />
</template>
