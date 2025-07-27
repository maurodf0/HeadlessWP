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
  title: 'Roberto Acampora',
  img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/31cad2170967091.6466973cbd5df.png',
  description: 'Roberto Acampora è un designer freelancer. Abbiamo realizzato il progetto del suo sito web personale, con un design minimalista e moderno, realizzato con Figma, sviluppato con WordPress e GSAP.',
  url: 'https://www.behance.net/gallery/170967091/-NEW-PERSONAL-WEBSITE-23-'
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
  title: 'Grande Napoli Redesign',
  img: '/ringston.webp',
  description: 'Ringston è una landing page interattiva realizzata con HTML, CSS e JavaScript, che sfrutta le librerie GSAP, SplitType e Three.js per animazioni avanzate e grafica 3D',
    url: 'https://www.figma.com/design/un0W2XRbjwKOEMaj2zfPiR/Grandenapoli.it?node-id=0-1&t=MWfBI5ucdx6OC0L0-1'
},
{
  id: 4,
  title: 'Ammaccam',
  img: '/SingleUserContentPlugin.webp',
  description: 'WPSUC è un plugin WordPress che permette di creare contenuti privati visibili solo da un singolo utente registrato, tramite un custom post type.',
    url: 'https://www.behance.net/gallery/158201457/Ammaccamm-Website'
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


