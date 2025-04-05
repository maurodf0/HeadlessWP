<script setup lanf="ts">
    
    const route = useRoute();
    const slug = route.params.id;
    const { data: singlePost } = await useFetch(`https://maurodefalco.it/wp-json/wp/v2/posts?slug=${slug}`);  
    const imageFetchUrl = singlePost[0]?.['wp:featuredmedia'][0]?.href;

    console.log(singlePost[0]);

    //const { data: imageData } = await useFetch(imageFetchUrl);

</script>




<template>

{{ imageData }}
{{ imageFetchUrl }}

    <PagesIntroContent>
        <template #title>{{ singlePost[0].title.rendered }}</template>
        <template #description>{{ singlePost[0].excerpt.rendered }}</template>
    </PagesIntroContent>

    <img :src="imageUrl" alt="Post Image" class="mb-4 rounded-lg w-full h-48 object-cover">

    <div class="container max-w-[1080px] mx-auto prose prose-inver">
        {{ singlePost[0].content.rendered }}
    </div>

    <pre>
{{ singlePost }}
</pre>
</template>