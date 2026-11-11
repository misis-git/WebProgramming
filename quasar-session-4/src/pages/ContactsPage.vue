<template>
  <q-page padding>
    <div class="page">
      <h1 class="text-h5 q-mt-none q-mb-md">Контакты</h1>

      <q-list bordered separator>
        <q-item>
          <q-item-section avatar>
            <q-icon name="email" color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Почта</q-item-label>
            <q-item-label caption>student@example.ru</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon name="phone" color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Телефон</q-item-label>
            <q-item-label caption>+7 (000) 000-00-00</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<style scoped>
.page {
  max-width: 480px;
}
</style>

