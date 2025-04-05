<script setup lanf="ts">
    
    const route = useRoute();
    const slug = route.params.id;
    const { data: singlePost } = await useFetch(`https://maurodefalco.it/wp-json/wp/v2/posts?slug=${slug}`);  
    const { data: imageData } = await useFetch(`https://maurodefalco.it/wp-json/wp/v2/media/${singlePost.value[0].featured_media}`);

    console.log(imageData.value);
    const excerpt = singlePost.value[0].excerpt.rendered.substring(0, 155);


</script>




<template>

    <PagesIntroContent>
        <template #title>{{ singlePost[0].title.rendered }}</template>
        <template #description>
            <div v-html="excerpt"></div>
        </template>

    </PagesIntroContent>

    <div class="image-container max-w-[1080px] mx-auto">
        <img :src="imageData.source_url" alt="Post Image" class="mb-16 rounded-lg w-full border-lg object-cover">
    </div>

    <div v-html="singlePost[0].content.rendered" class="max-w-[1080px] mx-auto !prose !prose-invert">
       
    </div>


</template>