<script setup>
import { gsap } from 'gsap'

const onEnter = (el, done) => {
  console.log('enter triggered')
  gsap.fromTo(el, { opacity: 0, y: 100 }, {
    opacity: 1, y: 0, duration: 1, onComplete: done
  })
}

const onLeave = (el, done) => {
  console.log('leave triggered')
  gsap.to(el, { opacity: 0, y: -100, duration: 1, onComplete: done })
}
</script>

<template>
  <Transition mode="out-in" @enter="onEnter" @leave="onLeave">
      <div :key="$route.fullPath">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      </div>
    </Transition>

</template>


<style scoped>
.page-enter-active,
.page-leave-active {
  position: absolute;
  width: 100%;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>