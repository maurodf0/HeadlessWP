<script setup lanf="ts">
    
    const route = useRoute();
    const slug = route.params.id;
    const { data: singlePost } = await useFetch(`https://maurodefalco.it/wp-json/wp/v2/posts?slug=${slug}`);  
    const { data: imageData } = await useFetch(`https://maurodefalco.it/wp-json/wp/v2/media/${singlePost.value[0].featured_media}`);

    console.log(imageData.value);


</script>




<template>

    <PagesIntroContent>
        <template #title>{{ singlePost[0].title.rendered }}</template>
        <template length="max-w-2xl" #description>{{ singlePost[0].excerpt.rendered }}</template>
    </PagesIntroContent>

    <div class="image-container max-w-[1080px] mx-auto">
        <img :src="imageData.source_url" alt="Post Image" class="mb-16 rounded-lg w-full border-lg object-cover">
    </div>

    <div class="container max-w-[1080px] p-4 mx-auto prose prose-inver">
        {{ singlePost[0].content.rendered }}
    </div>


</template>