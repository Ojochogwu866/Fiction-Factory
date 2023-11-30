<script setup lang="ts">
import styles from "../../styles/styles";

</script>
<template>
    <div class="flex flex-col text-black mt-20 items-center">
        <div class="flex w-full items-center justify-center">
            <h3 class=" text-lg leading-9 px-2 w-full border-t border-gray-400 text-[#d8d5cc] flex pt-8 items-center">Work</h3>
        </div>
        <div>
            <div class=" w-full bg-gray-900 border border-gray-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 h-[400px] rounded-[8px] mt-8">
                <h3 class=" text-white text-[15px] font-normal font-raleway p-4">Published Books</h3>
            </div>
            <div class="flex grid-cols-3 gap-2 mt-2">
             <div :class="styles.workCard">
                <h3 class=" text-white text-[15px] font-normal font-raleway p-4">Cover Designs</h3>
                 
            </div>
            <div :class="styles.workCard">
                <h3 class=" text-white text-[15px] font-normal font-raleway p-4">Most Puchased</h3>
                 
            </div>
             <div :class="styles.workCard">
                <h3 class=" text-white text-[15px] font-normal font-raleway p-4"> Plots and Others</h3>
               
            </div>
            </div>
        </div>
        <div className="relative w-[200px]  mt-28 flex justify-center items-center h-[50px] rounded-[64px] border border-solid border-[#d8d5cc]">
        <RouterLink to="/" className="flex w-auto gap-4 px-6 py-2">
            <div className=" text-gray-400 font-medium font-work-sans text-base flex">
                See all Works
                →
            </div>
        </RouterLink>
        </div>
    </div>
</template>