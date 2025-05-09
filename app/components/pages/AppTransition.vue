<script setup lang="ts">
import { gsap } from 'gsap';

const TransitionEl1 = ref<HTMLElement | null>(null);
const TransitionEl2 = ref<HTMLElement | null>(null);
const TransitionEl3 = ref<HTMLElement | null>(null);

const animationIn = () => {
  const tl = gsap.timeline();
  return tl
    .set([TransitionEl1.value, TransitionEl2.value, TransitionEl3.value], { y: '100%' })
    .to(TransitionEl3.value, { y: 0, duration: 0.65, ease: 'power4.inOut' }, 0)
    .to(TransitionEl2.value, { y: 0, duration: 0.75, ease: 'power4.inOut' }, 0)
    .to(TransitionEl1.value, { y: 0, duration: 0.85, ease: 'power4.inOut' }, 0);
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
  // Transizione di ingresso PRIMA del cambio pagina
  router.beforeEach(async (to, from, next) => {
    await animationIn();
    next();
  });

  // Aspettiamo il DOM pronto prima di eseguire la transizione di uscita
  // e poi eseguiamo la transizione di uscita
  watch(
    () => route.fullPath,
    async () => {
      await nextTick(); // Next tick per assicurarsi che il DOM sia pronto e che la ref (route in questo caso) sia aggiornata
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
      style="transform: translateY(100%);"
    />
    <div
      ref="TransitionEl2"
      class="fixed bottom-0 left-0 w-full h-full z-[9998] bg-teal-400 pointer-events-none"
      style="transform: translateY(100%);"
    />
    <div
      ref="TransitionEl3"
      class="fixed bottom-0 left-0 w-full h-full z-[9997] bg-gray-900 pointer-events-none"
      style="transform: translateY(100%);"
    />
  </div>
</template>
