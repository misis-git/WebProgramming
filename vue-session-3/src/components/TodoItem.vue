<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
  <li class="item">
    <label class="label">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="emit('toggle', todo.id)"
      />
      <span :class="{ done: todo.done }">{{ todo.title }}</span>
    </label>
    <button class="btn" type="button" @click="emit('remove', todo.id)">Удалить</button>
  </li>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}

.label {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  cursor: pointer;
}

.done {
  text-decoration: line-through;
  color: #888;
}

.btn {
  padding: 4px 8px;
  cursor: pointer;
}
</style>

