<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    headerText: String
  },
  components: {},
});
</script>

<template>
    <main>
        <div class="">
            <h1  class=" text-[78px] capitalize font-[400px] text-[rgb(12,81,63)] font-raleway leading-normal">{{ headerText }}</h1>
        </div>
    </main>
</template>
