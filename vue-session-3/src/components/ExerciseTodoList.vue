<script setup>
import { ref, computed } from 'vue'
import TodoItem from './TodoItem.vue'
import { useLocalStorage } from '../composables/useLocalStorage'

const newTitle = ref('')

const todos = useLocalStorage('todos', [
  { id: 1, title: 'Изучить props и emits', done: true },
  { id: 2, title: 'Сделать список задач', done: false },
])

const remainingCount = computed(
  () => todos.value.filter((todo) => !todo.done).length
)

const hasCompleted = computed(
  () => todos.value.some((todo) => todo.done)
)

function addTodo() {
  const title = newTitle.value.trim()
  if (!title) return

  const nextId = todos.value.reduce((max, t) => Math.max(max, t.id), 0) + 1
  todos.value.push({ id: nextId, title, done: false })
  newTitle.value = ''
}

function toggleTodo(id) {
  const todo = todos.value.find((t) => t.id === id)
  if (todo) {
    todo.done = !todo.done
  }
}

function removeTodo(id) {
  todos.value = todos.value.filter((t) => t.id !== id)
}

function clearCompleted() {
  todos.value = todos.value.filter((t) => !t.done)
}
</script>

<template>
  <section class="exercise">
    <h2>Список задач</h2>

    <form class="form" @submit.prevent="addTodo">
      <input class="input" v-model.trim="newTitle" placeholder="Новая задача" />
      <button class="btn" type="submit">Добавить</button>
    </form>

    <div class="controls">
      <span>Осталось: {{ remainingCount }}</span>
      <button v-if="hasCompleted" class="btn" type="button" @click="clearCompleted">
        Очистить выполненные
      </button>
    </div>

    <ul v-if="todos.length" class="list">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @remove="removeTodo"
      />
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

.btn {
  padding: 6px 10px;
  cursor: pointer;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.empty {
  margin: 0;
  color: #666;
}
</style>

