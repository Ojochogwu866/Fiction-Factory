<script setup lang="ts">
import Header from '../components/Header.vue';

type userType = {
  id: number;
  image: string;
  name: string;
  title: string;
};

const users: userType[] = [
  { id: 1, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe', title: 'Writter'  },
  { id: 2, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe', title: 'Writter'  },
  { id: 3, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Alex Johnson', title: 'Poet' },
  { id: 4, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe', title: 'Designer' },
  { id: 5, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Jane Smith', title: 'PlayWritter' },
  { id: 6, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Alex Johnson', title: 'Designer' },
{ id: 1, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe', title: 'Writter'  },
  { id: 2, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe', title: 'Writter'  },
  { id: 3, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Alex Johnson', title: 'Poet' },
  { id: 4, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'John Doe', title: 'Designer' },
  { id: 5, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Jane Smith', title: 'PlayWritter' },
  { id: 6, image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Alex Johnson', title: 'Designer' },
];
</script>
<template>
    <main class=" px-[80px] ">
         <!-- <Header 
            headerText="Get matched with top Writters"
            color="text-[rgb(12,81,63)]"
        /> -->
        <div class="w-9/12 mx-auto">
            <div class=" mt-10">
                <form @submit.prevent="makeSearch" class=" w-[90%] mx-auto">
                    <input
                        required
                        placeholder="Search for service e.g. Writters, Play, Plots, Book Designers and other Services"
                        v-model="search"
                        class="text-xs text-white bg-gray-600 bg-opacity-85 rounded-md px-2 py-4 border mt-4 w-full border-gray-600 outline-none"
                        type="text"
                    />
                </form>
            </div>
            <div class=" mt-20">
            <div class="grid grid-cols-3 grid-rows-3 gap-y-[20px] gap-x-[20px]">
                <div  v-for="profile in users" :key="profile.id" class=" flex rounded-md relative h-[70px] w-[250px] bg-gray-600 border-gray-600 text-white pr-6">
                    <img class=" h-full w-[60px] object-cover" :src="profile.image" alt="" />
                    <div class="flex items-center justify-between w-full">
                    <div class=" py-2 px-2 flex flex-col justify-center ">
                        <h4 class=" text-sm">{{ profile.name }}</h4>
                        <p class="mt-1 text-xs">{{ profile.title }}</p>
                    </div>
                    <RouterLink class="flex items-center justify-end" to="">
                        <svg width="38" height="38" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_168)">
                                <path d="M29 0.491699C13.2552 0.491699 0.491528 13.2554 0.491528 29.0002C0.491528 44.745 13.2552 57.5086 29 57.5086C44.7448 57.5086 57.5085 44.745 57.5085 29.0002C57.5085 13.2554 44.7448 0.491699 29 0.491699ZM29 1.47475C44.2019 1.47475 56.5254 13.7983 56.5254 29.0002C56.5254 44.202 44.2019 56.5256 29 56.5256C13.7981 56.5256 1.47458 44.202 1.47458 29.0002C1.47458 13.7983 13.7981 1.47475 29 1.47475Z" fill="url(#paint0_linear_1_168)"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M38.86 28.8513L31.3101 20.9352C30.9581 20.575 30.3867 20.5332 29.9756 20.8988C29.6088 21.2244 29.5996 21.861 29.9388 22.2157L35.9994 28.5603H20.6048C20.0831 28.5603 19.661 28.9768 19.661 29.4916C19.661 30.0064 20.0831 30.4229 20.6048 30.4229H35.9994L29.9388 36.7675C29.5996 37.1222 29.6236 37.7425 29.9756 38.0844C30.348 38.4446 30.9636 38.4136 31.3101 38.048L38.86 30.1319C39.0812 29.9172 39.1217 29.7099 39.1254 29.4916C39.1254 29.277 38.9927 28.9896 38.86 28.8513Z" fill="url(#paint1_linear_1_168)"/>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1_168" x1="0.491528" y1="0.491699" x2="57.5085" y2="57.5086" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#665DCD"/>
                                    <stop offset="0.447624" stop-color="#fff"/>
                                    <stop offset="1" stop-color="#fff"/>
                                    </linearGradient>
                                <linearGradient id="paint1_linear_1_168" x1="19.661" y1="22.1796" x2="37.5969" y2="38.4849" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#665DCD"/>
                                    <stop offset="0.447624" stop-color="#5FA4E6"/>
                                    <stop offset="1" stop-color="#D2AB67"/>
                                </linearGradient>
                                <clipPath id="clip0_1_168">
                                <rect width="58" height="58" fill="white" transform="matrix(-1 0 0 1 58 0)"/>
                                </clipPath>
                            </defs>
                            </svg>
                    </RouterLink>
                    </div>
                </div>
             </div>
             </div>  
                     <div class=" w-full flex justify-center items-center mt-10">
        <div class="relative w-[200px]  mt-8 flex justify-center items-center h-[50px] rounded-[64px] border border-solid border-gray-600 text-gray-400">
            See More
        </div>
        </div>
        </div>  
    </main>
</template>