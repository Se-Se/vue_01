<template>
  <div class="dashboard-page">
    <h1>Dashboard</h1>
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
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'

defineOptions({
  name: 'TestDashboard'
})
</script>

<style scoped>
.dashboard-page {
  padding: 20px;
}

.dashboard-content {
  margin-top: 20px;
}
</style> 