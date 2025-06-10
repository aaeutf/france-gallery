<template>
  <div class="department-view">
    <div class="department-card">
      <h1>{{ name }} ({{ code }})</h1>
      <button class="back-btn" @click="$router.push('/')">Retour à la carte de France</button>
    </div>
    <div class="photo-wall">
      <div v-for="(photo, idx) in photos" :key="idx" class="photo-thumb">
        <img :src="photo" alt="Photo du département" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  code: { type: String, required: true },
  name: { type: String, required: true }
})

// Demo: Replace with real department photos later
const photos = [
  'https://picsum.photos/seed/1/400/260',
  'https://picsum.photos/seed/2/400/260',
  'https://picsum.photos/seed/3/400/260',
  'https://picsum.photos/seed/4/400/260',
  'https://picsum.photos/seed/5/400/260',
  'https://picsum.photos/seed/6/400/260',
  'https://picsum.photos/seed/7/400/260',
  'https://picsum.photos/seed/8/400/260',
  'https://picsum.photos/seed/9/400/260',
  'https://picsum.photos/seed/10/400/260',
  'https://picsum.photos/seed/11/400/260',
  'https://picsum.photos/seed/12/400/260',
  'https://picsum.photos/seed/13/400/260',
  'https://picsum.photos/seed/14/400/260',
  'https://picsum.photos/seed/15/400/260',
  'https://picsum.photos/seed/16/400/260',
  'https://picsum.photos/seed/17/400/260',
  'https://picsum.photos/seed/18/400/260',
  'https://picsum.photos/seed/19/400/260',
  'https://picsum.photos/seed/20/400/260',
]
</script>

<style scoped>
.department-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.department-card {
  margin-bottom: 2rem;
  text-align: center;
}
.photo-wall {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.photo-thumb {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 6px #0001;
  overflow: hidden;
  aspect-ratio: 4/2.6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.photo-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.back-btn {
  margin-top: 1.2rem;
  padding: 0.6em 1.4em;
  background: var(--color-background-soft, #f8f8f8);
  border: 1px solid var(--color-border, #ccc);
  border-radius: 6px;
  font-size: 1rem;
  color: var(--color-heading, #2c3e50);
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 4px #0001;
}
.back-btn:hover {
  background: var(--color-background-mute, #f2f2f2);
  box-shadow: 0 2px 8px #0002;
}
</style>
