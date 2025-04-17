<script setup lang="ts">
    interface Service {
      id: number;
      title: string;
      description: string;

    }

    const { services } = defineProps<{
        services: Service[];
    }>();

    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);


</script>

<template>
  

<div v-for="service in services" :key="service.id" 
class="services-card flex flex-col gap-8 p-4 md:p-8 rounded-lg bg-gray-950 hover:scale-105 hover:rotate-3 transition-all hover:border hover:border-sky-400 relative" >
<div class="absolute inset-0 z-20 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"></div>

    <div class="flex flex-col justify-between">
        <h4 class="font-medium mb-4">{{ service.title }}</h4>
      <span class="text-gray-400">{{ service.description }}</span>
    </div>
  </div>


</template>