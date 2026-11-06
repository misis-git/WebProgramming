<script setup>
import { ref } from 'vue'

const isDark = ref(false)
</script>

<template>
  <section class="exercise">
    <div class="box" :class="{ dark: isDark }">
      Блок с текстом
    </div>
    <button @click="isDark = !isDark">
      {{ isDark ? 'Включить светлый режим' : 'Включить тёмный режим' }}
    </button>
  </section>
</template>

<style scoped>
.exercise {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.box {
  padding: 12px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #fff;
  color: #222;
}

.dark {
  background-color: #222;
  color: #fff;
  border-color: #222;
}
</style>
