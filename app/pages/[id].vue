<script setup lanf="ts">
    
    const route = useRoute();
    const slug = route.params.id;
    const { data: singlePosts } = await useFetch(`https://maurodefalco.it/wp-json/wp/v2/posts?slug=${slug}&_embed`);  
    
    const singlePost = singlePosts.value[0];
    const excerpt = singlePost.excerpt.rendered.substring(0, 155);

</script>

<template>

<!-- <pre>
    {{ singlePost }}
    </pre> -->

    <PagesIntroContent>
        <template #title>{{ singlePost.title.rendered }}</template>
        <template #description>
            <div v-html="excerpt"></div>
        </template>

    </PagesIntroContent>

    <article class="!max-w-[880px] mx-auto  prose !prose-invert p-4">

    <div class="image-container mx-auto">
        <img :src="singlePost._embedded['wp:featuredmedia'][0]?.source_url" alt="Post Image" class="mb-4 md:mb-rounded-lg w-full object-cover"> 
    </div>

    <div class="flex gap-4 md:gap-8 mt-4 justify-between items-center mx-auto">
        <div class="author prose prose-invert flex align-center gap-2">
            Written by: <img :src="singlePost._embedded['author'][0].avatar_urls['96']" class="rounded-full w-8 h-8 mt-0">
          {{ singlePost._embedded['author'][0].name }}
        </div>
        <div class="date prose prose-invert">
           Published on: {{ singlePost.date }}
        </div>
    </div>

    <div v-html="singlePost.content.rendered" class="mx-auto">
       
    </div>

    <div class="artile-meta mt-6 flex gap-4 justify-between items-center mx-auto">
        <div class="categories flex gap-2 flex-wrap">
            <span v-for="category in singlePost._embedded['wp:term'][0]" :key="category.id" class="category bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                <NuxtLink :to="`/category/${category.slug}`">{{ category.name }}</NuxtLink>
            </span>
        </div>

    </div>
</article>

</template>