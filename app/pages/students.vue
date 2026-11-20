<script setup lang="ts">
const students = [
  { id: 1, name: 'Juan Dela Cruz', studentId: '2024-0001', course: 'BS Information Technology', year: '2nd Year', email: 'juan@example.com' },
  { id: 2, name: 'Maria Santos', studentId: '2024-0002', course: 'BS Computer Science', year: '3rd Year', email: 'maria@example.com' },
  { id: 3, name: 'Pedro Reyes', studentId: '2024-0003', course: 'BS Information Systems', year: '1st Year', email: 'pedro@example.com' },
  { id: 4, name: 'Ana Garcia', studentId: '2024-0004', course: 'BS Information Technology', year: '4th Year', email: 'ana@example.com' },
]
</script>

<template>
  <section>
    <h1 class="mb-6 text-3xl font-bold text-matcha-800">Students</h1>

    <div class="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <StudentCard
        v-for="s in students"
        :key="s.id"
        :name="s.name"
        :student-id="s.studentId"
        :course="s.course"
        :year="s.year"
        :email="s.email"
      />
    </div>

    <AppButton label="Back to Home" color="forest" to="/" />
  </section>
</template>