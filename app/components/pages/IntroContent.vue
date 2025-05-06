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
      <div class="overflow-hidden">
        <h1 class="page_title"><slot name="title" /></h1>
      </div>
        <div class="overflow-hidden">
        <p class="page_desc !mb-0" :class="length"><slot name="description" /></p>
        </div>
    </AppContainer>
</template>