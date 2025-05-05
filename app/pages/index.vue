<script setup lang="ts">


const { isHomeView } = UseHomeView()

useSeoMeta({
    title: 'Mauro De Falco | Frontend Developer',
    description: 'Web developer con esperienza nello sviluppo di siti e app web ad alto impatto visivo e funzionale, con una forte attenzione ai dettagli visivi e al design.',
});

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
        duration: .5,
        ease: 'power3.inOut',
    },'-=.25')
    .from('.p-level', {
        y: 20,
        opacity: 0,
        duration: .35,
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
            amount: .75,
            from: 'start',
            ease: 'power3.inOut',
        },
    }, '-=.5')

  const isMobile: boolean = window.innerWidth < 768;
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.projects-pin',
    start: isMobile ? '+=270px top' : 'top +=100px',
    end: isMobile ? `+=${(items.length - 1) * 1400}` : `+=${(items.length - 1) * 800}`,
    scrub: true,
    pin: true,
    pinSpacing: true,
    //markers: true,
  }
});

items.forEach((item, index) => {
    if(index === 0) return;
  tl.fromTo(item, {
    yPercent: 50,
    opacity: 0,
    rotateY: 45,
    rotateX: 15,
    zIndex: 10 * (index + 1),
    z: 200,
    scale: 0.5,
  }, {
    zIndex: 10 * (index + 1),
    yPercent: 0,
    opacity: 1,
    rotateY: 0,
    rotateX: 0,
    z: 0,
    ease: 'power3.out',
    scale: 1,
  });
});




})


interface SingleProject {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image?: string;
    url?: string;
    github?: string;
}

const projects: Array<SingleProject> = [
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
        tech: ['Nuxt', 'Vue', 'Prismic', 'GSAP', 'Lenis'],
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
        image: '/SingleUserContentPlugin.webp',
        url: 'https://it.wordpress.org/plugins/single-user-content/',
        github: 'https://github.com/maurodf0/wpsuc'
    },
]

interface SingleService {
    id: number;
    icon: string;
    title: string;
    description: string;
}
const services: Array<SingleService> = [
    {
        id: 1,
        icon: 'material-symbols-developer-mode-tv',
        title: 'Creative Developer',
        description: 'Realizzo siti e app web ad alto impatto visivo e funzionale, con una forte attenzione ai dettagli.',
    },
    {
        id: 2,
        icon: 'material-symbols-shopping-bag-speed',
        title: 'Ecommerce Developer',
        description: 'Dai un boost alle tue vendite con un\'eperienza ecommerce personalizzata per il tuo brand e i tuoi prodotti.',
    },
    {
        id: 3,
        icon: 'ri-figma-fill',
        title: 'UI/UX Designer',
        description: 'Realizzo esperienze di design e interazione utente intuitive e coinvolgenti.',

    },
    {
        id: 4,
        icon: 'ri-seo-fill',
        title: 'SEO Specialist',
        description: 'Il tuo business non è online se non si fa trovare, attrai i tuoi clienti con un approccio SEO.',
    },
]

console.log(isHomeView.value)
</script>

<template>
    <div class="home-wrapper">
        

    <AppLoader :loading="loading" />

    <div class="hero-wrapper text-center px-4 lg:px-10 max-w-[90%] md:max-w-[1080px] mx-auto py-6 md:py-16">
        <div
            class="glow-effect rotate-25 bg-gradient-to-r from-sky-600/95 to-teal-600/95 w-1/2  h-[120px] filter blur-[160px] absolute mix-blend-screen -z-10 top-16 left-3/3 md:left-1/3">
        </div>
        <div
            class="rotate-15 bg-gradient-to-r from-purple-600/65 to-blue-600/20 w-full md:w-1/2 h-[200px] filter blur-[180px] absolute mix-blend-screen top-20 right-11 glow-ball">
        </div>

        <div class="overflow-hidden">
            <h1
                class="heading-level text-5xl md:text-7xl  mb-4 font-medium bg-gradient-to-t from-gray-300 to-gray-100 bg-clip-text text-transparent">
                Fast, Secure, <em>Customized</em> Web Experiences.
            </h1>
        </div>
        <div class="overflow-hidden">
            <p class="text-gray-400 px-4 md:max-w-lg mx-auto p-level">Front-end Developer specializzato in WordPress, Vue e Nuxt.</p>
        </div>
        <div class="flex justify-center mt-4 gap-8 mx-auto align-center w-100">
            <NuxtLink to="/about" class="primary cta-link">About</NuxtLink>
            <NuxtLink to="#contact" class="onlyLink cta-link">Contact</NuxtLink>
        </div>
    </div>
    <LazyPagesLogoCarousel />

    <div
        class="max-w-[90%] md:max-w-[880px] mx-auto projects-pin flex gap-4 p-4 relative min-h-[85vh] md:min-h-[100vh] py-10 md:py-6 mt-[60px] md:mt-[190px]">
        <div class="project-text max-w-sm mt-4">
            <h2 class="text-2xl md:text-3xl font-medium">Projects</h2>
            <p class="mt-4">Una lista di alcuni progetti realizzati con le tecnologie e framework che più amo. Naviga il
                codice su Github oppure scopri il sito/app live.</p>
            <NuxtLink to="/projects" class="primary relative z-[100]">Scopri i progetti</NuxtLink>
        </div>
        <LazyProjectCard :projects="projects" />
    </div>


    <div class="services-container max-w-[90%] md:max-w-[1080px] mx-auto mt-72 md:mt-16 relative px-4">
        <div
            class="glow-effect rotate-25 bg-gradient-to-r from-sky-600/95 to-teal-600/95 w-1/2  h-[120px] filter blur-[160px] absolute  -z-10 top-16 left-3/3 md:left-1/3">
        </div>
        <h2 class="text-2xl md:text-3xl font-medium px-4">Servizi</h2>
        <div class="grid md:grid-cols-3 gap-8 px-4 md:px-0 mt-8">
            <LazyServicesCard :services="services" />
        </div>
    </div>

    <div class="mt-16 mx-auto max-w-[90%] md:max-w-[1080px]">
        <LazyPagesFinalCta />
    </div>
    </div>
</template>
