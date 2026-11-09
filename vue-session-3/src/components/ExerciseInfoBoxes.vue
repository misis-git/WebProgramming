<script setup>
import InfoBox from './InfoBox.vue'
</script>

<template>
  <section class="exercise">
    <h2>Блок со слотами</h2>
    <div class="boxes">
      <InfoBox>
        Содержимое без заголовка и подвала.
      </InfoBox>

      <InfoBox>
        <template #header>Важное сообщение</template>
        Содержимое с заголовком без подвала.
      </InfoBox>

      <InfoBox>
        <template #header>Заметка</template>
        Содержимое с заголовком и подвалом.
        <template #footer>Дополнительный текст в подвале</template>
      </InfoBox>
    </div>
  </section>
</template>

<style scoped>
.exercise {
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
}

.boxes {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

