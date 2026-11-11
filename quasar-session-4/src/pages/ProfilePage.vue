<script setup>
import { ref } from 'vue'

const isSubscribed = ref(false)
const skills = ['Vue.js', 'Quasar', 'JavaScript']

function toggleSubscribe() {
  isSubscribed.value = !isSubscribed.value
}
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-mt-none q-mb-md">Профиль</h1>

    <q-card flat bordered class="profile-card">
      <q-card-section>
        <div class="text-h6">Михаил</div>
        <div class="text-subtitle2 text-grey-7">Веб-разработка</div>
      </q-card-section>

      <q-card-section class="q-pt-none q-gutter-xs">
        <q-badge
          v-for="skill in skills"
          :key="skill"
          color="primary"
          :label="skill"
        />
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn
          :color="isSubscribed ? 'positive' : 'primary'"
          :icon="isSubscribed ? 'check' : 'person_add'"
          :label="isSubscribed ? 'Вы подписаны' : 'Подписаться'"
          no-caps
          @click="toggleSubscribe"
        />
        <q-btn flat color="primary" label="Написать" no-caps />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<style scoped>
.profile-card {
  max-width: 360px;
}
</style>

