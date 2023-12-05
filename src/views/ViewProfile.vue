<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <main class=" px-[80px] py-[40px] md:h-screen flex font-work-sans gap-2">
        <div class=" h-full" >
            <div class=" md:w-[400px] md:h-[350px] flex justify-center items-center rounded-md bg-teal-950 bg-opacity-20 relative">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=
                rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile=picture" class=" w-9/12 h-9/12 flex justify-center items-center rounded-full"/>
            </div>
            <div class=" md:w-[400px] md:h-[80px] flex items-center px-3 mt-2 rounded-md bg-teal-950 bg-opacity-20 relative">
                <router-link to="/work-history" class=" text-base text-gray-400 font-normal">Work</router-link>
            </div>
            <div class=" md:w-[400px] md:h-[80px] flex items-center px-3 mt-2 rounded-md bg-teal-950 bg-opacity-20 relative">
                <router-link to="/previous-experience" class=" text-base text-gray-400 font-normal">Previous Experience</router-link>
            </div>

        </div>
        <div class=" w-full h-full bg-teal-950 bg-opacity-20 p-5">
            <RouterView/>
        </div>
    </main>
</template>
