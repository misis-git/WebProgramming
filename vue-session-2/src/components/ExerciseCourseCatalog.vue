<script setup>
import { ref, computed } from 'vue'

const courses = ref([
  { id: 1, title: 'Основы Vue.js', category: 'Программирование' },
  { id: 2, title: 'Python для начинающих', category: 'Программирование' },
  { id: 3, title: 'UI/UX дизайн', category: 'Дизайн' },
  { id: 4, title: 'Типографика и вёрстка', category: 'Дизайн' },
  { id: 5, title: 'Анализ данных на SQL', category: 'Данные' },
  { id: 6, title: 'Машинное обучение', category: 'Данные' },
])

const search = ref('')
const selectedCategory = ref('Все')

const filteredCourses = computed(() => {
  const query = search.value.trim().toLowerCase()
  return courses.value.filter((course) => {
    const matchesTitle = course.title.toLowerCase().includes(query)
    const matchesCategory =
      selectedCategory.value === 'Все' || course.category === selectedCategory.value
    return matchesTitle && matchesCategory
  })
})
</script>

<template>
  <section class="exercise">
    <h2>Каталог курсов</h2>

    <div class="filters">
      <input class="input" v-model="search" placeholder="Поиск по названию" />
      <select class="select" v-model="selectedCategory">
        <option value="Все">Все</option>
        <option value="Программирование">Программирование</option>
        <option value="Дизайн">Дизайн</option>
        <option value="Данные">Данные</option>
      </select>
    </div>

    <ul v-if="filteredCourses.length" class="list">
      <li v-for="course in filteredCourses" :key="course.id" class="item">
        <span>{{ course.title }}</span>
        <span class="category">{{ course.category }}</span>
      </li>
    </ul>
    <p v-else class="empty">Ничего не найдено</p>
  </section>
</template>

<style scoped>
.exercise {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.input {
  flex: 1;
  padding: 6px 8px;
}

.select {
  padding: 6px 8px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.item {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 0;
  border-bottom: 1px solid #eee;
}

.category {
  color: #555;
}

.empty {
  margin: 0;
  color: #666;
}
</style>

