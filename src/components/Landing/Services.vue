<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
<template>
    <div class="flex flex-col text-black mt-20">
        <div class="flex w-full items-center justify-center">
            <h3 class=" text-lg leading-9 px-2 w-full border-t border-gray-400 flex pt-8 items-center">Services</h3>
        </div>
        <div class="">
            <div className=" w-full bg-background1 md:h-[400px] rounded-[8px] mt-8"/>
            <div class=" -mt-[250px] w-9/12 gap-14 mx-auto flex">
                <div class="w-1/2 p-[30px] rounded-lg bg-[#7a9dce] h-[400px] flex flex-col justify-center gap-y-2">
                    <h4 class=" text-base font-semibold">Hire Our Services</h4>
                    <ul class="flex flex-col text-[15px] leading-6 font-work-sans">
                        <li>Hire Writters</li>
                        <li>Plot Construction</li>
                        <li>Book Publishing</li>
                        <li>Book Distribution</li>
                        <li>Proof Reading</li>
                        <li>Plot writing</li>
                    </ul>
                    <div class=" flex items-end bottom-0 relative">
                        <RouterLink to="/read-more">Learn More</RouterLink>
                    </div>
                </div>
                <div class="w-1/2 p-[30px] rounded-lg bg-[#d76d55] h-[400px] flex flex-col justify-center gap-y-2">
                    <h4 class="text-base font-semibold">Work With Us</h4>
                    <ul class="flex flex-col text-[15px] leading-6 font-work-sans">
                        <li>Register as a writter</li>
                        <li>Book Cover Designer</li>
                        <li>Illustrator</li>
                        <li>Book Distributor</li>
                    </ul>
                    <RouterLink to="/read-more">Learn More</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>