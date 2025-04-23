<script setup lang="ts">
const route = useRoute();

interface WpAboutPage {
    id: number,
    title: {rendered: string},
    content: {rendered: string}
}

 const { data: AboutPage } = await useFetch<WpAboutPage>(`https://wp.maurodefalco.it/wp-json/wp/v2/pages?slug=about-me&_embed`);
    const SingleAboutPage = AboutPage.value[0];
</script>

<template>
<div class="max-w-[1080px] flex-col md:flex-row mx-auto flex gap-2 items-center justify-center">
    <PagesIntroContent>
        <template #title>{{ SingleAboutPage.title.rendered }}</template>
        <template #description>
           <div class="prose prose-invert max-w-[1080px] mx-auto">
                <p v-html="SingleAboutPage.content.rendered"></p>
            </div>
        </template>
    </PagesIntroContent>
    <img src="/m-logo.png" alt="Hero Image" class="opacity-30 w-1/2 h-auto invert">
</div>
</template>