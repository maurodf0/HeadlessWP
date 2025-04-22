<script setup lang="ts">
    interface Service {
      id: number;
      icon: string;
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
class="services-card z-10 flex flex-col gap-8 p-4 md:p-8 rounded-lg bg-gray-950 hover:scale-105 hover:rotate-3 transition-all border-2 border-gray-100/15 hover:border-sky-400 relative" >
    <div class="flex flex-col justify-between">
      <Icon class="mb-2" relative :name="service.icon" size="xl" />     
        <h4 class="font-medium mb-4">{{ service.title }}</h4>
      <span class="text-gray-400">{{ service.description }}</span>
    </div>
  </div>


</template>