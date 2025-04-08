<script setup lang="ts">
interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image?: string;
    url?: string;
    github?: string;
}

const props = defineProps<{
  projects: Project[]
}>();
</script>

<template>
            <div class=" bg-gray-950 flex flex-col p-4 mt-20 relative">
            <div 
                v-for="(project, index) in props.projects" 
                :key="project.id"
                :style="{
                    transform: `translate(${index * +10}px, ${index * -10}px)`,
                    zIndex: projects.length - index,

                }"
                class="hover:border-sky-400/45 max-w-[480px] left-1/3 mx-auto absolute transition-all projects-pin-item top-10 flex flex-col gap-4 w-full p-6 text-wrapper border-4 border-gray-100/15 bg-gray-950 rounded-lg shadow-lg duration-300 ease-in-out"
            >
            <NuxtLink :to="project.url">
                <div class="mb-4 rounded-lg w-full h-48 bg-gray-800">
                    <img :src="project.image" alt="Project Image" class="w-full h-full object-cover rounded-lg">
                </div>
            </NuxtLink>
                <h2 class="text-2xl font-medium">{{ project.title }}</h2>
                <p class="mb-2">{{ project.description }}</p>
                <hr class="border-gray-700">
                <div class="flex flex-wrap gap-2 mt-4">
                    <div v-for="(stack, techIndex) in project.tech" :key="techIndex">
                        <span class="bg-gray-800 text-gray-200 px-2 py-1 rounded-full font-normal text-sm">
                            {{ stack }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
</template>