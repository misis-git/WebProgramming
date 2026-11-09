<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 18,
  },
  role: {
    type: String,
    default: 'Студент',
  },
})
</script>

<template>
  <div class="card">
    <p class="name">{{ name }}</p>
    <p class="details">Возраст: {{ age }}, Роль: {{ role }}</p>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 10px 12px;
}

.name {
  margin: 0 0 4px;
  font-weight: bold;
}

.details {
  margin: 0;
  color: #555;
}
</style>

