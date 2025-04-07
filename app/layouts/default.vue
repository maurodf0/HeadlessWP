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