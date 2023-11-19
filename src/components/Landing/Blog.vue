<script setup lang="ts">
type BlogPostType = {
  id: number;
  topic: string;
  author: string;
  timeToRead: number;
};

const blogPosts: BlogPostType[] = [
  { id: 1, topic: 'Vue 3 and TypeScript', author: 'John Doe', timeToRead: 10 },
  { id: 2, topic: 'Getting Started with CSS-in-JS', author: 'Jane Smith', timeToRead: 8 },
  { id: 3, topic: 'State Management in Vue 3', author: 'Alex Johnson', timeToRead: 15 },
];
</script>
<template>

    <div class="flex flex-col text-black mt-20">
        <div class="flex w-full items-center justify-center">
            <h3 class=" text-lg leading-9 px-2 w-full flex items-center">
                <div class=" border-b border-gray-400 min-w-[80px] max-w-[150px] h-[0px] mr-4" />
                <span class="flex w-[180px] font-work-sans">Blog</span>
                <div class=" h-[0px] border-b border-gray-400 w-full" /></h3>
        </div>
        <div class=" bg-[#1c1c1e] mt-8 relative p-5">
        <div class=" grid grid-cols-3">
        <div v-for="post in blogPosts" :key="post.id" class=" p-5">
            <div class=" bg-[#d8d5cc] min-w-[300px]  lg:min-w-[400px] max-w-[500px] h-[300px] flex justify-center items-center">
                <img src="" alt="image" />
            </div>
            <h3>{{ post.topic }}</h3>
            <p>Author: {{ post.author }}</p>
            <p>Time to Read: {{ post.timeToRead }} minutes</p>
        </div>
        </div>
        </div>
    </div>
</template>