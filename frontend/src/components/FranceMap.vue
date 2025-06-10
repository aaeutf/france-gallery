<template>
  <div class="france-map">
  <h2 class="map-title">Carte des Départements</h2>
  <svg
    viewBox="0 0 600 700"
    class="france-svg"
    xmlns="http://www.w3.org/2000/svg"
  >
      <!-- Example: Only a few departments for demo. Add more as needed. -->
      <g v-for="dept in departments" :key="dept.code">
        <path
          :d="dept.path"
          :fill="dept.code === selectedDept ? '#42b983' : '#e0e0e0'"
          stroke="#888"
          stroke-width="1"
          style="cursor:pointer"
          @click="selectDepartment(dept.code)"
        />
        <text
          :x="dept.labelX"
          :y="dept.labelY"
          font-size="14"
          text-anchor="middle"
          fill="#333"
        >{{ dept.code }}</text>
      </g>
    </svg>
    <div v-if="selectedDept" class="gallery-section">
      <h3>Galerie du département {{ selectedDept }}</h3>
      <p>Aucune galerie disponible pour l'instant.</p>
      <button @click="resetSelection" class="back-btn">Retour à la carte</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'


// Minimal demo: 3 departments, real map would have 90+ with real SVG paths
const departments = [
  {
    code: '75', // Paris
    path: 'M200,200 l40,0 l0,40 l-40,0 z',
    labelX: 220,
    labelY: 225
  },
  {
    code: '13', // Bouches-du-Rhône
    path: 'M400,500 l60,0 l0,40 l-60,0 z',
    labelX: 430,
    labelY: 525
  },
  {
    code: '69', // Rhône
    path: 'M300,350 l40,0 l0,40 l-40,0 z',
    labelX: 320,
    labelY: 375
  }
]

const selectedDept = ref(null)
const selectDepartment = (code) => {
  selectedDept.value = code
}
const resetSelection = () => {
  selectedDept.value = null
}
</script>

<style scoped>
 .france-map {
   position: fixed;
   inset: 0;
   width: 100vw;
   height: 100vh;
   background: #f5f5f5;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   overflow: hidden;
 }
 .map-title {
   margin-top: 2rem;
   margin-bottom: 1rem;
   font-size: 2.2rem;
   color: #222;
   letter-spacing: 1px;
   z-index: 2;
 }
 .france-svg {
   width: 80vw;
   height: 80vh;
   max-width: 900px;
   max-height: 90vh;
   background: #f5f5f5;
   border-radius: 18px;
   box-shadow: 0 2px 16px rgba(0,0,0,0.10);
   margin-bottom: 2rem;
 }
 .gallery-section {
   margin-top: 2rem;
   background: rgba(255,255,255,0.95);
   border-radius: 12px;
   padding: 2rem 2.5rem;
   box-shadow: 0 2px 8px rgba(0,0,0,0.08);
   z-index: 3;
 }
 .back-btn {
   margin-top: 1.5rem;
   background: #eee;
   border: none;
   border-radius: 4px;
   padding: 0.5rem 1.5rem;
   cursor: pointer;
 }
 .back-btn:hover {
   background: #ccc;
 }
</style>
