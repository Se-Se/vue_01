<template>
  <div class="test-table">
    <div class="table-actions">
      <a-space>
        <a-input-search
          v-model="searchText"
          placeholder="Search name"
          style="width: 200px"
          @search="onSearch"
        />
        <a-button type="primary" @click="handleAdd">Add New</a-button>
      </a-space>
    </div>
    <a-table
      :columns="columns"
      :data-source="filteredData"
      :pagination="{ pageSize: 5 }"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a-space>
            <a @click="handleEdit(record)">Edit</a>
            <a-divider type="vertical" />
            <a-popconfirm
              title="Are you sure you want to delete this item?"
              @confirm="handleDelete(record.key)"
            >
              <a>Delete</a>
            </a-popconfirm>
          </a-space>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { defineOptions, ref, computed } from 'vue'
import { message } from 'ant-design-vue'

defineOptions({
  name: 'TestTableComponent'
})

const searchText = ref('')

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
  {
    title: 'Action',
    key: 'action',
  },
]

const data = ref([
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
])

const filteredData = computed(() => {
  if (!searchText.value) return data.value
  return data.value.filter(item => 
    item.name.toLowerCase().includes(searchText.value.toLowerCase())
  )
})

const handleAdd = () => {
  message.info('Add functionality to be implemented')
}

const handleEdit = (record) => {
  message.info(`Editing record: ${record.name}`)
}

const handleDelete = (key) => {
  data.value = data.value.filter(item => item.key !== key)
  message.success('Record deleted successfully')
}

const onSearch = () => {
  message.info(`Searching for: ${searchText.value}`)
}
</script>

<style scoped>
.test-table {
  width: 100%;
}

.table-actions {
  margin-bottom: 16px;
}
</style> 