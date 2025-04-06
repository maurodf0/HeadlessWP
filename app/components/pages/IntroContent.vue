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