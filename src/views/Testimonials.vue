<script setup lang="ts">
import Header from '../components/Header.vue';
import TestimonialCardsVue from '../components/TestimonialCards.vue';

</script>

<template>
  <main class="px-[80px]">
    <Header 
            headerText="Amazing Reviews from our Patners and Users"
            color="text-[rgb(12,81,63)]"
        />
    <div class=" mt-10">
        <div class="max-w-[400px] min-w-[400px] h-[250px] rounded-[0px_36px_0px_0px]  px-4
        border-t [border-top-style:1px] border-r [border-right-style:1px] border-gray-400 py-10">
            <div class=" text-xl text-gray-400 font-normal font-work-sans">
              "Working with writters from Fiction Factory has been absolutely aamzing. Glad for the service they provide. Top work"
            </div>
            <p class=" mt-4 text-base text-gray-400 italic">Hamzat Bolawale - Senior Manager, HOS</p>
        </div>
    </div>
  </main>
</template>