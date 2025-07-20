<script setup lang="ts">



 const route = useRoute();
 const slug = route.params.id as string;

 const designprojects = <DesignProject[]>[
{
  id: 1,
  title: 'Anime Tracker',
  img: '/AnimeTracker.png',
  description: 'Anime Tracker è una web app in Vue, Nuxt e Tailwind CSS per tenere traccia degli anime visti o da vedere, con salvataggio dati in localStorage e gestione dello stato via composables.',
},
{
  id: 2,
  title: 'Glide AI',
  img: '/glide-ai.webp',
  description: 'Glide AI è una landing page moderna sviluppata con Nuxt in architettura headless tramite Prismic CMS, che sfrutta le librerie GSAP e Lenis per animazioni avanzate',
},
{
  id: 3,
  title: 'Ringston',
  img: '/ringston.webp',
  description: 'Ringston è una landing page interattiva realizzata con HTML, CSS e JavaScript, che sfrutta le librerie GSAP, SplitType e Three.js per animazioni avanzate e grafica 3D',
},
{
  id: 4,
  title: 'Single User Content',
  img: '/SingleUserContentPlugin.webp',
  description: 'WPSUC è un plugin WordPress che permette di creare contenuti privati visibili solo da un singolo utente registrato, tramite un custom post type.',
}]  


</script>

<template>
  <div class="container max-w-[1080px] p-4 mx-auto">
    <div class="flex gap-4 items-center">
      <img :src="designprojects.find(p => p.id === parseInt(slug))?.img" class="w-16 h-16 rounded-full" />
      <div class="flex flex-col">
        <div class="text-2xl font-medium">{{ designprojects.find(p => p.id === parseInt(slug))?.title }}</div>
        <div class="text-sm text-gray-400">{{ designprojects.find(p => p.id === parseInt(slug))?.description }}</div>
      </div>
    </div>
  </div>
</template>