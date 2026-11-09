<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  step: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['change'])

const count = ref(0)

function increment() {
  count.value += props.step
  emit('change', count.value)
}
</script>

<template>
  <button class="btn" type="button" @click="increment">
    {{ label }}: {{ count }}
  </button>
</template>

<style scoped>
.btn {
  padding: 6px 12px;
  cursor: pointer;
}
</style>

