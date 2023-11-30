<script setup lang="ts">
import Header from '../components/Header.vue';

</script>
<template>
    <div class=" px-[80px]">
        <Header 
            headerText="Reach Out To Us"
            color="text-[rgb(12,81,63)]"
        />
        <div class=" py-24 font-work-sans">
            <form class=" md:w-10/12 w-full text-gray-400">
                <div class=" flex gap-5">
                    <div class=" w-1/2">
                        <label class=" text-sm" for="fullname">Full name</label>
                        <div class=" w-full bg-transparent h-16 text-sm  text-black outline-none flex bottom-0 border-b border-gray-400">
                            <input placeholder="e.g Morgan Drainail" class=" h-full bg-transparent w-full outline-none" v-model="fullname" />
                        </div>
                    </div>
                     <div class=" w-1/2">
                        <label class=" text-sm" for="fullname">Email Address</label>
                        <div class=" w-full bg-transparent h-16 text-sm  text-black outline-none flex bottom-0 border-b border-gray-400">
                            <input placeholder="xyz@rmail.com" class=" h-full bg-transparent w-full outline-none" v-model="fullname" />
                        </div>
                    </div>
                   
                </div>
                     <div class=" flex gap-5 mt-20">
                    <div class=" w-1/2">
                        <label class=" text-sm" for="fullname">What Are You?</label>
                        <div class=" w-full bg-transparent h-16 text-sm  text-black outline-none flex bottom-0 border-b border-gray-400">
                            <select placeholder="fullname" class=" h-full bg-transparent w-full outline-none" v-model="role">
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                     <div class=" w-1/2">
                        <label class=" text-sm" for="fullname">Others</label>
                        <div class=" w-full bg-transparent h-16 text-sm  text-black outline-none flex bottom-0 border-b border-gray-400">
                            <input placeholder="e.g apple piety" class=" h-full bg-transparent w-full outline-none" v-model="fullname" />
                        </div>
                    </div>
                   
                </div>
                <div class=" mt-14">
                      <div class=" w-full">
                        <label class=" text-sm" for="fullname">Message</label>
                        <div class=" w-full bg-transparent h-28 text-sm  text-black outline-none flex bottom-0 border-b border-gray-400">
                            <textarea placeholder="....." class=" h-full bg-transparent w-full outline-none" v-model="message" />
                        </div>
                    </div>
                </div>
                <div class=" mt-5">
                    <label for="radio" class=" text-sm gap-4">
                        <input type="checkbox" class=" bg-transparent h-6 w-6" />
                        Should we send you promotional emails using the data collected from this form?
                    </label>
                </div>
                <div class=" w-full mt-14">
                <button class="relative w-[200px]  mt-8 flex justify-center items-center h-[50px] rounded-[64px] border border-solid border-gray-400" type="submit">
                    Send
                </button>
                </div>
            </form>
        </div>
    </div>
</template>