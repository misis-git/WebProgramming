<template>
  <div class="box">
    <header class="box-header">
      <slot name="header">Информация</slot>
    </header>

    <div class="box-body">
      <slot />
    </div>

    <footer v-if="$slots.footer" class="box-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #ccc;
}

.box-header {
  padding: 8px 12px;
  background: #f3f3f3;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}

.box-body {
  padding: 10px 12px;
}

.box-footer {
  padding: 8px 12px;
  border-top: 1px solid #ccc;
  color: #555;
  font-size: 0.9rem;
}
</style>

