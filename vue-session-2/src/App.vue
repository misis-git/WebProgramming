<script setup>
import ExerciseGradeStatus from './components/ExerciseGradeStatus.vue'
import ExerciseShoppingList from './components/ExerciseShoppingList.vue'
import ExerciseCourseCatalog from './components/ExerciseCourseCatalog.vue'
import ExerciseGradeStats from './components/ExerciseGradeStats.vue'
</script>

<template>
  <main class="container">
    <h1>Занятие 2. Упражнения</h1>
    <ExerciseGradeStatus />
    <ExerciseShoppingList />
    <ExerciseCourseCatalog />
    <ExerciseGradeStats />
  </main>
</template>

<style scoped>
.container {
  max-width: 560px;
  margin: 24px auto;
  padding: 0 16px;
  font-family: sans-serif;
}
</style>

