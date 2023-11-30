<script setup lang="ts">
import styles from '../../styles/styles';

</script>
<template>
    <div class="flex flex-col bg-[#0A090F] mt-8">
    <div class="  flex justify-between p-[80px]">     
        <div class=" p-20">
            FF
        </div>
        <div class="flex flex-col">
        <div class="grid grid-cols-4">
            <div >
                <h2 :class="styles.footerHeader">WORK</h2>
                <ul :class="styles.footerLink" class="flex flex-col space-y-4 mt-8">
                    <li>Zenith Paitra</li>
                    <li>Famous Venzoura</li>
                    <li>Regions Petra</li>
                    <li>RiseZoft</li>
                    <RouterLink to="/" >View More</RouterLink>
                </ul>
            </div>
            <div class="">
                <h2 :class="styles.footerHeader">COMPANY</h2>
                <ul :class="styles.footerLink" class="flex flex-col space-y-4 mt-8">
                    <li>About</li>
                    <li>Focus</li>
                    <li>Contact</li>
                    <li>Careers</li>              
                </ul>
            </div>
            <div class="">
                <h2 :class="styles.footerHeader">CLIENTS</h2>
                <ul :class="styles.footerLink" class="flex flex-col space-y-4 mt-8">
                    <li>Protegz Publishers</li>
                    <li>Clay Writters</li>
                    <RouterLink to="/" >View More</RouterLink>
                </ul>
            </div>
            <div class="">
                <h2 :class="styles.footerHeader">JOIN OUR NEWSLETTER</h2>
                <ul :class="styles.footerLink" class=" flex flex-col space-y-4 mt-8 leading-6">
                    <li>
                        Join our Newsletter to recieve frequent updates on our latest published books, guides and articles.
                    </li>
                </ul>
                <div>
                    <input class="text-xs text-white bg-gray-300 bg-opacity-25  
                    rounded-md p-2 border mt-4 w-full border-gray-400 outline-none" placeholder="EMAIL ADDRESS" />
                </div>
            </div>
        </div>
        <div class="flex items-center">
            <div class=" w-1/4 mt-8">
                <h2 :class="styles.footerHeader">BLOG</h2>
                <ul :class="styles.footerLink" class="flex flex-col space-y-4 mt-8">
                    <li>
                        Practical guides to understanding the concept of dynamic mannerism in play writting.
                    </li>
                    <li>Understanding folklore, properties, and Idioms</li>
                </ul>
            </div>
            <div class=" max-w-[500px] min-w-[280px] flex justify-center items-center mx-auto">
                <div class=" text-sm font-extrabold uppercase text-gray-400 border-[2px] border-[#d76d55] rounded-md flex px-8 py-8">
                    <span class="flex justify-center items-center">Check out our most recent collections from our best writters, and published books.
                        <svg width="60" height="61" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" 
                            d="M29.9982 10.7812H9.99819V14.1145H24.3086L9.30859 29.1147L11.6656 31.4716L26.6649 16.4725V30.7812H29.9982V10.7812Z" fill="#d76d55"/>
                        </svg>
                    </span>
                </div>
                </div>
            </div>
        </div>
        <div>
        </div>
        
        </div>
        <div class=" border-t-[0.5px] border-gray-600 w-full pb-5 mt-12 font-work-sans px-[80px] text-gray-400 flex justify-between">
            <div class=" mt-4 flex gap-8">
                <p class=" text-xs">&copy;Fiction Factory 2023</p>
                <ul class="flex text-xs gap-4">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="">
                <ul className="flex text-white grid-cols-2  gap-1 text-[13px]">
                    <li className=" bg-gray-600 w-[40px] h-[40px] inline-flex justify-center items-center">FB</li>
                    <li className=" bg-gray-600 w-[40px] h-[40px] inline-flex justify-center items-center">TW</li>
                    <li className=" bg-gray-600 w-[40px] h-[40px] inline-flex justify-center items-center">IG</li>
                    <li className=" bg-gray-600 w-[40px] h-[40px] inline-flex justify-center items-center">LI</li>
                </ul>
            </div>
        </div>
    </div>
</template>
