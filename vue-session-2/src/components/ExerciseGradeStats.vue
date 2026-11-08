<script setup>
import { ref, computed } from 'vue'

const PASS_GRADE = 60

const students = ref([
  { id: 1, name: 'Ali', grade: 80 },
  { id: 2, name: 'Sara', grade: 90 },
  { id: 3, name: 'Omar', grade: 55 },
])

const maxGrade = computed(() => {
  if (students.value.length === 0) return '—'
  return Math.max(...students.value.map((s) => s.grade))
})

const minGrade = computed(() => {
  if (students.value.length === 0) return '—'
  return Math.min(...students.value.map((s) => s.grade))
})

const averageGrade = computed(() => {
  if (students.value.length === 0) return 0
  const sum = students.value.reduce((acc, s) => acc + s.grade, 0)
  return sum / students.value.length
})

const passedCount = computed(
  () => students.value.filter((s) => s.grade >= PASS_GRADE).length
)

function changeGrade(student, delta) {
  student.grade = Math.min(100, Math.max(0, student.grade + delta))
}
</script>

<template>
  <section class="exercise">
    <h2>Статистика оценок</h2>

    <div class="stats">
      <span>Максимум: {{ maxGrade }}</span>
      <span>Минимум: {{ minGrade }}</span>
      <span>Средняя: {{ averageGrade.toFixed(1) }}</span>
      <span>Сдали: {{ passedCount }}</span>
    </div>

    <ul v-if="students.length" class="list">
      <li v-for="student in students" :key="student.id" class="item">
        <span class="name">{{ student.name }}</span>
        <span class="grade">{{ student.grade }}</span>
        <button type="button" :disabled="student.grade === 100" @click="changeGrade(student, 5)">
          +5
        </button>
        <button type="button" :disabled="student.grade === 0" @click="changeGrade(student, -5)">
          -5
        </button>
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

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}

.name {
  flex: 1;
}

.grade {
  min-width: 32px;
  text-align: right;
}

.empty {
  margin: 0;
  color: #666;
}
</style>

