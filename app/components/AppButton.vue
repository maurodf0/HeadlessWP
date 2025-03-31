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
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        :class="{
            'bg-blue-500 hover:bg-blue-700': variant === 'primary',
            'bg-gray-500 hover:bg-gray-700': variant === 'secondary'
        }"
     >
    </button>
</template>
