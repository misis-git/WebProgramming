<script setup>
import { ref } from 'vue'

const username = ref('')
</script>

<template>
  <section class="exercise">
    <h2>Регистрация</h2>
    <input v-model="username" placeholder="Введите имя" />
    <p>Привет, {{ username }}</p>
    <p :class="{ red: username.length >= 12 }">
      Количество символов: {{ username.length }}
    </p>
    <button :disabled="username.length < 4">Регистрация</button>
  </section>
</template>

<style scoped>
.exercise {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.red {
  color: red;
}
</style>
