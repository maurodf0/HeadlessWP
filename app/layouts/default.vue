<script setup lang="ts">
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { VueLenis, useLenis } from 'lenis/vue'

onMounted(() => {
  nextTick(() => {
    const lenis = useLenis()
    if (!lenis || typeof lenis.raf !== 'function') return

    const raf = (time: number) => {
      lenis.raf(time)
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
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
