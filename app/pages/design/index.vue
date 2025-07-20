<script setup lang="ts">

interface DesignProject {
  id: number;
  title: string,
  img: string,
  description: string,
}

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

<PagesIntroContent>
        <template #title>Design</template>
        <template #description>Tutti i progetti realizzati con Figma di UI/UX</template>
    </PagesIntroContent>

    <div class="container max-w-[1080px] p-4 mx-auto">
       
  <ul>
    <li v-for="project in designprojects" :key="project.id">
      <NuxtLink :to="`/design/${project.id}`">
        <div class="flex gap-4 items-center">
          <img :src="project.img" class="w-16 h-16 rounded-full" />
          <div class="flex flex-col">
            <div class="text-2xl font-medium">{{ project.title }}</div>
            <div class="text-sm text-gray-400">{{ project.description }}</div>
          </div>
        </div>
      </NuxtLink>
      </li>
  </ul>
    </div>
</template>