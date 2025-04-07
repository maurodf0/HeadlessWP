<script setup lang="ts">
import Id from './[id].vue';


const { data } = await useFetch<object>('https://maurodefalco.it/wp-json/', {
    method: 'GET',

});

const projects = [
    {
        id: 1,
        title: 'Anime Tracker',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['Nuxt', 'Vue', 'Nuxt UI', 'PWA'],
    },
    {
        id: 2,
        title: 'Glide AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['Nuxt', 'Vue', 'Prismic'],
    },
    {
        id: 3,
        title: 'Ringston',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['GSAP', 'Three.js', 'Lenis'],
    },
    {
        Id: 4,
        title: 'Single User Content',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['Php', 'WordPress'],
    },
]


</script>

<template>


    <div class="hero-wrapper text-center px-4 lg:px-10 max-w-[1080px] mx-auto py-6 md:py-16">
        <div class="rotate-25 bg-gradient-to-r from-sky-600/95 to-teal-600/95 w-full md:w-1/3 h-[120px] filter blur-[160px] absolute mix-blend-screen -z-10 top-16 left-3/3 md:left-1/3">
        </div>
        <h1
            class="text-5xl md:text-7xl  mb-4 font-medium bg-gradient-to-t from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Fast, Secure, <em>Customized</em> Web Experiences.
        </h1>
        <p class="text-gray-400 px-4 md:max-w-lg mx-auto">{{ data?.description }}</p>
        <div class="flex justify-center mt-4 gap-8 mx-auto align-center w-100">
            <NuxtLink to="/about" class="primary">About</NuxtLink>
            <NuxtLink to="/contact" class="onlyLink">Contact</NuxtLink>
        </div>
    </div>

    <PagesLogoCarousel />

    <div class="max-w-[880px] mx-auto projects-pin">
        <div class="flex flex-wrap p-4  mt-16 relative">
            <div v-for="project in projects" :key="project.id">
                <div class="flex flex-col gap-4 w-full p-4 text-wrapper border-4 border-gray-700/45 bg-gray-950 rounded-lg absolute">
                    <h2 class="text-2xl font-medium">
                    {{ project.title }}
                    </h2>
                    <p class="mb-2">
                    {{ project.description }}
                    </p>
                    <hr>
                    <div class="flex flex-wrap gap-2 mt-4">
                        <div v-for="(stack, index) in project.tech" :key="stack.index">
                        <span class="bg-gray-800 text-gray-200 px-2 py-2 rounded-full font-normal">
                            {{ stack }}
                        </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>


</template>

