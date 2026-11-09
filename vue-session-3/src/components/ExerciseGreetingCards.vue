<script setup>
import GreetingCard from './GreetingCard.vue'

const people = [
  { id: 1, name: 'Алиса', age: 20, role: 'Староста' },
  { id: 2, name: 'Борис', age: 22, role: 'Ассистент' },
  { id: 3, name: 'Виктор' },
]
</script>

<template>
  <section class="exercise">
    <h2>Карточка приветствия</h2>
    <div class="list">
      <GreetingCard
        v-for="person in people"
        :key="person.id"
        :name="person.name"
        :age="person.age"
        :role="person.role"
      />
    </div>
  </section>
</template>

<style scoped>
.exercise {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>

