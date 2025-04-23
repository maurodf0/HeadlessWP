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

const { projects } = defineProps<{
  projects: Project[]
}>();
</script>

<template>
        <div class="bg-gradient-blur fixed inset-0 pointer-events-none -z-10">
            <div class="rotate-45 bg-gradient-to-r from-teal-600/85 to-sky-600/40 w-1/2 h-[250px] filter blur-[180px] absolute mix-blend-screen bottom-1/2 left-0 md:-right-1/4 glow-ball"></div>
        </div>

            <div 
                v-for="(project, index) in projects" 
                :key="project.id"
                :style="{
                    transform: `translate(${index * + 0}px, ${index * 20}px)`,
                    zIndex: projects.length - index,

                }"
                class="hover:border-sky-400/45 max-w-[90%] md:max-w-[480px] left-[5%] md:left-1/2 md:translate-x-0 mx-auto absolute transition-all projects-pin-item top-96 md:top-10 flex flex-col gap-4 w-full p-6 text-wrapper border-4 border-gray-100/15 bg-gray-950 rounded-lg shadow-lg duration-300 ease-in-out"
            >
            <NuxtLink target="_blank" :to="project.url" class="flex flex-col gap-2">
                <div class="mb-4 rounded-lg w-full h-48 bg-gray-800">
                    <img :src="project.image" alt="Project Image" class=" w-full h-full object-cover rounded-lg">
                </div>
            </NuxtLink>
                <h2 class="text-2xl font-medium">{{ project.title }}</h2>
                <p class="mb-2">{{ project.description }}</p>
                <hr class="border-gray-700">
                <div class="flex flex-wrap gap-2">
                    <div v-for="(stack, techIndex) in project.tech" :key="techIndex">
                        <span class="bg-gray-800 text-gray-200 px-2 py-1 rounded-full font-normal text-sm">
                            {{ stack }}
                        </span>
                    </div>
                </div>
                <hr class="border-gray-700">
                <div class="flex gap-4 mt-4">
                    <NuxtLink target="_blank" :to="project.github" class="text-gray-400 hover:text-gray-200">
                        <Icon name="ph:github-logo" class="w-6 h-6" />
                    </NuxtLink>
                    <NuxtLink target="_blank" :to="project.url" class="text-gray-400 hover:text-gray-200">
                        <Icon name="ph:link-simple-bold" class="w-6 h-6" />
                    </NuxtLink>
                    </div>
            </div>

</template>