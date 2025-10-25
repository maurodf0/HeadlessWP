<script setup lang="ts">
import { gsap } from 'gsap'

const emit = defineEmits<{
  (e: 'loaded'): void
}>()



const loading = ref('000') 
function zeroPad(num: number, places: number): string {
  return String(num).padStart(places, '0')
}

onMounted(() => {

  let obj = { value: 0 }

  const tlOpener = gsap.timeline();
  tlOpener.to(obj, {
    value: 100,
    duration: 1.5,
    ease: 'power3.inOut',
    onUpdate: () => {
      loading.value = zeroPad(Math.round(obj.value), 3)
    },
  })
  .to('.logo-loader', {
    duration: .35,
    ease: 'power3.inOut',
    scale: .25,
    opacity: 0
  })
  .to('.app-loader', {
    duration: .75,
    ease: 'power3.inOut',
    transform: 'translateY(-110%)',
  }, '<')
  .to('.app-loader-1', {
     duration: 1.25,
    ease: 'power3.inOut',
    transform: 'translateY(-100%)',
  },'<')
  .to('.app-loader-2', {
     duration: 1.05,
    ease: 'power3.inOut',
    transform: 'translateY(-100%)',
 onComplete: () => {
    const wrapper = document.querySelector('.app-loader-wrapper')
    if (wrapper) wrapper.remove()
    emit('loaded')
  }
},'<')
       .from('.glow-effect', { 
        scale: .5,
        duration: .25,
        ease: 'power3.inOut',
        opacity: 0,
     }, '<')
    .from('.heading-level', {
        y: 50,
        opacity: 0,
        duration: .5,
        ease: 'power3.inOut',
    },'-=.25')
    .from('.p-level', {
        y: 20,
        opacity: 0,
        duration: .35,
        ease: 'power3.inOut',
    })
    .from('.cta-link', {
        y: 20,
        opacity: 0,
        duration: .5,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.2,
            ease: 'power3.inOut',
        },
    })
    .from('.logo', {
        y: -30,
        rotate: 0,
        duration: .5,
        ease: 'power3.inOut',
    }, '-=.5')
    .from('.logo-name', {
        xPercent: -50,
        rotate: 0,
        duration: .5,
        ease: 'power3.inOut',
    })
     .from('nav a', {
        opacity: 0,
        duration: .5,
        stagger: {
            amount: 0.25,
            ease: 'power2.inOut',
        },
    }, '-=.5')
    .from('.logo-img-stack', {
        y: 30,
        rotate: 0,
        opacity: 0,
        duration: .5,
        ease: 'power3.inOut',
        stagger: {
            amount: .75,
            from: 'start',
            ease: 'power3.inOut',
        },
    }, '-=.5')

})
</script>

<template>
  <div class="app-loader-wrapper">
      <div class="app-loader-1 w-full h-full flex flex-col items-center justify-center fixed top-0 left-0 z-10 bg-gray-900"></div>
      <div class="app-loader-2 w-full h-full flex flex-col items-center justify-center fixed top-0 left-0 z-20 bg-teal-400"></div>
      <div class="app-loader w-full h-full flex flex-col items-center justify-center fixed top-0 left-0 z-50 bg-gray-950">
          <div class="loader-icon">
            <img class="scale-[.25] animate-pulse invert logo-loader opacity-15" src="/m-logo.png" alt="loader" />
          </div>
          <div class="loader-text opacity-35 text-3xl text-gray-100">
            {{ loading }} %
          </div>
        </div>
    </div>

</template>
