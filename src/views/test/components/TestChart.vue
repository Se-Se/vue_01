<template>
  <div class="test-chart">
    <div class="chart-controls">
      <a-radio-group v-model="chartType" button-style="solid">
        <a-radio-button value="bar">Bar</a-radio-button>
        <a-radio-button value="line">Line</a-radio-button>
        <a-radio-button value="pie">Pie</a-radio-button>
      </a-radio-group>
    </div>
    <div class="chart-container">
      <div class="chart-placeholder">
        <h3>Chart Visualization (Mock)</h3>
        <p>Current Type: {{ chartType }}</p>
        <div class="mock-chart">
          <div 
            v-for="(value, index) in mockData" 
            :key="index"
            class="mock-bar"
            :style="{ height: `${value}px`, backgroundColor: getRandomColor() }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineOptions, ref, computed } from 'vue'

defineOptions({
  name: 'TestChartComponent'
})

const chartType = ref('bar')
const mockData = [60, 80, 40, 90, 70, 50]

const getRandomColor = () => {
  const colors = ['#1890ff', '#52c41a', '#faad14', '#f5222d', '#722ed1', '#13c2c2']
  return colors[Math.floor(Math.random() * colors.length)]
}
</script>

<style scoped>
.test-chart {
  width: 100%;
}

.chart-controls {
  margin-bottom: 20px;
  text-align: center;
}

.chart-container {
  min-height: 300px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  padding: 20px;
}

.chart-placeholder {
  text-align: center;
}

.mock-chart {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 200px;
  margin-top: 20px;
}

.mock-bar {
  width: 40px;
  transition: all 0.3s ease;
}

.mock-bar:hover {
  opacity: 0.8;
  transform: scale(1.05);
}
</style> 