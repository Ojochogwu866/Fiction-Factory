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
];
</script>
<template>

    <div class="flex flex-col text-black mt-20 font-raleway">
        <div class="flex w-full items-center justify-center">
            <h3 class=" text-lg leading-9 px-2 w-full flex items-center">
                <div class=" border-b border-gray-400 min-w-[80px] max-w-[150px] h-[0px] mr-4" />
                <span class="flex w-[180px] text-[#d8d5cc] font-work-sans">Blog</span>
                <div class=" h-[0px] border-b border-gray-400 w-full" /></h3>
        </div>
        <div class=" bg-[#1c1c1e] mt-8 p-5 h-screen pb-10">
        <div class="flex h-[90vh]">
        <div v-for="post in blogPosts" :key="post.id" class=" p-5 gap-3">
            <div class=" bg-[#d8d5cc] shadow-inherit min-w-[250px]  lg:min-w-[350px] max-w-[500px] 
         h-full flex flex-col p-3">
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
        <RouterLink to="" class=" p-5 relative text-base font-semibold text-gray-400">Read More Blog Posts →</RouterLink>
        </div>
    </div>
</template>