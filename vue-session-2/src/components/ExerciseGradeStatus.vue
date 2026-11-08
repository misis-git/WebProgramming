<script setup>
import { ref } from 'vue'

const grade = ref(75)
</script>

<template>
  <section class="exercise">
    <h2>Оценка словами</h2>
    <div class="row">
      <input class="input" type="number" v-model.number="grade" placeholder="Оценка" />
      <span v-if="grade === '' || Number.isNaN(grade) || grade < 0 || grade > 100" class="error">
        Ошибка: число от 0 до 100
      </span>
      <span v-else-if="grade >= 90">Отлично</span>
      <span v-else-if="grade >= 75">Хорошо</span>
      <span v-else-if="grade >= 60">Удовлетворительно</span>
      <span v-else>Не сдал</span>
    </div>
  </section>
</template>

<style scoped>
.exercise {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.input {
  width: 120px;
  padding: 6px 8px;
}

.error {
  color: #b03a2e;
}
</style>

