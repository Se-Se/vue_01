<template>
  <div>
    <a-collapse v-model="activeKeys">
      <a-collapse-panel v-for="(item, index) in collapseData" :key="index" :header="item.title">
        <a-collapse v-model="item.activeKeys">
          <a-collapse-panel v-for="(subItem, subIndex) in item.children" :key="subIndex" :header="subItem.title">
            <div v-for="(category, catIndex) in subItem.categories" :key="catIndex">
              <h3 style="margin: 16px 0 8px 0">{{ category.title }}</h3>
              <DataTable :data="category.data" />
            </div>
          </a-collapse-panel>
        </a-collapse>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from './DataTable.vue';

const activeKeys = ref(['0']);

const collapseData = ref([
  {
    title: '第一组',
    activeKeys: ['0-0'],
    children: [
      {
        title: '第一组-第一项',
        categories: [
          {
            title: '分类一',
            data: [
              {
                key: '1',
                name: '张三',
                age: 32,
                address: '北京市朝阳区',
              },
              {
                key: '2',
                name: '李四',
                age: 42,
                address: '上海市浦东新区',
              }
            ]
          },
          {
            title: '分类二',
            data: [
              {
                key: '3',
                name: '王五',
                age: 28,
                address: '广州市天河区',
              },
              {
                key: '4',
                name: '赵六',
                age: 35,
                address: '深圳市南山区',
              }
            ]
          }
        ]
      },
      {
        title: '第一组-第二项',
        categories: [
          {
            title: '分类三',
            data: [
              {
                key: '5',
                name: '钱七',
                age: 45,
                address: '杭州市西湖区',
              },
              {
                key: '6',
                name: '孙八',
                age: 38,
                address: '成都市武侯区',
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '第二组',
    activeKeys: ['1-0'],
    children: [
      {
        title: '第二组-第一项',
        categories: [
          {
            title: '分类四',
            data: [
              {
                key: '7',
                name: '周九',
                age: 29,
                address: '武汉市江汉区',
              },
              {
                key: '8',
                name: '吴十',
                age: 31,
                address: '南京市玄武区',
              }
            ]
          }
        ]
      },
      {
        title: '第二组-第二项',
        categories: [
          {
            title: '分类五',
            data: [
              {
                key: '9',
                name: '郑十一',
                age: 27,
                address: '西安市雁塔区',
              },
              {
                key: '10',
                name: '王十二',
                age: 33,
                address: '重庆市渝中区',
              }
            ]
          }
        ]
      }
    ]
  }
]);
</script>

<style scoped>
.ant-collapse {
  margin: 20px;
}
</style> 