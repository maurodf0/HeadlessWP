<script setup lang="ts">
    const { data } = await useFetch('https://maurodefalco.it/wp-json/');

    const isOpen = ref(false);
    const links = [
    {
        key: 'about',
        label: 'About',
        url: '/about',
    },
    {
        key: 'blog',
        label: 'Blog',
        url: '/blog',
    },
    {
        key: 'projects',
        label: 'Projects',
        url: '/projects',
    },
    {
        key: 'contact',
        label: 'Contact',
        url: '/contact',
    }]

</script>

<template>

    <header class="p-4 md:p-6">
        <nav aria-label="Main"
            class="flex flex-col mx-auto max-w-6xl justify-between py-2 md:flex-row md:items-center md:justify-between">
            <div class="flex items-center justify-between">
                <NuxtLink to="/" class="flex items-center z-50" @click="isOpen = false">
                    {{ data.name }}
                </NuxtLink>
                <button class="block md:hidden p-2 text-3xl" :aria-expanded="isOpen" @click="isOpen = true">
                    <Icon name="ph:list-bold" />
                </button>
            </div>

            <div class="md:hidden fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transition-transform duration-300 ease-in-out will-change-transform"
                :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
                <button @click="isOpen = false" class="block p-2 text-3xl">
                    <Icon name="ph:x-bold" />
                </button>

                <ul class="grid justify-items-end gap-6">
                    <li v-for="link in links" :key="link.key">
                        <NuxtLink :to="link.url" class="min-h-11 px-3 text-3xl first:mt-8 text-white"></NuxtLink>
                    </li>
                </ul>
            </div>

            <ul class="hidden md:flex items-center gap-6">
                <li v-for="link in links" :key="link.key">
                    <NuxtLink :to="link.url" class="min-h-11 px-3 font-medium text-white">{{ link.label }}</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>