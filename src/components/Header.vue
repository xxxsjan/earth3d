<template>
  <div class="header">
    <div class="logo"></div>
    <div class="menu">
      <a href="https://www.cpengx.cn/" class="menuItem">首页</a>
      <a href="https://www.cpengx.cn/%e8%af%be%e7%a8%8b%e6%ba%90%e7%a0%81" class="menuItem">课程源码</a>
      <a href="https://www.cpengx.cn/moxing" class="menuItem">素材模型</a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .logo {
  height: 100px;
  width: 300px;
  background-image: url('../assets/lcdm.png');
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
}
.menuItem {
  padding: 0 15px;
  text-decoration: none;
  color: #fff;
  font-weight: 900;
  font-size: 15px;
}
/* .title {
    width: 380px;
    height: 40px;
    position: fixed;
    right: 100px;
    top: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    z-index: 110;
  } */
</style>
