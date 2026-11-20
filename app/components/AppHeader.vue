<template>
  <header class="bg-matcha-600 text-white">
    <nav class="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
      <span class="text-lg font-bold">StudentHub</span>
      <div class="flex gap-5 text-sm">
        <NuxtLink to="/" exact-active-class="border-b-2 border-sakura-200">Home</NuxtLink>
        <NuxtLink to="/students" exact-active-class="border-b-2 border-sakura-200">Students</NuxtLink>
        <NuxtLink to="/about" exact-active-class="border-b-2 border-sakura-200">About</NuxtLink>
      </div>
    </nav>
  </header>
</template>