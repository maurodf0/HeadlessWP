<script setup lang="ts">
  import { gsap } from 'gsap';

  const TransitionEl1 = ref<HTMLElement>(null);
  const TransitionEl2 = ref<HTMLElement>(null);
  const TransitionEl3 = ref<HTMLElement>(null);



const animationIn = () => {
  const tl = gsap.timeline();

  return tl
    .set([TransitionEl1.value, TransitionEl2.value, TransitionEl3.value], { y: '100%' }) // reset iniziale
    .to(TransitionEl3.value, {
      y: 0,
      duration: 0.65,
      ease: 'power4.inOut'
    }, 0)
    .to(TransitionEl2.value, {
      y: 0,
      duration: 0.75,
      ease: 'power4.inOut'
    }, 0)
    .to(TransitionEl1.value, {
      y: 0,
      duration: 0.85,
      ease: 'power4.inOut'
    }, 0);
}

const animeOut = () => {
  const tl = gsap.timeline();

  return tl
    .to(TransitionEl3.value, {
      y: '-100%',
      duration: 0.65,
      ease: 'power4.inOut',
      onComplete: () => gsap.set(TransitionEl3.value, { y: '100%' })
    }, 0)
    .to(TransitionEl2.value, {
      y: '-100%',
      duration: 0.95,
      ease: 'power4.inOut',
      onComplete: () => gsap.set(TransitionEl2.value, { y: '100%' })
    }, 0)
    .to(TransitionEl1.value, {
      y: '-100%',
      duration: 0.85,
      ease: 'power4.inOut',
      onComplete: () => gsap.set(TransitionEl1.value, { y: '100%' })
    }, 0);
}


  onMounted(() => {
    const router = useRouter()
    
    router.beforeEach(async (to, from, next) => {
      console.log('✅aspetto animazione')
      await animationIn()
      next()
      console.log('avvio route change');
    })


    router.afterEach(() => {
      console.log('✅ Route changed, starting animeOut')
      animeOut()
    });

  });

</script>


<template>
  <div ref="TransitionEl1" class="fixed bottom-0 left-0 w-full h-full z-[9999] pointer-events-none bg-gray-950"
    style="transform: translateY(100%);">
  </div>
  <div ref="TransitionEl2" class="fixed bottom-0 left-0 w-full h-full z-[9998] pointer-events-none bg-teal-400"
    style="transform: translateY(100%);">
  </div>
  <div ref="TransitionEl3" class="fixed bottom-0 left-0 w-full h-full z-[9997] pointer-events-none bg-gray-900"
    style="transform: translateY(100%);">
  </div>

</template>