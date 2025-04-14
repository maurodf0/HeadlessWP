<script setup lang="ts">
    interface Service {
      id: number;
      title: string;
      description: string;

    }

    const { services } = defineProps<{
        services: Service[];
    }>();
</script>

<template>
  
<div v-for="service in services" :key="service.id" 
     class="services-card animated-border flex flex-col gap-8 p-4 md:p-8 rounded-lg bg-gray-950 shadow-md ">
       
  <div class="max-w-md rounded-3xl p-px bg-gradient-to-b dark:from-blue-800 dark:to-purple-800 "></div>
  <div class="flex flex-col justify-between">
    <div class="flex flex-col gap-2">
      <h4 class="font-medium">{{ service.title }}</h4>
    </div>
    <span class="text-gray-400">{{ service.description }}</span>
  </div>
</div>

</template>