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

useHead({
  script: [
    {
      src: "https://bubblet.app/plugin.js",
      "data-key": "ZxpK1BODCCRZ0ZjVQsqEWGVvcEW2",
      "data-primary": "#b2f526",
      "data-base": "#111111",
      "data-neutral": "#252525",
      "data-text": "#eaeaea",
      "data-anchor": "bottom right",
      "data-size": "md",
      "data-fontfamily": "Geist",
      "data-zindex": "500",
      defer: true
    }
  ]
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
