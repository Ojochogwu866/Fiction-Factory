<template>
    <main class=" px-[80px]">
        <div class="">
            <div class="">
                <form @submit.prevent="makeSearch" class=" w-8/12 mx-auto">
                    <input
                        required
                        placeholder="Search Writters, Play, Plots and other Services"
                        v-model="search"
                        class="text-xs text-white bg-gray-600 bg-opacity-85 rounded-md px-2 py-4 border mt-4 w-full border-gray-600 outline-none"
                        type="text"
                    />
                </form>
            </div>
        </div>    
    </main>
</template>