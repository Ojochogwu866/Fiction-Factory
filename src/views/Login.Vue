<template>
    <main class="  border-[1.5px] font-raleway text-gray-400 border-gray-400 rounded-md 
    w-8/12 mx-auto my-auto h-[85%] flex flex-col justify-center items-center">
        <div class=" flex flex-col w-9/12">
        <p class=" text-base font-semibold">Fiction Factory</p>
        <span class="mt-2 text-gray-400 font-light text-xs block">
         New to fiction factory? 
          <router-link to="register">
            <span class="text-blue-500 font-light">Create  an account here</span>
          </router-link>
        </span>
        <form @submit.prevent="" class="py-2 w-full">
        <h1
          class="lg:text-2xl text-sm font-semibold leading-6 tracking-wider text-gray-400"
        >Sign In</h1>
        <div class="max-w-xl mx-auto lg:px-0 px-6">
          <input
            class="bg-gray-200 mt-5 font-light text-xs focus:outline-none text-black
            focus:shadow-outline border-2 border-black  py-2 px-4 w-full block mx-auto appearance-none leading-6"
            type="email"
            placeholder="Email Address"
            required
      
          />
        </div>
        <div class="max-w-xl mx-auto lg:px-0 px-6">
          <input
            class="bg-gray-200 font-light mt-3 text-xs focus:outline-none text-black 
            focus:shadow-outline border-2 border-black py-2 px-4 w-full block mx-auto appearance-none leading-6"
            type="password"
            placeholder="Password"
            required
 
          />
        </div>
        <p
          v-if=" ''"
          class="py-2 text-red-500 text-xs font-light text-center"
        >{{}}</p>
        <router-link to="/forgot-password">
          <p class="text-xs text-gray-500 font-light text-center my-2">Forgot Password ?</p>
        </router-link>
        <div class="w-full flex items-center">
          <button
            class="font-light mx-auto text-sm  bg-[rgb(12,81,63)] hover:bg-[rgb(12,81,63)] text-white 
            hover:text-white outline-none shadow-none focus:outline-none py-2 leading-7 px-12 border 
            border-[rgb(12,81,63)] hover:border-transparent w-full"
          >Login</button>
        </div>
      </form>
      <div class=" mt-2 flex flex-col justify-center items-center">
        <p class="text-xs text-gray-400 font-light text-center">Or Create an Account with</p>
        <div class=" flex gap-2 mt-2">
            <p class=" font-bold text-sm px-4 py-1 border-2 border-gray-400 w-fit">Google</p>
            <p class=" font-bold text-sm px-4 py-1 border-2 border-gray-400 w-fit">Apple</p>
            <p class=" font-bold text-sm px-4 py-1 border-2 border-gray-400 w-fit">Facebook</p>
        </div>
      </div>
      </div>
    </main>
</template>