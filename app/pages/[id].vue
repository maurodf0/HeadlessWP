<script setup lanf="ts">
    
    const route = useRoute();
    const slug = route.params.id;
    const { data: singlePost } = await useFetch<any>(
    `https://maurodefalco.it/wp-json/wp/v2/posts/${slug}?_embed`); 
</script>

<template>
    <PagesIntroContent>
        <template #title>Single Blog Post</template>
        <template #description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </template>
    </PagesIntroContent>
</template>