<template>
  <div class="dynamic-page">
    <h1>{{ pageData.title }}</h1>
    <div class="content">
      <a-card :title="pageData.cardTitle" style="width: 100%; margin-top: 16px">
        <component :is="pageData.component" />
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { defineOptions, computed } from 'vue'
import { useRoute } from 'vue-router'
import TestForm from './components/TestForm.vue'
import TestTable from './components/TestTable.vue'
import TestChart from './components/TestChart.vue'
import TestDashboard from './components/TestDashboard.vue'
import TestSettings from './components/TestSettings.vue'

defineOptions({
  name: 'TestDynamicPage'
})

const route = useRoute()
const pageId = computed(() => route.params.id)

// 页面配置数据
const pagesConfig = {
  'dashboard': {
    title: 'Dashboard',
    cardTitle: 'Overview',
    component: TestDashboard
  },
  'page1': {
    title: 'Test Page 1',
    cardTitle: 'Form Example',
    component: TestForm
  },
  'page2': {
    title: 'Test Page 2',
    cardTitle: 'Table Example',
    component: TestTable
  },
  'page3': {
    title: 'Test Page 3',
    cardTitle: 'Chart Example',
    component: TestChart
  },
  'settings': {
    title: 'Settings',
    cardTitle: 'System Settings',
    component: TestSettings
  }
}

const pageData = computed(() => pagesConfig[pageId.value] || {
  title: '404 - Page Not Found',
  cardTitle: 'Error',
  component: {
    template: '<div>The requested page was not found.</div>'
  }
})
</script>

<style scoped>
.dynamic-page {
  padding: 20px;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}
</style> 