<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>
<template>
    <nav class=" flex items-center justify-between w-full bg-transparent 
    px-[80px] py-[60px] text-black font-normal text-[15px]">
        <div class="">
            <p>FF</p>
        </div>
        <div class=" flex gap-8">
            <RouterLink to="">
                Work
            </RouterLink>
            <RouterLink to="">
                Blog
            </RouterLink>
            <RouterLink to="">
                Get Matched
            </RouterLink>
            <RouterLink to="">
                Testimonials
            </RouterLink>
            <RouterLink to="">
                Contact
            </RouterLink>
        </div>
        <div class=" flex gap-8">
            <RouterLink to="">
                Login
            </RouterLink>
            <RouterLink to="">
                Register
            </RouterLink>
        </div>
    </nav>
</template>