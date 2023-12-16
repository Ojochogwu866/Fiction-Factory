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
    <div class="absolute top-0 inset-0 bg-white flex h-screen box-border font-work-sans">
      <div class="lg:w-2/5 hidden lg:block f-full bg-[rgb(12,81,63)]  relative p-12 overflow-hidden">
        <div class="justify-between flex w-full">
          <div class="z-20 cursor-pointer" @click="$router.push('/')">
            <h2
              class="lg:uppercase lg:tracking-wide text-white lg:leading-3 play lg:text-2xl text-xl leading-3"
            >Fiction Factory</h2>
            <p
              class="text-xs capitalize text-white lg:mt-2 lg:pt-1 pt-2"
            >Writting Shrine for Story Tellers</p>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-white flex justify-center items-center">
        <div class="absolute top-0 lg:hidden w-full z-50 overflow-y-scroll bg-white">
          <div class="m-8 relative">
            <div class="lg:hidden relative w-full flex justify-between top-0 bg-white">
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
