<script setup lang="ts">

interface DesignProject {
  id: number;
  title: string,
  img: string,
  description: string,
  url: string
}

const designprojects = <DesignProject[]>[
{
  id: 1,
  title: 'Anime Tracker',
  img: '/AnimeTracker.png',
  description: 'Anime Tracker è una web app in Vue, Nuxt e Tailwind CSS per tenere traccia degli anime visti o da vedere, con salvataggio dati in localStorage e gestione dello stato via composables.',
  url: ''
},
{
  id: 2,
  title: 'Glide AI',
  img: '/glide-ai.webp',
  description: 'Glide AI è una landing page moderna sviluppata con Nuxt in architettura headless tramite Prismic CMS, che sfrutta le librerie GSAP e Lenis per animazioni avanzate',
  url: ''
},
{
  id: 3,
  title: 'Ringston',
  img: '/ringston.webp',
  description: 'Ringston è una landing page interattiva realizzata con HTML, CSS e JavaScript, che sfrutta le librerie GSAP, SplitType e Three.js per animazioni avanzate e grafica 3D',
    url: ''
},
{
  id: 4,
  title: 'Single User Content',
  img: '/SingleUserContentPlugin.webp',
  description: 'WPSUC è un plugin WordPress che permette di creare contenuti privati visibili solo da un singolo utente registrato, tramite un custom post type.',
    url: ''
}]  
</script>

<template>

<PagesIntroContent>
        <template #title>Design</template>
        <template #description>Tutti i progetti realizzati con Figma di UI/UX</template>
    </PagesIntroContent>

    <div class="container max-w-[1080px] p-4 mx-auto">
     <ul class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <li v-for="repo in designprojects"
          class="flex flex-col gap-8 p-4 md:p-8 rounded-lg bg-gray-950 hover:scale-105 border-2 border-gray-900 hover:rotate-3 transition-all hover:border hover:border-sky-400 relative"
          :key="repo.id">
          <a :href="repo.url" target="_blank">
            <div class="img-wrapper">
              <img :src="repo.img" alt="" class="w-full h-full object-cover rounded-lg mb-5" />
            </div>
            <div class="text-sm">
              <div class="font-semibold">{{ repo.title }}</div>
              <p class="text-sm mb-0" >{{ repo.description }}</p>
            </div>
   
            
         </a>
        </li>
      </ul>
    </div>
</template>


