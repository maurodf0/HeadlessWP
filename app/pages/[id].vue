<script setup lanf="ts">
    
    const route = useRoute();
    const slug = route.params.id;
    const { data: singlePosts } = await useFetch(`https://maurodefalco.it/wp-json/wp/v2/posts?slug=${slug}&_embed`);  
    
    const singlePost = singlePosts.value[0];
    const excerpt = singlePost.excerpt.rendered.substring(0, 155);


</script>

<template>

<pre>
    {{ singlePost }}
    </pre>

    <PagesIntroContent>
        <template #title>{{ singlePost.title.rendered }}</template>
        <template #description>
            <div v-html="excerpt"></div>
        </template>

    </PagesIntroContent>

    <div class="image-container max-w-[1080px] mx-auto">
        <img :src="singlePost._embedded['wp:featuredmedia'][0]?.source_url" alt="Post Image" class="mb-4 md:mb- p-4 rounded-lg w-full object-cover"> 
    </div>

    <div class="flex gap-4 md:gap-8 mt-4 justify-between items-center max-w-[1080px] mx-auto">
        <div class="author prose prose-invert">
          By:  {{ singlePost._embedded['author'][0].name }}
        </div>
        <div class="date prose prose-invert">
           Published on: {{ singlePost.date }}
        </div>
    </div>

    <div v-html="singlePost.content.rendered" class="max-w-[1080px] mx-auto !prose !prose-invert prose-xl p-4">
       
    </div>


</template>