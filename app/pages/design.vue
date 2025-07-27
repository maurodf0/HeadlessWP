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
  img: 'roberto_acampora_design.webp',
  description: 'Roberto Acampora è un designer freelancer. Abbiamo realizzato il progetto del suo sito web personale, con un design minimalista, moderno e animato, realizzato con Figma, sviluppato con WordPress e GSAP.',
  url: 'https://www.behance.net/gallery/170967091/-NEW-PERSONAL-WEBSITE-23-'
},
{
  id: 2,
  title: 'Grotta Romana',
  img: '/glide-ai.webp',
  description: 'Grotta Romana è un progetto realizzato con Figma, per il redesign del sito web di un ristorante di lusso. Il progetto ha come obiettivo quello di migliorare l\'esperienza utente con un design moderno e accattivante.',
  url: 'https://www.figma.com/design/DMyR8TJv2m8Af4hO4AJpWp/Grotta-Romana?node-id=0-1&t=qU3FDztlrdEvTfQp-1'
},
{
  id: 3,
  title: 'Grande Napoli Redesign',
  img: '/gn.webp',
  description: 'Grande Napoli Redesign è un progetto realizzato di Redesign di una tra le più grandi testate giornalistiche del sud. Il progetto è stato realizzato con Figma e ha come obiettivo quello di migliorare l\'esperienza utente e la fruizione dei contenuti e aummentare i guadagni tramite adv e publishing interno',
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


