<script setup>
import ExerciseGreetingCards from './components/ExerciseGreetingCards.vue'
import ExerciseCounters from './components/ExerciseCounters.vue'
import ExerciseInfoBoxes from './components/ExerciseInfoBoxes.vue'
import ExerciseTodoList from './components/ExerciseTodoList.vue'
</script>

<template>
  <main class="container">
    <h1>Занятие 3. Упражнения</h1>
    <ExerciseGreetingCards />
    <ExerciseCounters />
    <ExerciseInfoBoxes />
    <ExerciseTodoList />
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

