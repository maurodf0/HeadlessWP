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
            <div class="rotate-15 bg-gradient-to-r from-purple-600/65 to-blue-600/20 w-full md:w-1/2 h-[200px] filter blur-[180px] absolute mix-blend-screen top-20 right-11 glow-ball"></div>
        
    </AppContainer>
</template>