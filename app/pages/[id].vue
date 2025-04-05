<script setup lanf="ts">
    
    const route = useRoute();
    const slug = route.params.id;
    const { data: singlePost } = await useFetch(
    `https://maurodefalco.it/wp-json/wp/v2/posts?slug=${slug}`); 

</script>




<template>

<pre>
{{ singlePost }}
</pre>

    <PagesIntroContent>
        <template #title>{{ singlePost[0].title.rendered }}</template>
        <template #description>{{ singlePost[0].excerpt.rendered }}</template>
    </PagesIntroContent>

    <div class="container max-w-[1080px] mx-auto prose">
        {{ singlePost[0].content.rendered }}
    </div>
</template>