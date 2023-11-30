<script setup lang="ts">
import { ref } from 'vue';

type Props = {
    id: number;
    name: string;
};

const Services = ref<Props[]>([
    { id: 1, name: 'Hire Writters' },
    { id: 2, name: 'Plot Construction' },
    { id: 3, name: "Book Publishing"},
    { id: 4, name: "Book Distribution" },
    { id: 5, name: "Proof Reading" },
    { id: 6, name: "Plot Writting"}
]);
const Work = ref<Props[]>([
    { id: 1, name: 'Work as a Writter' },
    { id: 2, name: 'Book Cover Designer' },
    { id: 3, name: "Illustrator"},
    { id: 4, name: "Book Distributor" },
    { id: 5, name: "Book Distributor" },
    { id: 6, name: "Book Distributor"}
]);

</script>
<template>
    <div class="flex flex-col text-black mt-20">
        <div class="flex w-full items-center justify-center">
            <h3 class=" text-lg leading-9 px-2 w-full border-t text-[#d8d5cc] border-gray-400 flex pt-8 items-center">Services</h3>
        </div>
        <div class="">
            <div className=" w-full bg-background1 md:h-[400px] rounded-[8px] mt-8"/>
            <div class=" -mt-[350px] w-9/12 gap-14 mx-auto flex">
                <div class="w-1/2 p-[30px] rounded-sm bg-[#7a9dce] h-[400px] flex flex-col justify-center gap-y-2">
                    <h4 class=" text-xl font-work-sans font-medium">Hire Our Services</h4>
                    <ul class="flex flex-col text-base leading-6 font-work-sans space-y-2">
                        <li class="flex gap-3 items-center mt-8" v-for="item in Services" :key="item.id">
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1111 0.425781L19.5084 1.82315L8.80188 12.5292L8.80901 12.5362L7.41165 13.9336L7.40407 13.927L7.39794 13.9336L6.00057 12.5362L6.00626 12.5292L0.890625 7.41261L2.28799 6.01523L7.40407 11.1313L18.1111 0.425781Z" fill="black"/>
                            </svg>
                            <span>{{ item.name }}</span>
                        </li>
                    </ul>
                    <div class=" flex items-end bottom-0 relative w-full h-auto mt-10">
                        <RouterLink class=" font-work-sans font-semibold text-base" to="/read-more">Learn More</RouterLink>
                    </div>
                </div>
                <div class="w-1/2 p-[30px] rounded-sm bg-[#d76d55] h-[400px] flex flex-col justify-center gap-y-2">
                    <h4 class=" text-xl font-medium font-work-sans">Work With Us</h4>
                    <ul class="flex flex-col text-base leading-6 font-work-sans space-y-2">
                        <li class=" flex gap-3 items-center mt-8" v-for="item in Work" :key="item.id">
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1111 0.425781L19.5084 1.82315L8.80188 12.5292L8.80901 12.5362L7.41165 13.9336L7.40407 13.927L7.39794 13.9336L6.00057 12.5362L6.00626 12.5292L0.890625 7.41261L2.28799 6.01523L7.40407 11.1313L18.1111 0.425781Z" fill="black"/>
                            </svg>
                            <span>{{ item.name }}</span>
                        </li>
                    </ul>
                    <div class=" flex items-end bottom-0 relative w-full h-auto mt-10">
                        <RouterLink class=" font-work-sans font-semibold text-base" to="/read-more">Learn More</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>