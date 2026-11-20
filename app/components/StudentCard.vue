<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  studentId: { type: String, required: true },
  course: { type: String, required: true },
  year: { type: String, default: '1st Year' },
  email: { type: String, default: '' },
})
</script>

<template>
  <div class="rounded border border-matcha-200 border-t-4 border-t-matcha-500 bg-white p-4">
    <h3 class="font-bold">{{ name }}</h3>
    <p class="text-xs text-matcha-600">{{ studentId }}</p>
    <p class="mt-2 text-sm">{{ course }}</p>
    <p class="text-sm font-medium text-sakura-600">{{ year }}</p>
    <p v-if="email" class="mt-2 text-xs text-hojicha/60">{{ email }}</p>
  </div>
</template>