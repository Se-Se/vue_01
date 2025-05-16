<template>
  <div class="test-form">
    <a-form :model="formState" layout="vertical">
      <a-form-item label="Name" name="name">
        <a-input v-model="formState.name" placeholder="Enter your name" />
      </a-form-item>
      <a-form-item label="Email" name="email">
        <a-input v-model="formState.email" placeholder="Enter your email" />
      </a-form-item>
      <a-form-item label="Type" name="type">
        <a-select v-model="formState.type" placeholder="Select type">
          <a-select-option value="type1">Type 1</a-select-option>
          <a-select-option value="type2">Type 2</a-select-option>
          <a-select-option value="type3">Type 3</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { defineOptions, reactive } from 'vue'
import { message } from 'ant-design-vue'

defineOptions({
  name: 'TestFormComponent'
})

const formState = reactive({
  name: '',
  email: '',
  type: undefined
})

const handleSubmit = () => {
  if (!formState.name || !formState.email || !formState.type) {
    message.error('Please fill in all fields')
    return
  }
  message.success('Form submitted successfully')
}
</script>

<style scoped>
.test-form {
  max-width: 500px;
  margin: 0 auto;
}
</style> 