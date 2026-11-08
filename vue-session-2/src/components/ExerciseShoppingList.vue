<script setup>
import { ref, computed } from 'vue'

const newItem = ref('')
const items = ref([])
let nextId = 1

const totalCount = computed(() => items.value.length)

function addItem() {
  const name = newItem.value.trim()
  if (!name) return

  items.value.push({ id: nextId++, name })
  newItem.value = ''
}

function removeItem(id) {
  items.value = items.value.filter((item) => item.id !== id)
}
</script>

<template>
  <section class="exercise">
    <h2>Список покупок</h2>

    <form class="form" @submit.prevent="addItem">
      <input class="input" v-model.trim="newItem" placeholder="Название товара" />
      <button type="submit">Добавить</button>
    </form>

    <p class="count">Количество элементов: {{ totalCount }}</p>

    <ul v-if="items.length" class="list">
      <li v-for="item in items" :key="item.id" class="item">
        <span class="item-name">{{ item.name }}</span>
        <button type="button" @click="removeItem(item.id)">Удалить</button>
      </li>
    </ul>
    <p v-else class="empty">Список пуст</p>
  </section>
</template>

<style scoped>
.exercise {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.form {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.input {
  flex: 1;
  padding: 6px 8px;
}

.count {
  margin: 0 0 10px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}

.item-name {
  flex: 1;
}

.empty {
  margin: 0;
  color: #666;
}
</style>

