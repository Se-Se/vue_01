<template>
  <div class="test2-page">
    <h1>Test Page 2</h1>
    <div class="content">
      <a-card title="Form Example" style="width: 100%; margin-top: 16px">
        <a-form :model="formState" layout="vertical">
          <a-form-item label="Name" name="name">
            <a-input v-model="formState.name" placeholder="Enter your name" />
          </a-form-item>
          <a-form-item label="Email" name="email">
            <a-input v-model="formState.email" placeholder="Enter your email" />
          </a-form-item>
          <a-form-item>
            <a-button type="primary">Submit</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { defineOptions, reactive } from 'vue'

defineOptions({
  name: 'TestPageTwo'
})

const formState = reactive({
  name: '',
  email: ''
})
</script>

<style scoped>
.test2-page {
  padding: 20px;
}

.content {
  max-width: 600px;
}
</style> 