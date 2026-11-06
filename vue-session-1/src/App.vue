<script setup>
import ExerciseHello from './components/ExerciseHello.vue'
import ExerciseStepCounter from './components/ExerciseStepCounter.vue'
import ExerciseUsername from './components/ExerciseUsername.vue'
import ExerciseThemeBlock from './components/ExerciseThemeBlock.vue'
</script>

<template>
  <main class="container">
    <h1>Занятие 1. Упражнения</h1>
    <ExerciseHello />
    <ExerciseStepCounter />
    <ExerciseUsername />
    <ExerciseThemeBlock />
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
