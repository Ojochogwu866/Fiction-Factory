<script setup lang="ts">
import Header from '../components/Header.vue';

</script>
<template>
    <div class=" px-[80px]">
        <Header 
            headerText="Check through our works, and our clients."
            color="text-[rgb(12,81,63)]"
        />
        <div class=" py-24">
            <div class="grid grid-cols-3 gap-3 min-h-[600px]">
                <div class="row-span-3 bg-[#d8d5cc] p-3 rounded-md"></div>
                <div class="row-span-2 bg-[#d8d5cc] p-3 rounded-md"></div>
                <div class="bg-[#d8d5cc] p-3 rounded-md"></div>
                <div class="bg-[#d8d5cc] p-3 rounded-md"></div>
                <div class="col-span-2 bg-[#d8d5cc] p-3 rounded-md"></div>
                
            </div>
        </div>
    </div>
</template>