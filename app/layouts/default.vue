<script setup lang="ts">
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { VueLenis, useLenis } from 'lenis/vue'

onMounted(() => {
  const lenis = useLenis()

  if (!lenis) return

  const raf = (time: number) => {
    lenis.raf(time)
    ScrollTrigger.update()
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})
</script>

<template>
  <VueLenis root>
    <AppHeader />
    <slot />
    <AppFooter />
    <PagesAppTransition />
  </VueLenis>
</template>
