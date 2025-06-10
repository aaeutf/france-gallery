<template>
  <div class="department-view">
    <div class="department-card">
      <h1>{{ name }}</h1>
      <div class="dept-code">Département n° {{ code }}</div>
      <p>Cette page sera bientôt complétée avec la galerie de photos pour <b>{{ name }}</b>.</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  code: String,
  name: String
})
</script>

<style scoped>
.department-view {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 60vh;
  background: #f7f8fa;
}
.department-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px #0001;
  padding: 2.5rem 2rem 2rem 2rem;
  margin-top: 3rem;
  max-width: 420px;
  width: 100%;
  text-align: center;
}
.department-card h1 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 0.5em;
}
.dept-code {
  font-size: 1.1rem;
  color: #888;
  margin-bottom: 1.5em;
}
</style>
