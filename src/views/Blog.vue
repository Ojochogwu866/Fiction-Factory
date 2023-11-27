<script setup lang="ts">
type BlogPostType = {
  id: number;
  topic: string;
  author: string;
  Description: string;
  timeToRead: number;
};

const blogPosts: BlogPostType[] = [
  { id: 1, topic: 'Vue 3 and TypeScript', author: 'John Doe', timeToRead: 10, Description: "Netlify Connect is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source." },
  { id: 2, topic: 'Getting Started with CSS-in-JS', author: 'Jane Smith', timeToRead: 8, Description: "Netlify Connect is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source." },
  { id: 3, topic: 'State Management in Vue 3', author: 'Alex Johnson', timeToRead: 15, Description: "Netlify Connect is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source." },
  { id: 1, topic: 'Vue 3 and TypeScript', author: 'John Doe', timeToRead: 10, Description: "Netlify Connect is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source." },
  { id: 2, topic: 'Getting Started with CSS-in-JS', author: 'Jane Smith', timeToRead: 8, Description: "Netlify Connect is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source." },
  { id: 3, topic: 'State Management in Vue 3', author: 'Alex Johnson', timeToRead: 15, Description: "Netlify Connect is a data unification layer that gives web teams the freedom to create world-class websites, online stores, and applications with data from any existing or new content source." },
];
</script>
<template>
    <main class="px-[80px] text-black">
        <div class=" grid grid-cols-2">
                <div v-for="post in blogPosts" :key="post.id" class="p-5 gap-3">
                <div class=" bg-[#d8d5cc] shadow-inherit min-w-[250px]  lg:min-w-[350px] max-w-[500px] 
                h-full flex flex-col px-8 min-h-[400px] border border-gray-400 rounded-md">
                <img src="" class=" max-w-[3/4] mt-2 h-[50%] flex justify-center items-center" alt="image" />
                <h3 class=" font-semibold text-sm leading-7">{{ post.topic }}</h3>
                <p class=" text-sm leading-6">{{ post.Description }}</p>
                <div class=" flex gap-3 mt-3">
                <p class=" text-xs font-medium leading-6">by {{ post.author }}</p>
                <p class=" text-xs font-medium leading-6">{{ post.timeToRead }} minutes</p></div>
                <RouterLink to="" class=" text-sm font-semibold mt-3">Learn More →</RouterLink>
            </div>
        </div>
        </div>
        <div class=" w-full flex justify-center items-center">
        <div class="relative w-[200px]  mt-8 flex justify-center items-center h-[50px] rounded-[64px] border border-solid border-gray-400">
            See More
        </div>
        </div>
    </main>
</template>