<script setup lang="ts">

import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const loading = ref('000') // inizializza come stringa padded

function zeroPad(num: number, places: number): string {
  return String(num).padStart(places, '0')
}

onMounted(() => {
  
  let obj = { value: 0 }

  const navLinks = gsap.utils.toArray('nav a') as HTMLElement[];
    const items = gsap.utils.toArray('.projects-pin-item') as HTMLElement[];
    const logoStack = gsap.utils.toArray('.logo-img-stack') as HTMLElement[];

  const tlOpener = gsap.timeline();
  tlOpener.to(obj, {
    value: 100,
    duration: 1.5,
    ease: 'power3.inOut',
    onUpdate: () => {
      loading.value = zeroPad(Math.round(obj.value), 3)
    },
  })
  .to('.logo-loader', {
    duration: .35,
    ease: 'power3.inOut',
    scale: .25,
    opacity: 0
  })
  .to('.app-loader', {
    duration: .75,
    ease: 'power3.inOut',
    transform: 'translateY(-110%)',
  }, '<')
  .to('.app-loader-1', {
     duration: 1.25,
    ease: 'power3.inOut',
    transform: 'translateY(-100%)',
  },'<')
  .to('.app-loader-2', {
     duration: 1.05,
    ease: 'power3.inOut',
    transform: 'translateY(-100%)',
 onComplete: () => {
    const wrapper = document.querySelector('.app-loader-wrapper')
    if (wrapper) wrapper.remove()
  }
},'<')
       .from('.glow-effect', { 
        scale: .5,
        duration: .25,
        ease: 'power3.inOut',
        opacity: 0,
     }, '<')
    .from('.heading-level', {
        y: 50,
        opacity: 0,
        duration: .75,
        ease: 'power3.inOut',
    },'-=.25')
    .from('.p-level', {
        y: 20,
        opacity: 0,
        duration: .5,
        ease: 'power3.inOut',
    })
    .from('.cta-link', {
        y: 20,
        opacity: 0,
        duration: .5,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.2,
            ease: 'power3.inOut',
        },
    })
    .from('.logo', {
        y: -30,
        rotate: 0,
        duration: .5,
        ease: 'power3.inOut',
    }, '-=.5')
    .from('.logo-name', {
        xPercent: -50,
        rotate: 0,
        duration: .5,
        ease: 'power3.inOut',
    })
     .from('nav a', {
        opacity: 0,
        duration: .5,
        stagger: {
            amount: 0.25,
            ease: 'power2.inOut',
        },
    }, '-=.5')
    .from('.logo-img-stack', {
        y: 30,
        rotate: 0,
        opacity: 0,
        duration: .5,
        ease: 'power3.inOut',
        stagger: {
            amount: 1,
            from: 'start',
            ease: 'power3.inOut',
        },
    }, '-=.5')

    const isMobile:boolean = window.innerWidth < 768;
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.projects-pin',
            start: isMobile ? '+=230px top' : 'top +=100px',
            end: 'bottom top',
            scrub: true,
            pin: true,
            pinSpacing: true,
            markers: true,
        }
    })
    tl.to(items, {
        xPercent: -350,
        rotate: 25,
        ease: 'ease.inOut',
        stagger: {
        each: 2,
        ease: 'power1.inOut',
        },
    })
    if(items[3]) {
        tl.to(items[3], {
            rotate: 0,
            xPercent: 0,
            ease: 'power2.inOut',
        })
    }

})

const { data } = await useFetch<{ description?: string }>('https://maurodefalco.it/wp-json/', {
    method: 'GET',

});

const projects = [
    {
        id: 1,
        title: 'Anime Tracker',
        description: 'Anime Tracker è una web app in Vue, Nuxt e Tailwind CSS per tenere traccia degli anime visti o da vedere, con salvataggio dati in localStorage e gestione dello stato via composables.',
        tech: ['Nuxt', 'Vue', 'Nuxt UI', 'PWA'],
        image: '/AnimeTracker.png',
        url: 'https://anime-tracker-delta.vercel.app/',
        github: 'https://github.com/maurodf0/anime-tracker',
    },
    {
        id: 2,
        title: 'Glide AI',
        description: 'Glide AI è una landing page moderna sviluppata con Nuxt in architettura headless tramite Prismic CMS, che sfrutta le librerie GSAP e Lenis per animazioni avanzate',
        tech: ['Nuxt', 'Vue', 'Prismic'],
        image: '/glide-ai.webp',
        url: 'https://glide-ai-maurodf0.nuxt.dev/',
        github: 'https://github.com/maurodf0/glide-ai'
    },
    {
        id: 3,
        title: 'Ringston',
        description: 'Ringston è una landing page interattiva realizzata con HTML, CSS e JavaScript, che sfrutta le librerie GSAP, SplitType e Three.js per animazioni avanzate e grafica 3D',
        tech: ['GSAP', 'Three.js', 'Lenis'],
        image: '/ringston.webp',
        url: 'https://ringston-khaki.vercel.app/',
        github: 'https://github.com/maurodf0/ringston'
    },
    {
        id: 4,
        title: 'Single User Content',
        description: 'WPSUC è un plugin WordPress che permette di creare contenuti privati visibili solo da un singolo utente registrato, tramite un custom post type.',
        tech: ['Php', 'WordPress'],
        image: '/single-user-content.webp',
        url: 'https://it.wordpress.org/plugins/single-user-content/',
        github: 'https://github.com/maurodf0/wpsuc'
    },
]


</script>

<template>

    <AppLoader :loading="loading" />

    <div class="hero-wrapper text-center px-4 lg:px-10 max-w-[90%] md:max-w-[1080px] mx-auto py-6 md:py-16">
        <div class="glow-effect rotate-25 bg-gradient-to-r from-sky-600/95 to-teal-600/95 w-1/2 md:w-full h-[120px] filter blur-[160px] absolute mix-blend-screen -z-10 top-16 left-3/3 md:left-1/3"></div>
          <div class="rotate-15 bg-gradient-to-r from-purple-600/65 to-blue-600/20 w-full md:w-1/2 h-[200px] filter blur-[180px] absolute mix-blend-screen top-20 right-11 glow-ball"></div>

        <div class="overflow-hidden">
            <h1
                class="heading-level text-5xl md:text-7xl  mb-4 font-medium bg-gradient-to-t from-gray-300 to-gray-100 bg-clip-text text-transparent">
                Fast, Secure, <em>Customized</em> Web Experiences.
            </h1>
        </div>
         <div class="overflow-hidden">
            <p class="text-gray-400 px-4 md:max-w-lg mx-auto p-level">{{ data?.description }}</p>
        </div>
        <div class="flex justify-center mt-4 gap-8 mx-auto align-center w-100">
            <NuxtLink to="/about" class="primary cta-link">About</NuxtLink>
            <NuxtLink to="/contact" class="onlyLink cta-link">Contact</NuxtLink>
        </div>
    </div>
    <PagesLogoCarousel />

    <div class="max-w-[90%] md:max-w-[880px] mx-auto projects-pin flex gap-4 p-4 relative min-h-[70vh] py-8 mt-[60px] md:mt-[190px]">
        <div class="project-text max-w-sm mt-4">
            <h2 class="text-2xl md:text-3xl font-medium">Projects</h2>
            <p class="mt-4">Una lista di alcuni progetti realizzati da con le tecnologie e framework utilizzati. Naviga il codice su Github oppure scopri il sito/app live.</p>
               <NuxtLink to="/projects" class="primary">Discover All</NuxtLink>
        </div>
        <ProjectCard :projects="projects" />
    </div>

   <PagesLogoCarousel class="mt-16" />


</template>