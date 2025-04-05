<script setup lang="ts">
 const props = defineProps({
    length: {
        type: String,
        default: 'max-w-lg'
    },
 })
</script>

<template>
    <AppContainer>
        <h1>
            <slot name="title" />
        </h1>
        <p class="text-gray-400"
        :class="props.length">
            <slot name="description" />
        </p>
    </AppContainer>
</template>