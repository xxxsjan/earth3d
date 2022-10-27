<template>
  <div v-if="progress < 1000">
    <div class="loading"></div>
    <div class="progress">
      <img src="../assets/loading.gif" alt="" />
      <span>加载中：{{ progress }}%</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  progress: {
    type: [Number, String],
    default: 0,
  },
});
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  /* background-image: url('../assets/loading.jpg'); */
  background-size: cover;
  backdrop-filter: blur(50px);
  z-index: 100;
}
.progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  margin: auto;
}
.progress > img {
  padding: 0 15px;
}
</style>
