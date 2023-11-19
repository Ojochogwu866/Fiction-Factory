<script setup lang="ts">
import styles from "../../styles/styles";

</script>
<template>
    <div class="flex flex-col text-black mt-20 items-center">
        <div class="flex w-full items-center justify-center">
            <h3 class=" text-lg leading-9 px-2 w-full border-t border-gray-400 flex pt-8 items-center">Work</h3>
        </div>
        <div>
            <div class=" w-full bg-gray-800 border border-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 h-[400px] rounded-[8px] mt-8">
                <h3 class=" text-white text-base font-semibold font-work-sans p-4">Published Books</h3>
            </div>
            <div class="flex grid-cols-3 gap-8 mt-8">
             <div :class="styles.workCard">
                <h3 class=" text-black text-base font-semibold font-work-sans p-4">Cover Designs</h3>
                 <div :className="styles.innerCard"></div>
            </div>
            <div :class="styles.workCard">
                <h3 class=" text-black text-base font-semibold font-work-sans p-4">Most Puchased</h3>
                 <div :className="styles.innerCard"></div>
            </div>
             <div :class="styles.workCard">
                <h3 class=" text-black text-base font-semibold font-work-sans p-4"> Plots and Others</h3>
                 <div :className="styles.innerCard">
                    
                </div>
            </div>
            </div>
        </div>
        <div className="relative w-[200px]  mt-28 flex justify-center items-center h-[50px] rounded-[64px] border border-solid border-black">
        <RouterLink to="/" className="flex w-auto gap-4 px-6 py-2">
            <div className=" text-black font-medium font-work-sans text-base flex">
                See all Works
                 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" 
                d="M20.8679 12.6767L12.3826 4.19141L10.9684 5.60562L17.0394 11.6767H4.31152V13.6767H17.0395L10.9684 19.7478L12.3826 21.162L20.8679 12.6767Z" fill="black"/>
            </svg>
            </div>
        </RouterLink>
        </div>
    </div>
</template>