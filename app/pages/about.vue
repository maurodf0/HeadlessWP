<script setup lang="ts">
const route = useRoute();

 const { data: AboutPage } = await useFetch<any>(`https://maurodefalco.it/wp-json/wp/v2/pages?slug=about-me&_embed`);
    const SingleAboutPage = AboutPage.value[0];
</script>

<template>
    <PagesIntroContent>
        <template #title>{{ SingleAboutPage.title.rendered }}</template>
        <template #description>
           <div class="prose prose-invert max-w-[1080px] mx-auto">
                <p v-html="SingleAboutPage.content.rendered"></p>
            </div>
        </template>
    </PagesIntroContent>

    
</template>