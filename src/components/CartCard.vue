<script  lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: String,
    author: String,
    image: String
  },
  components: {},
});
</script>
<template>
    <main class="">
        <div class="w-[200px] h-[300px] flex flex-col justify-center items-center">
        <div class=" w-full h-[250px] bg-teal-800 bg-opacity-25 rounded-sm">
            <img class="w-full h-full object-cover flex justify-center items-center" :src="image" alt="book-image" />
        </div>
        <p class=" text-sm mt-2 text-gray-400">{{ title }} by <span>{{ author }}</span></p>
        </div>
    </main>
</template>