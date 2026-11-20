<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: 'Button' },
  color: { type: String, default: 'matcha' },
  to: { type: String, default: '' },
})

const colors: Record<string, string> = {
  matcha: 'bg-matcha-600 text-white hover:bg-matcha-500',
  sakura: 'bg-sakura-500 text-white hover:bg-sakura-400',
  latte: 'bg-latte text-hojicha hover:opacity-80',
  forest: 'bg-matcha-900 text-white hover:bg-matcha-800',
}

const style = computed(() => colors[props.color] ?? colors.matcha)
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="style"
    class="inline-block rounded px-5 py-2 text-sm font-semibold"
  >
    {{ label }}
  </NuxtLink>
  <button v-else :class="style" class="rounded px-5 py-2 text-sm font-semibold">
    {{ label }}
  </button>
</template>