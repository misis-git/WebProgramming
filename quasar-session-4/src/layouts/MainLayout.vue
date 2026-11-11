<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const links = [
  { title: 'Контакты', icon: 'contacts', to: '/contacts' },
  { title: 'Профиль', icon: 'person', to: '/profile' },
  { title: 'Регистрация', icon: 'person_add', to: '/register' },
  { title: 'Курсы', icon: 'menu_book', to: '/courses' },
]
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Меню"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>Занятие 4. Упражнения</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Упражнения</q-item-label>

        <q-item
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          exact
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>{{ link.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

