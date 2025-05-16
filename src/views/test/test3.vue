<template>
  <div class="test3-page">
    <h1>Test Page 3</h1>
    <div class="content">
      <a-card title="Table Example" style="width: 100%; margin-top: 16px">
        <a-table :columns="columns" :data-source="data">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>Name</span>
            </template>
          </template>
        </a-table>
      </a-card>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'

defineOptions({
  name: 'TestPageThree'
})

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
  },
]
</script>

<style scoped>
.test3-page {
  padding: 20px;
}

.content {
  width: 100%;
}
</style> 