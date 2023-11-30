<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    props: {
    review: String,
    company: String,
    image: String
},
    })
</script>
<template>
    <main>
        <div class=" max-w-[400px] min-w-[200px] h-[400px]">
            <div class="">
                <div class="">{{ review }}</div>
                <div class="">{{ company }}</div>
            </div>
            <img class="" :src="image" alt="">
        </div>
    </main>
</template>
