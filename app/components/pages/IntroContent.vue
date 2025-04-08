<script setup lang="ts">
const props = defineProps({
  length: {
    type: String,
    default: 'max-w-lg'
  }
})

const { length } = props
</script>

<template>
          <div class="rotate-25 bg-gradient-to-r from-sky-600/95 to-teal-600/95 w-full md:w-1/3 h-[120px] filter blur-[160px] absolute mix-blend-screen -z-10 top-16 left-3/3 md:left-3/3">
        </div>
    <AppContainer>
        <h1>
            <slot name="title" />
        </h1>
        <p 
        :class="length">
            <slot name="description" />
        </p>
    </AppContainer>
</template>