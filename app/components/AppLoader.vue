<script setup lang="ts">

const props = withDefaults(defineProps<{
  loading?: string
}>(), {
  loading: '000'
})
</script>

<template>
 
  <div class="app-loader w-full h-full flex flex-col items-center justify-center fixed top-0 left-0 z-10 bg-gray-950">
      <div class="loader-icon">
        <img class="scale-[.25] animate-pulse invert logo-loader opacity-15" src="@/assets/m-logo.png" alt="loader" />
      </div>
      <div class="loader-text opacity-35 text-3xl text-gray-100">
        {{ props.loading }} %
      </div>
    </div>

</template>
