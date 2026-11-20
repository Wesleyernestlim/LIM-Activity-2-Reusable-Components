<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<template>
  <div class="rounded border-l-4 border-sakura-300 bg-matcha-50 p-4">
    <h3 class="mb-1 font-bold text-matcha-800">{{ title }}</h3>
    <p class="text-sm text-hojicha/80">{{ description }}</p>
  </div>
</template>