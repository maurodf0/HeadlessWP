<script setup lang="ts">

const { data } = await useFetch('https://maurodefalco.it/wp-json/', {
    method: 'GET',

});


</script>

<template>
    <div class="hero-wrapper py-8 text-center px-4 lg:px-10 max-w-[1080px] mx-auto py-8">
        <div class=" bg-sky-700/85 w-1/3 h-[120px] filter blur-[120px] absolute mix-blend-screen  -z-10 top-4 left-1/2">
        </div>
        <h1
            class="text-5xl md:text-7xl  mb-4 font-medium bg-gradient-to-t from-gray-300 to-gray-100 bg-clip-text text-transparent">
            {{ data.name }}
        </h1>
        <p class="text-gray-400 max-w-lg mx-auto">{{ data.description }}</p>
    </div>


</template>