<script setup lang="ts">

interface WpPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded: {
    'wp:featuredmedia': Array<{
      source_url: string;
    }>;
    author: Array<{
      name: string;
      avatar_urls: { [key: string]: string };
    }>;
    'wp:term': Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

    
    const route = useRoute();
    const slug = route.params.id as string;
    const { data: singlePosts, loading, error } = await useFetch<WpPost[]>(`https://wp.maurodefalco.it/wp-json/wp/v2/posts?slug=${slug}&_embed`); 

if (!singlePosts.value[0]) {
      console.error('Error fetching post:', error);
      throw createError({ statusCode: 404})
    }
    console.log('Single post data:', singlePosts.value);
    const singlePost = singlePosts.value?.[0];
    const excerpt = singlePost?.excerpt.rendered;

    useSeoMeta({
      title: singlePost?.title.rendered,
      description: singlePost?.excerpt.rendered,
    }
    )

</script>

<template>

  <div class="single-wrapper">
    <PagesIntroContent length="max-w-full">
      <template #title>{{ singlePost?.title.rendered }}</template>
      <template #description>
        <em>
          <div v-html="excerpt"></div>
        </em>
      </template>
    </PagesIntroContent>

    <article class="!max-w-[880px] mx-auto prose !prose-invert p-4">

      <div class="image-container mx-auto">
        <img v-if="singlePost?._embedded['wp:featuredmedia']"
          :src="singlePost?._embedded['wp:featuredmedia'][0]?.source_url" alt="Post Image"
          class="mb-4 md:rounded-lg w-full object-cover">
      </div>

      <div class="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 justify-between items-center mx-auto">
        <div class="author prose prose-invert flex align-center gap-2">
          Written by: <img :src="singlePost?._embedded?.['author'][0]?.avatar_urls['96']"
            class="rounded-full w-8 h-8 mt-0">
          {{ singlePost?._embedded?.['author'][0]?.name }}
        </div>
        <div class="date prose prose-invert">
          Published on: {{ new Date(singlePost?.date).toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day:
          'numeric' }) }}
        </div>
      </div>

      <div v-html="singlePost?.content.rendered" class="mx-auto">

      </div>
    </article>

    <div class="artile-meta mt-6 max-w-[880px] mx-auto flex gap-4 justify-between items-center px-4 mb-8">
      Tagged in: <div class="categories flex gap-6 md:gap-2 flex-wrap">
        <NuxtLink v-for="category in singlePost?._embedded?.['wp:term'][0]" :key="category.id"
          :to="`/category/${category.slug}`" class="text-decoration-none">
          <span class="category bg-gray-800 text-gray-200 px-4 py-2 rounded-full hover:bg-sky-400/95 font-normal">
            {{ category.name }}
          </span>
        </NuxtLink>
      </div>

    </div>
  </div>
</template>