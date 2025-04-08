<script setup lang="ts">

import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    const items = gsap.utils.toArray('.projects-pin-item') as HTMLElement[];
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.projects-pin',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            pin: true,
            pinSpacing: true,
            markers: true,
        }
    })
    tl.to(items, {
        xPercent: -300,
        rotate: 25,
        ease: 'ease.inOut',
        stagger: {
        each: 2,
        ease: 'power1.inOut',
        },
    })
    if(items[3]) {
        tl.to(items[3], {
            rotate: 0,
            xPercent: 0,
            ease: 'power2.inOut',
        })
    }

})

const { data } = await useFetch<{ description?: string }>('https://maurodefalco.it/wp-json/', {
    method: 'GET',

});

const projects = [
    {
        id: 1,
        title: 'Anime Tracker',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        tech: ['Nuxt', 'Vue', 'Nuxt UI', 'PWA'],
        image: '/assets/AnimeTracker.png',
        url: 'https://animetracker.maurodefalco.it',
        github: 'https://github.com/maurodefalco/anime-tracker',
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
        id: 4,
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

    <div class="max-w-[880px] mx-auto projects-pin flex gap-4 relative min-h-[70vh] py-8 mt-[190px]">
        <div class="project-text max-w-sm mt-4">
            <h2 class="text-2xl md:text-3xl font-medium">Projects</h2>
            <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus libero cumque tempore laudantium iure labore quaerat nesciunt vel vitae nulla suscipit aliquam, alias totam quod quos eaque eius? Illum, veritatis!</p>
               <NuxtLink to="/projects" class="primary">Discover All</NuxtLink>
        </div>
        <ProjectCard :projects="projects" />
    </div>

   <PagesLogoCarousel class="mt-16" />


</template>

