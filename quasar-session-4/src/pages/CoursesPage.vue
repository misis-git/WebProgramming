<script setup>
const courses = [
  { id: 1, title: 'Основы HTML и CSS', category: 'Фронтенд' },
  { id: 2, title: 'JavaScript', category: 'Фронтенд' },
  { id: 3, title: 'Vue.js', category: 'Фронтенд' },
  { id: 4, title: 'Quasar Framework', category: 'Интерфейсы' },
  { id: 5, title: 'Node.js и API', category: 'Бэкенд' },
  { id: 6, title: 'Базы данных SQL', category: 'Бэкенд' },
]
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-mt-none q-mb-md">Курсы ({{ courses.length }})</h1>

    <div class="row q-col-gutter-md">
      <div
        v-for="course in courses"
        :key="course.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle1">{{ course.title }}</div>
            <div class="text-caption text-grey-7">{{ course.category }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

