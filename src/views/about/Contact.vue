<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <p>Get in touch with our team!</p>
    <a-button type="primary" @click="handleClick">Go to Test1</a-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = () => {
  router.push({
    name: 'test'
  });
}
</script>

<style scoped>
.contact {
  padding: 20px;
}

.ant-btn {
  margin-top: 16px;
}
</style>