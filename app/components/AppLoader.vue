<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const loading = ref('000') // inizializza come stringa padded

function zeroPad(num: number, places: number): string {
  return String(num).padStart(places, '0')
}

onMounted(() => {
  let obj = { value: 0 }

  const tl = gsap.timeline();
  tl.to(obj, {
    value: 100,
    duration: 3,
    ease: 'power3.inOut',
    onUpdate: () => {
      loading.value = zeroPad(Math.round(obj.value), 3)
    },
  })
  tl.to('.logo-loader', {
    duration: .5,
    ease: 'power3.inOut',

    scale: .25,
    opacity: 0
  })
  tl.to('.app-loader', {
    duration: 1,
    ease: 'power3.inOut',
    transform: 'translateY(-100%)',
    rotate: 0,
  }, '<')
})
</script>

<template>
  <div class="app-loader w-full h-full flex flex-col items-center justify-center fixed top-0 left-0 z-50 bg-gray-950">
    <div class="loader-icon">
      <img class="scale-50 animate-pulse invert logo-loader opacity-35" src="/assets/m-logo.png" alt="loader" />
    </div>
    <div class="loader-text opacity-35 text-3xl text-gray-100">
      {{ loading }} %
    </div>
  </div>
</template>
