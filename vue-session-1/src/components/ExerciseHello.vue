<script setup>
import { ref } from 'vue'

const name = ref('Михаил')
const university = 'НИТУ МИСИС'
const course = 'Веб-программирование'

function changeTitle() {
  name.value = 'Заголовок изменён'
}
</script>

<template>
  <section class="exercise">
    <h2>{{ name }}</h2>
    <p>{{ university }}, {{ course }}</p>
    <button @click="changeTitle">Изменить заголовок</button>
  </section>
</template>

<style scoped>
.exercise {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}
</style>
