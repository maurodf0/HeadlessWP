<script setup lang="ts">
    const { data } = await useFetch('https://wp.maurodefalco.it/wp-json/');

    const isOpen = ref(false);

    interface Link {
        key: string;
        label: string;  
        url: string;
    }

    const links: Array<Link> = [
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
        key: 'design',
        label: 'Design',
        url: '/design',
    },
    
    ];

</script>

<template>

    <header class="p-4 md:p-6">
        <div
            class="rotate-25 bg-gradient-to-r from-sky-600/95 to-teal-600/95 max-w-[90%] w-full md:w-1/3 h-[120px] filter blur-[160px] absolute mix-blend-screen -z-10 top-16 left-3/3 md:left-3/3">
        </div>
        <div
            class="rotate-15 bg-gradient-to-r from-purple-600/65 to-blue-600/20 max-w-[100%] w-full md:w-1/2 h-[200px] filter blur-[180px] absolute mix-blend-screen top-20 right-11 glow-ball">
        </div>
        <nav aria-label="Main"
            class="flex flex-col mx-auto max-w-6xl justify-between py-2 md:flex-row md:items-center md:justify-between">
            <div class="flex items-center justify-between">
                <NuxtLink to="/" class="flex items-center" @click="isOpen = false">
                    <img src="/m-logo.png" alt="Logo" class="z-50 block invert logo w-20 h-20">
                    <div class="overflow-hidden">
                        <span class="block logo-name ml-2">Mauro De Falco</span>
                    </div>
                </NuxtLink>
                <button type="button" class="block md:hidden p-2 text-3xl text-white" :aria-expanded="isOpen"
                    aria-label="Open menu" @click="isOpen = true">
                    <Icon name="ph:list-bold" />
                </button>
            </div>

            <div class="md:hidden fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transition-transform duration-300 ease-in-out will-change-transform"
                :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
                <button :aria-expanded="isOpen" type="button" aria-label="Close menu"
                    class="block md:hidden p-2 text-3xl text-white" @click="isOpen = false">
                    <Icon name="ph:x-bold" />
                </button>

                <ul class="grid justify-items-end gap-6">
                    <li v-for="link in links" :key="link.key">
                        <NuxtLink @click="isOpen = false" :to="link.url"
                            class="min-h-11 px-3 text-3xl first:mt-8 text-white">{{ link.label }}</NuxtLink>
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

