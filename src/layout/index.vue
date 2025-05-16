<template>
  <a-layout>
    <test-menu />
    <a-layout-content :style="contentStyle">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import TestMenu from '../components/TestMenu.vue'
import { defineOptions } from 'vue'

defineOptions({
  name: 'TestLayout'
})

const contentStyle = {
  padding: '24px',
  minHeight: '100vh',
  marginLeft: '200px'
}
</script>

<style scoped>
:deep(.ant-layout) {
  background: #fff;
}
</style>