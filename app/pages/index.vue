<template>
  <section>
    <h1 class="mb-2 text-3xl font-bold text-matcha-800">Welcome to StudentHub</h1>
    <p class="mb-6 text-hojicha/70">A simple student information site made with reusable components.</p>

    <div class="mb-6 grid gap-4 md:grid-cols-3">
      <InfoCard title="Reusable" description="Write a component once and use it on many pages." />
      <InfoCard title="Props" description="Pass data into a component to change what it shows." />
      <InfoCard title="Simple" description="Edit one file and every page updates." />
    </div>

    <div class="flex gap-3">
      <AppButton label="See Students" color="matcha" to="/students" />
      <AppButton label="About" color="sakura" to="/about" />
    </div>
  </section>
</template>