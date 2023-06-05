<script setup>
import {onMounted} from 'vue'
import {initCity} from './enter'
onMounted(()=>{
  //初始化三维场景
  initCity()
})

</script>

<template>
<canvas id="webgl">浏览器不支持显示</canvas>
</template>

<style scoped>

</style>
