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

    onMounted(() => {

 const services = gsap.utils.toArray('.services-card') as HTMLElement[];
            const ServiceTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.services-container',
                start: '-=500px top',
                end: '500px bottom',
                scrub: 1,
                markers : true,
            }
    })

   
        services.forEach((el, index) => {
            ServiceTl.from(el, {
                opacity: 0,
                duration: 1,
                y: 100,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.2,
                    from: 'start',
                    ease: 'power3.inOut',
                },
            });

        
      })
    })


</script>

<template>
  

<div v-for="service in services" :key="service.id" 
class="services-card z-10 flex flex-col gap-8 p-4 md:p-8 rounded-lg bg-gray-950 hover:scale-105 hover:rotate-3 transition-all hover:border hover:border-sky-400 relative" >
    <div class="flex flex-col justify-between">
      <Icon class="mb-2" relative :name="service.icon" size="xl" />     
        <h4 class="font-medium mb-4">{{ service.title }}</h4>
      <span class="text-gray-400">{{ service.description }}</span>
    </div>
  </div>


</template>