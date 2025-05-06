<script setup>
import { VueLenis, useLenis } from 'lenis/vue'
import { watch } from 'vue'

const lenis = useLenis(({ scroll }) => {
  // called every scroll
})

watch(lenis, (lenis) => {
  // lenis instance
})
</script>

<template>
    <VueLenis root>
        <AppHeader />
        <slot />
        <AppFooter />
    </VueLenis >

</template>

<style>
.page-enter-active:not(.glow-effect),
.page-leave-active:not(.glow-effect) {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(80px) translateZ(-300px);
}
</style>