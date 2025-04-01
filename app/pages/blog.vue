<script setup lang="ts">
 const { data: posts } = await useFetch('https://maurodefalco.it/wp-json/wp/v2/posts/');
</script>


<template>
  
    <PagesIntroContent>
        <template #title>Blog</template>
        <template #description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </template>
    </PagesIntroContent>

 
    <div v-if="posts" class="container max-w-[1080px] mx-auto grid grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.id" class="card" >
            <div class="card-body">
                <h2 class="card-title">{{ post.title.rendered }}</h2>
                <p class="card-text">{{ post.excerpt.rendered }}</p>
                <a :href="post.link" class="btn btn-primary">Read more</a>
            </div>
        </div>
    </div>
</template>