<script lang="ts">
import { RouterView } from 'vue-router';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>

<template>
  <main>
    <div class="absolute top-0 inset-0  flex h-screen box-border font-work-sans">
      <div class="lg:w-2/5 hidden lg:block bg-[rgb(12,81,63)] backdrop-blur-sm backdrop-brightness-125 
      bg-[url('https://images.unsplash.com/photo-1603974299011-487da4875d51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdHRlcnN8ZW58MHx8MHx8fDA%3D')]
       after:bg-black  bg-center bg-cover  relative  overflow-hidden">
        <div class="justify-between flex w-full h-full bg-black bg-opacity-50 p-12 items-center">
          <div class="z-20 cursor-pointer" @click="$router.push('/')">
            <h2
              class="lg:uppercase lg:tracking-wide text-white font-bold lg:leading-3 play lg:text-2xl text-xl leading-3"
            >Fiction Factory</h2>
            <p
              class="text-xs capitalize font-medium text-white lg:mt-2 lg:pt-1 pt-2"
            >Writting Shrine for Story Tellers</p>
          </div>
        </div>
      </div>
      <div class="flex-1  flex justify-center items-center">
        <div class="absolute top-0 lg:hidden w-full z-50 overflow-y-scroll ">
          <div class="m-8 relative">
            <div class="lg:hidden relative w-full flex justify-between top-0 ">
              <div class="cursor-pointer" @click="$router.push('/')">
                <h2
                  class="lg:uppercase lg:tracking-wide text-gray-900 lg:leading-3 play lg:text-2xl text-xl leading-3 font-light"
                >Fiction Factory</h2>
                <p
                  class="text-xs capitalize text-gray-900 lg:mt-2 lg:pt-1 pt-2 font-light"
                >Writting Shrine for Story Tellers</p>
              </div>
              <div class="lg:hidden">
                <svg
                  class="h-8 w-8 text-gray-900"
                  fill="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <RouterView/>
      </div>
    </div>
  </main>
</template>
