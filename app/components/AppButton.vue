<script setup lang="ts">

    const props = defineProps({
        variant: {
            type: String,
            default: 'primary',
            validator: (value: string) => {
                return ['primary', 'glow'].includes(value);
            }
        }

    })

</script>

<template>
    <button 
       
        :class="{
            'primary': variant === 'primary',
            'secondary': variant === 'secondary'
        }"
     >
     <slot />
    </button>
</template>
