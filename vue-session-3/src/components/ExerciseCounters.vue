<script setup>
import { ref, computed } from 'vue'
import CounterButton from './CounterButton.vue'

const apples = ref(0)
const pears = ref(0)

const total = computed(() => apples.value + pears.value)
</script>

<template>
  <section class="exercise">
    <h2>Счётчик с событием</h2>
    <div class="buttons">
      <CounterButton label="Яблоки" @change="apples = $event" />
      <CounterButton label="Груши" :step="5" @change="pears = $event" />
    </div>
    <p class="total">Сумма: {{ total }}</p>
  </section>
</template>

<style scoped>
.exercise {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.buttons {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.total {
  margin: 0;
}
</style>

