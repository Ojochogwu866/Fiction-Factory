<script setup lang="ts">
import { watch, ref } from 'vue';
import { RouterView, useRoute } from 'vue-router'
import Navigation from './components/Navigation/Navigation.vue'
import Footer from './components/Navigation/Footer.vue'

const showNavigationAndFooter = ref(true);
const route = useRoute();

watch(
  () => showNavigationAndFooter.value = route.name !== 'ViewProfile' && route.matched.length === 1,
  null, // No cleanup function
);
</script>

<template>
  <div>
<template v-if="showNavigationAndFooter">
      <Navigation />
</template>
    <RouterView />
    <template v-if="showNavigationAndFooter">
      <Footer />
    </template>
  </div>
</template>
