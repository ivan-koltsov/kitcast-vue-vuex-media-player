<template>
  <div class="loader-container">
    <div class="loader"></div>
    <p class="loader-text">Loading media...</p>
  </div>
</template>

<script>
export default {
  name: 'MediaLoader',
}
</script>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

.loader-text {
  margin-top: 16px;
  color: #666;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 