<template>
  <div>
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'action'">
          <a-space>
            <a-button type="primary" size="small">编辑</a-button>
            <a-button type="primary" danger size="small">删除</a-button>
          </a-space>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});

const { data } = toRefs(props);

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
  },
];
</script>

<style scoped>
.ant-table {
  margin: 20px;
}
</style> 