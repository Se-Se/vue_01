<template>
  <div class="test1-page">
    <h1>Test Page 1</h1>
    <p>This is test page 1 with its own side menu.</p>
    <a-card title="Content Example" style="width: 100%; margin-top: 16px">
      <p>This is some example content for Test Page 1.</p>
      <a-button type="primary">Sample Button</a-button>
    </a-card>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'

defineOptions({
  name: 'TestPageOne'
})
</script>

<style scoped>
.test1-page {
  padding: 20px;
}
</style>