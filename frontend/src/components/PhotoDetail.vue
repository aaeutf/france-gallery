<template>
  <div class="photo-detail-view">
    <button class="back-btn" @click="$router.back()">返回</button>
    <div class="photo-detail-card">
      <img :src="photoUrl" alt="大图" />
      <div class="photo-meta">
        <ul>
          <li><strong>作者：</strong>张伟</li>
          <li><strong>拍摄地点：</strong>巴黎，卢浮宫</li>
          <li><strong>坐标：</strong>48.8606, 2.3376
            <a href="https://www.google.com/maps?q=48.8606,2.3376" target="_blank" style="margin-left:8px; color:#1976d2;">[谷歌地图]</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const photoUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80'
</script>

<style scoped>
.photo-detail-view {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: #000;
  z-index: 1000;
}
.photo-detail-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  gap: 2.5rem;
}
.photo-detail-card img {
  max-width: 100vw;
  max-height: 100vh;
  width: auto;
  height: auto;
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 0;
  display: block;
  background: #000;
}
.photo-meta {
  min-width: 220px;
  max-width: 340px;
  font-size: 1.1rem;
  color: #2c3e50;
  background: rgba(255,255,255,0.65);
  border-radius: 10px;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 12px #0002;
  margin-left: -340px;
  z-index: 2;
}
@media (max-width: 900px) {
  .photo-detail-card {
    flex-direction: column;
    gap: 1.2rem;
  }
  .photo-meta {
    margin-left: 0;
    margin-top: -30vh;
    max-width: 90vw;
  }
}
.back-btn {
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 10;
  margin-bottom: 0;
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
body, html {
  overflow: hidden;
  height: 100%;
}
</style>
