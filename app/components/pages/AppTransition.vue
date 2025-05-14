<script setup lang="ts">
import { gsap } from 'gsap';

const TransitionEl1 = ref<HTMLElement | null>(null);
const TransitionEl2 = ref<HTMLElement | null>(null);
const TransitionEl3 = ref<HTMLElement | null>(null);
const loadingText = ref(''); // Ref per il testo dinamico

const animationIn = () => {
  const tl = gsap.timeline();
  return tl
    .set([TransitionEl1.value, TransitionEl2.value, TransitionEl3.value], { y: '100%' })
    .set('.text-loader', { opacity: 0, y: -50 }) // Reset stato
    .to(TransitionEl3.value, { y: 0, duration: 0.65, ease: 'power4.inOut' }, 0)
    .to(TransitionEl2.value, { y: 0, duration: 0.75, ease: 'power4.inOut' }, 0)
    .to(TransitionEl1.value, { y: 0, duration: 0.85, ease: 'power4.inOut' }, 0)
    .to('.text-loader', {
      opacity: 1,
      duration: 0.85,
      ease: 'power4.inOut',
      y: 0
    }, '-=0.5');
};

const animeOut = () => {
  const tl = gsap.timeline();
  return tl
    .to(TransitionEl3.value, {
      y: '-100%',
      duration: 0.65,
      ease: 'power4.inOut',
      onComplete: () => gsap.set(TransitionEl3.value, { y: '100%' })
    }, 0)
    .to('.text-loader', {
      opacity: 0,
      duration: 0.85,
      ease: 'power4.inOut',
      y: 50,
      onComplete: () => gsap.set('.text-loader', { y: -50, opacity: 0 })
    })
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
};

const route = useRoute();
const router = useRouter();

onMounted(() => {
  router.beforeEach(async (to, from, next) => {
    loadingText.value = to.meta.title || to.name?.toString() || 'Loading'; // fallback
    await animationIn();
    next();
  });

  watch(
    () => route.fullPath,
    async () => {
      await nextTick();
      animeOut();
    }
  );
});
</script>


<template>
  <div>
    <div
      ref="TransitionEl1"
      class="fixed bottom-0 left-0 w-full h-full z-[9999] bg-gray-950 pointer-events-none"
      style="transform: translateY(100%)"
    >
      <div class="overflow-hidden h-full w-full">
        <span
          class="uppercase text-[60px] md:text-[180px] text-gray-900 bottom-5 right-5 absolute text-loader"
          v-text="loadingText === 'index' ? 'Home' : loadingText"
        />
      </div>
    </div>
    <div
      ref="TransitionEl2"
      class="fixed bottom-0 left-0 w-full h-full z-[9998] bg-teal-400 pointer-events-none"
      style="transform: translateY(100%)"
    />
    <div
      ref="TransitionEl3"
      class="fixed bottom-0 left-0 w-full h-full z-[9997] bg-gray-900 pointer-events-none"
      style="transform: translateY(100%)"
    />
  </div>
</template>
