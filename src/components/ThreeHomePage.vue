<template>
  <div class="canvas-container" ref="screenDom"></div>
  <!-- <Header/> -->
  <div class="pages" ref="pages">
    <div class="page">
      <!-- <h2 class="title">老陈带你学前端</h2> -->
      <!-- <p>轻松、好玩、有趣掌握前沿硬核前端技术</p> -->
    </div>
    <div class="page">
      <!-- <h2 class="title">WEB 3D可视化</h2> -->
      <!-- <p>领略WEB 3D的魅力，让页面无比酷炫</p> -->
    </div>
    <div class="page">
      <!-- <h2 class="title">ThreeJS框架</h2> -->
      <!-- <p>让前端开发3D效果更方便</p> -->
    </div>
    <LoadingVue :progress="progress" />
  </div>
</template>

<script setup>
import LoadingVue from './Loading.vue';
import Header from './Header.vue';

import * as THREE from 'three';
import { ref, onMounted } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { gsap } from 'gsap';
let screenDom = ref(null);
let pages = ref(null);
let progress = ref(0);

onMounted(() => {
  // 创建场景
  let scene = new THREE.Scene();
  const { clientWidth, clientHeight } = screenDom.value;
  // const width = screenDom.value.clientWidth;
  // const height = screenDom.value.clientHeight;
  // 创建相机
  let camera = new THREE.PerspectiveCamera(45, clientWidth / clientHeight, 0.1, 1000);
  camera.position.set(0, 0, 10);
  // 创建渲染器
  let renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(screenDom.value.clientWidth, screenDom.value.clientHeight);
  screenDom.value.appendChild(renderer.domElement);
  // 创建辅助坐标轴
  // let axes = new THREE.AxesHelper(5);
  // scene.add(axes);
  // 添加控制器
  // let control = new OrbitControls(camera, renderer.domElement);

  // 创建bg
  let url = '../assets/25s.jpg';
  let envTexture = new THREE.TextureLoader().load(url);
  envTexture.mapping = THREE.EquirectangularRefractionMapping;
  scene.background = envTexture;
  scene.environment = envTexture;

  // 添加机器
  // 设置解压缩的加载器
  let dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('./draco/gltf/');
  dracoLoader.setDecoderConfig({ type: 'js' });
  let gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);
  gltfLoader.load('./model/xz.glb', (gltf) => {
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(3, 0, 0);
    scene.add(gltf.scene);
    let timeline2 = gsap.timeline();
    window.addEventListener('mousemove', (e) => {
      // console.log(e);
      let x = (e.clientX / window.innerWidth) * 2 - 1;
      let y = -(e.clientY / window.innerHeight) * 2 + 1;
      if (timeline2.isActive()) {
        timeline2.clear();
      }
      gltf.scene.rotation.order = 'YXZ';
      timeline2.to(gltf.scene.rotation, {
        duration: 0.5,
        y: (Math.PI / 8) * x,
        x: -(Math.PI / 8) * y,
        ease: 'easInOut',
      });
      // console.log(y);
    });
  });

  gltfLoader.load('./model/xq6.glb', (gltf) => {
    gltf.scene.scale.set(0.05, 0.05, 0.05);
    gltf.scene.position.set(3, -8, 0);
    scene.add(gltf.scene);
    let timeline2 = gsap.timeline();
    window.addEventListener('mousemove', (e) => {
      console.log('handleMousemove', e);
      let x = (e.clientX / window.innerWidth) * 2 - 1;
      let y = -(e.clientY / window.innerHeight) * 2 + 1;
      if (timeline2.isActive()) {
        timeline2.clear();
      }
      gltf.scene.rotation.order = 'YXZ';
      timeline2.to(gltf.scene.rotation, {
        duration: 0.5,
        y: (Math.PI / 8) * x,
        x: -(Math.PI / 8) * y,
        ease: 'easInOut',
      });
      // console.log(y);
    });
  });
  gltfLoader.load('./model/gr75.glb', (gltf) => {
    gltf.scene.position.set(3, -16, 0);
    scene.add(gltf.scene);
    let timeline2 = gsap.timeline();
    window.addEventListener('mousemove', (e) => {
      // console.log(e);
      let x = (e.clientX / window.innerWidth) * 2 - 1;
      let y = -(e.clientY / window.innerHeight) * 2 + 1;
      if (timeline2.isActive()) {
        timeline2.clear();
      }
      gltf.scene.rotation.order = 'YXZ';
      timeline2.to(gltf.scene.rotation, {
        duration: 0.5,
        y: (Math.PI / 8) * x,
        x: -(Math.PI / 8) * y,
        ease: 'easInOut',
      });
      // console.log(y);
    });
  });

  gltfLoader.load('./model/moon.glb', (gltf) => {
    let moon = gltf.scene.children[0];

    for (let y = 0; y < 10; y++) {
      let moonInstanced = new THREE.InstancedMesh(moon.geometry, moon.material, 50);
      for (let i = 0; i < 50; i++) {
        let matrix = new THREE.Matrix4();
        let size = Math.random() * 10 - 8;
        matrix.makeScale(size, size, size);
        matrix.makeTranslation(Math.random() * 1000 - 500, Math.random() * 1000 - 500, Math.random() * 1000 - 500);
        // matrix.makeRotationY(Math.random() * Math.PI * 2);

        moonInstanced.setMatrixAt(i, matrix);
      }

      scene.add(moonInstanced);
      // moonInstanced.position.set(0, -2000, 0);
      // gsap.to(moonInstanced.rotation, {
      //   duration: 100,
      //   x: -2 * Math.PI,
      //   repeat: -1,
      //   ease: "linear",
      // });

      gsap.to(moonInstanced.position, {
        duration: Math.random() * 10 + 2,
        z: -1000,
        repeat: -1,
        ease: 'linear',
      });
    }
    let page = 0;
    let timeline = gsap.timeline();
    window.addEventListener('mousewheel', (e) => {
      console.log(e.wheelDelta);
      if (e.wheelDelta < 0) {
        page++;
        if (page > 2) {
          page = 2;
        }
      }
      if (e.wheelDelta > 0) {
        page--;
        if (page < 0) {
          page = 0;
        }
      }
      if (!timeline.isActive()) {
        timeline.to(camera.position, {
          duration: 1,
          y: -page * 8,
          ease: 'easeInOut',
        });
        gsap.to(pages.value, {
          duration: 1,
          y: -page * window.innerHeight,
          ease: 'easeInOut',
        });
      }
    });
  });

  // 添加直线光
  let light1 = new THREE.DirectionalLight(0xffffff, 0.3);
  light1.position.set(0, 10, 10);
  let light2 = new THREE.DirectionalLight(0xffffff, 0.3);
  light1.position.set(0, 10, -10);
  let light3 = new THREE.DirectionalLight(0xffffff, 0.8);
  light1.position.set(10, 10, 10);
  scene.add(light1, light2, light3);

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  render();
  THREE.DefaultLoadingManager.onProgress = function (item, loaded, total) {
    progress.value = new Number((loaded / total) * 100).toFixed(2);
  };
  // 监听画面变化，更新渲染画面
  window.addEventListener('resize', () => {
    console.log('画面变化了');
    // 更新摄像头
    camera.aspect = window.innerWidth / window.innerHeight;
    //   更新摄像机的投影矩阵
    camera.updateProjectionMatrix();
    //   更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
    //   设置渲染器的像素比
    renderer.setPixelRatio(window.devicePixelRatio);
  });
});
</script>

<style>
.canvas-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.pages {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
}
.pages .page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  padding: 15%;
  box-sizing: border-box;
}
.pages .page .title {
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 20px;
}
.pages .page .p {
  font-size: 30px;
}
</style>
