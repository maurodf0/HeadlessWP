<script setup lang="ts">

const { data } = await useFetch('https://maurodefalco.it/wp-json/', {
    method: 'GET',

});


</script>

<template>


    <div class="hero-wrapper text-center px-4 lg:px-10 max-w-[1080px] mx-auto py-16">
        <div class="rotate-25 bg-sky-600/95 w-1/3 h-[120px] filter blur-[160px] absolute mix-blend-screen -z-10 top-16 left-1/3">
        </div>
        <h1
            class="text-5xl md:text-7xl  mb-4 font-medium bg-gradient-to-t from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Fast, Secure, <em>Customized</em> Web Experiences.
        </h1>
        <p class="text-gray-400 max-w-lg mx-auto">{{ data.description }}</p>
        <div class="flex justify-center mt-4 gap-8 mx-auto align-center w-100">
            <NuxtLink to="/about" class="primary">About</NuxtLink>
            <NuxtLink to="/contact" class="onlyLink">Contact</NuxtLink>
        </div>
    </div>

    <PagesLogoCarousel />



</template>