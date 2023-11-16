<script setup lang="ts">

</script>
<template>
    <div class="flex flex-col text-black mt-20 items-center">
        <div class="flex w-full items-center justify-center">
            <h3 class=" text-lg leading-9 px-2 w-full border-t border-gray-400 flex pt-8 items-center">Work</h3>
        </div>
        <div>
            <div class=" w-full [background:linear-gradient(180deg,rgb(0,0,0)_0%,rgba(0,0,0,0.3)_100%)] md:h-[400px] rounded-[8px] mt-8">

            </div>
            <div class="flex grid-cols-3 gap-8 mt-8">
            <div class="bg-[#04030374] rounded-md lg:min-w-[350px] h-[400px]">

            </div>
            <div class="bg-[#04030374] rounded-md lg:min-w-[350px] h-[400px]">

            </div>
            <div class="bg-[#04030374] rounded-md lg:min-w-[350px] h-[400px]">

            </div>
            </div>
        </div>
        <RouterLink to="/" className="relative w-[195px] mt-12 flex justify-center items-center h-[50px] rounded-[64px] border border-solid border-black">
            <div className=" text-black font-work-sans text-base">
                See all Works
            </div>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" 
                d="M20.8679 12.6767L12.3826 4.19141L10.9684 5.60562L17.0394 11.6767H4.31152V13.6767H17.0395L10.9684 19.7478L12.3826 21.162L20.8679 12.6767Z" fill="black"/>
            </svg>
        </RouterLink>
    </div>
</template>