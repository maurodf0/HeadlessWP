<script setup lang="ts">
 const { data: posts } = await useFetch<any>(
    'https://maurodefalco.it/wp-json/wp/v2/posts?_embed');
</script>


<template>
  
    <PagesIntroContent>
        <template #title>Blog</template>
        <template #description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </template>
    </PagesIntroContent>
 
    <div v-if="posts" class="container max-w-[1080px] p-4 mx-auto grid md:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.id" class="card bg-gray-950 py-4 border border-opacity-45 border-neutral-700 px-4 rounded-lg" >
            <div class="card-body overflow-hidden">
              <img
                v-if="post._embedded?.['wp:featuredmedia']?.[0]?.source_url" 
                :src="post._embedded?.['wp:featuredmedia']?.[0]?.source_url" alt="Post Image" class="mb-4 rounded-lg w-full h-48 object-cover">
            <div v-else class="mb-4 rounded-lg w-full h-48 bg-gray-800"></div>
                <h2 class="text-xl font-medium mb-2 card-title">{{ post.title.rendered }}</h2>
                <p v-html="post.excerpt.rendered.substring(0, 150)" class="mb-4 card-text"></p>
                <a :href="post.slug" class="btn btn-primary">Read more</a>
            </div>
        </div>
    </div>
</template>