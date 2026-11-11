<script setup>
import { ref, nextTick } from 'vue'

const formRef = ref(null)
const name = ref('')
const email = ref('')
const age = ref(null)
const agree = ref(false)
const submitted = ref(null)

const nameRules = [
  (val) => (val && val.trim().length >= 2) || 'Имя: минимум 2 символа',
]

const emailRules = [
  (val) =>
    (val && val.includes('@') && val.includes('.')) ||
    'Почта должна содержать @ и точку',
]

const ageRules = [
  (val) =>
    (val !== null && val !== '' && val >= 18 && val <= 100) ||
    'Возраст: от 18 до 100',
]

function onSubmit() {
  if (!agree.value) return
  submitted.value = {
    name: name.value.trim(),
    email: email.value.trim(),
    age: age.value,
  }
}

function onReset() {
  name.value = ''
  email.value = ''
  age.value = null
  agree.value = false
  submitted.value = null
  nextTick(() => formRef.value.resetValidation())
}
</script>

<template>
  <q-page padding>
    <div class="page">
      <h1 class="text-h5 q-mt-none q-mb-md">Регистрация</h1>

      <q-form
        ref="formRef"
        class="q-gutter-sm"
        @submit="onSubmit"
        @reset="onReset"
      >
        <q-input
          v-model="name"
          label="Имя"
          outlined
          dense
          lazy-rules
          :rules="nameRules"
        />

        <q-input
          v-model="email"
          type="email"
          label="Почта"
          outlined
          dense
          lazy-rules
          :rules="emailRules"
        />

        <q-input
          v-model.number="age"
          type="number"
          label="Возраст"
          outlined
          dense
          lazy-rules
          :rules="ageRules"
        />

        <div>
          <q-toggle v-model="agree" label="Согласен с условиями" />
        </div>

        <div class="q-gutter-sm">
          <q-btn
            type="submit"
            color="primary"
            label="Отправить"
            :disable="!agree"
            no-caps
          />
          <q-btn type="reset" flat label="Очистить" no-caps />
        </div>
      </q-form>

      <q-banner
        v-if="submitted"
        rounded
        class="bg-positive text-white q-mt-md"
      >
        Имя: {{ submitted.name }}, почта: {{ submitted.email }}, возраст:
        {{ submitted.age }}
      </q-banner>
    </div>
  </q-page>
</template>

<style scoped>
.page {
  max-width: 480px;
}
</style>

