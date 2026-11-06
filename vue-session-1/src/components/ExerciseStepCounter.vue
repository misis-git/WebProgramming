<script setup>
import { ref } from 'vue'

const count = ref(0)
const step = ref(1)

function increment() {
  const s = step.value > 0 ? step.value : 1
  if (count.value + s <= 20) {
    count.value += s
  } else {
    count.value = 20
  }
}

function decrement() {
  const s = step.value > 0 ? step.value : 1
  if (count.value - s >= 0) {
    count.value -= s
  } else {
    count.value = 0
  }
}
</script>

<template>
  <section class="exercise">
    <h2>Счётчик: {{ count }}</h2>

    <div class="row">
      <label>
        Шаг:
        <input type="number" min="1" v-model.number="step" />
      </label>
    </div>

    <div class="actions">
      <button :disabled="count === 0" @click="decrement">Уменьшить</button>
      <button :disabled="count === 20" @click="increment">Увеличить</button>
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
  margin-bottom: 12px;
}

.actions {
  display: flex;
  gap: 8px;
}
</style>
