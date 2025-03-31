<script setup lang="ts">

const { data } = await useFetch('https://maurodefalco.it/wp-json/', {
    method: 'GET',

});


</script>

<template>
    <div class="hero-wrapper py-4 text-center">
        <h1 class="text-5xl font-medium bg-gradient-to-t from-gray-300 to-gray-100 bg-clip-text text-transparent">
            {{ data.name }}
        </h1>
        <p>{{ data.description }}</p>
    </div>

   
</template>