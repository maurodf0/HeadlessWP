<script setup lang="ts">

    const props = defineProps({
        variant: {
            type: String,
            default: 'primary',
            validator: (value: string) => {
                return ['primary', 'glow', 'onlyLink'].includes(value);
            }
        }

    })

</script>

<template>
    <button 
       
        :class="{
            'primary': variant === 'primary',
            'secondary': variant === 'secondary',
            'onlyLink': variant === 'onlyLink',
        }"
     >
     <slot />
    </button>
</template>
