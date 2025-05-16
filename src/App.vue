<template>
  <a-layout>
    <side-menu />
    <a-layout-content :style="contentStyle">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SideMenu from './components/SideMenu.vue'

const route = useRoute()

const contentStyle = computed(() => ({
  padding: '24px',
  minHeight: '100vh',
  marginLeft: route.path.startsWith('/test') ? '0' : '200px'
}))
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
