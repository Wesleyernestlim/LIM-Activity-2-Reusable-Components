<template>
  <section>
    <h1 class="mb-6 text-3xl font-bold text-matcha-800">About</h1>

    <div class="mb-6 grid gap-4 md:grid-cols-2">
      <InfoCard title="Purpose" description="Show component-based development in Nuxt." />
      <InfoCard title="Components" description="AppHeader, AppFooter, StudentCard, InfoCard, AppButton." />
    </div>

    <div class="flex flex-wrap gap-3">
      <AppButton label="Save" color="matcha" />
      <AppButton label="View" color="sakura" />
      <AppButton label="Share" color="forest" />
    </div>
  </section>
</template>