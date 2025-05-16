<template>
  <div class="dashboard-content">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="Overview" :bordered="false">
          <p>Welcome to the test dashboard!</p>
          <a-statistic title="Active Users" :value="112893" />
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Performance" :bordered="false">
          <a-statistic title="Response Time" :value="98.6" suffix="ms" />
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="Status" :bordered="false">
          <a-statistic title="Success Rate" :value="99.9" suffix="%" />
        </a-card>
      </a-col>
    </a-row>
    <a-row style="margin-top: 16px">
      <a-col :span="24">
        <a-button type="primary" @click="goToAbout">Go to About Page</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'TestDashboardComponent'
})

const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}
</script>

<style scoped>
.dashboard-content {
  width: 100%;
}
</style> 