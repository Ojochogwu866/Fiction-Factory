<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
    data(){
        return{
            DropDown: false
        }
    },
    watch: {
    $route(x, y) {
      if (x || y) {
        this.DropDown = false;
      }
    },
  },
})
</script>

<template>
    <nav class=" flex items-center justify-between w-full bg-transparent 
    px-[80px] py-[60px] text-gray-600 font-normal text-[15px] font-raleway">
        <div class="">
            <p>FF</p>
        </div>
        <div class=" flex gap-8">
            <RouterLink to="/work">
                Work
            </RouterLink>
            <RouterLink to="/Blog">
                Blog
            </RouterLink>
            <RouterLink to="/get-matched">
                Get Matched
            </RouterLink>
            <RouterLink to="/testimonials">
                Testimonials
            </RouterLink>
            <div
                class=""
                :class="[$route.name == 'MainTheme' ? 'all-white' : '']"
            >
                <span
                    @click="DropDown = !DropDown"
                    class="flex gap-2 justify-center items-center cursor-pointer"
                >
                        Purchase
                <svg
                    :class="[$route.name == 'MainTheme' ? 'all-white' : '']"
                    class="w-3 h-3 ml-1 text-gray-500 font-hairline"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                <path d="M19 9l-7 7-7-7" />
                </svg>
            </span>
            <div
                v-if="DropDown"
                class="-ml-10 mt-1 flex shadow-sm flex-col justify-center  opacity-75 px-2 py-2 gap-y-2 rounded-md w-[200px] bg-gray-800 absolute">
            <RouterLink class=" hover:border-b border-gray-400 w-fit hover:text-gray-400" to="/purchase-manuscript">
                Purchase ManuScripts
            </RouterLink>
            <RouterLink class=" hover:border-b border-gray-400 w-fit hover:text-gray-400" to="/purchase-published">
                Purchase Published
            </RouterLink>
        </div>
    </div>
            <RouterLink to="/Contact">
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