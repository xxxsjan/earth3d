<template>
  <div class="home">
    <component :is="com"></component>
  </div>
</template>

<script setup>
import EarthPage from './components/EarthPage.vue';
import BaomaPage from './components/BaomaPage.vue';
import ViewRoom from './components/ViewRoom.vue';
import RobotPage from './components/RobotPage.vue';
import ThreeHomePage from './components/ThreeHomePage.vue';

const comList = [EarthPage, BaomaPage, ViewRoom, RobotPage, ThreeHomePage];
const index = Math.floor(Math.random() * comList.length);
console.log(index);
const com = comList[index];
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #000;
}
</style>
