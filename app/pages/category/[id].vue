<script setup lang="ts">
    const route = useRoute();
    const slug = route.params.id;

    const { data: singleCategoryData } = await useFetch<any>(`https://maurodefalco.it/wp-json/wp/v2/categories?slug=${slug}&_embed`);
    const singleCategory = singleCategoryData.value[0];
</script>

<template>
    <PagesIntroContent>
        <template #title>Category: {{ singleCategory.name }}</template>
        <template #description>
            <div v-html="singleCategory.description"></div>
        </template>
    </PagesIntroContent>


</template>