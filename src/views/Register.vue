<template>
    <main class="  border-[1.5px] font-raleway border-gray-400 rounded-md 
    w-8/12 mx-auto my-auto h-[85%] flex flex-col justify-center items-center p-6">
        <div class=" flex flex-col w-9/12 ">
        <p>Fiction Factory</p>
        <span class="mt-4 mb-2 text-gray-500 font-light text-xs block">
         Already Have an Account? 
          <router-link to="register">
            <span class="text-blue-500 font-light">Login Here</span>
          </router-link>
        </span>
        <form @submit.prevent="" class="py-6 w-full">
        <h1
          class="lg:text-2xl text-sm font-semibold leading-6 tracking-wider text-blue-[rgb(12,81,63)]"
        >Sign Up</h1>
        <div class=" mt-4">
        <div class=" flex flex-col gap-2 mt-2">
            <p class=" font-bold text-sm px-4 py-1 border-2 text-center border-black w-full">Google</p>
            <p class=" font-bold text-sm px-4 py-1 border-2 text-center border-black w-full">Apple</p>
            <p class=" font-bold text-sm px-4 py-1 border-2 text-center border-black w-full">Facebook</p>
        </div>
      </div>
       <span class="mt-4 mb-2 text-gray-500 font-light text-xs block">
         By creating an account, you agree to GoDaddy's 
          <router-link to="register">
            <span class="text-blue-500 font-light">Terms & Conditions and Privacy Policy</span>
          </router-link>
        </span>
      </form>
      </div>
    </main>
</template>
