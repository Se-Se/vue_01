<template>
  <a-layout-sider v-model:collapsed="collapsed" :collapsedWidth="0" width="200" style="background: #fff"
    :trigger="null">
    <a-menu mode="inline" :selectedKeys="selectedKeys" :openKeys="openKeys" @select="onSelect"
      @openChange="onOpenChange" style="height: 100%">
      <!-- 统一渲染所有菜单项 -->
      <template v-for="item in menuItems" :key="item.key">
        <!-- 渲染普通菜单项 -->
        <a-menu-item v-if="!item.children" :key="item.key" @click.stop="handleMenuClick(item)">
          <template #icon>
            <component :is="item.icon" />
          </template>
          {{ item.label }}
        </a-menu-item>
        <!-- 渲染带子菜单的项 -->
        <a-sub-menu v-if="item.children" :key="item.key">
          <template #icon>
            <component :is="item.icon" />
          </template>
          <template #title>{{ item.label }}</template>
          <a-menu-item v-for="child in item.children" :key="child.key" @click.stop="handleMenuClick(child)">
            {{ child.label }}
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
    <div class="trigger-wrapper">
      <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
      <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
    </div>
  </a-layout-sider>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'

const route = useRoute()
const router = useRouter()
const selectedKeys = ref(['dashboard'])
const openKeys = ref(['test-group'])
const collapsed = ref(false)

// 监听路由 id 变化
watch(
  () => route.params.id,
  (newId) => {
    if (route.path.includes('/test')) {
      selectedKeys.value = [newId]
      if (newId !== 'dashboard' && newId !== 'settings') {
        openKeys.value = ['test-group']
      }
      // openKeys.value = ['test-group']
    }
  },
  { immediate: true }
)

// 菜单配置数据
const menuItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/test/page/dashboard'
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '/test/page/settings',
    icon: SettingOutlined
  },
  {
    key: 'test-group',
    label: 'Test Pages',
    icon: AppstoreOutlined,
    children: [
      {
        key: 'page1',
        label: 'Form Page',
        path: '/test/page/page1'
      },
      {
        key: 'page2',
        label: 'Table Page',
        path: '/test/page/page2'
      },
      {
        key: 'page3',
        label: 'Chart Page',
        path: '/test/page/page3'
      }
    ]
  },

]
// 根据当前路由更新选中的菜单项
// const updateSelectedKeys = () => {
//   const path = route.path
//   const id = route.params.id

//   if (path.includes('/test/page/')) {
//     selectedKeys.value = [id]
//     if (id !== 'dashboard' && id !== 'settings') {
//       openKeys.value = ['test-group']
//     }
//   }
// }

// // 监听路由变化
// router.afterEach(() => {
//   updateSelectedKeys()
// })

// 处理菜单点击
const handleMenuClick = (item) => {
  if (item.path) {
    router.push(item.path)
  }
}

const onSelect = ({ selectedKeys: keys }) => {
  selectedKeys.value = keys
}

const onOpenChange = (keys) => {
  openKeys.value = keys
}
</script>

<style scoped>
.ant-layout-sider {
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
}

.trigger-wrapper {
  position: absolute;
  right: -32px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: #fff;
  border-radius: 0 4px 4px 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.trigger {
  font-size: 18px;
  color: #001529;
}

.trigger:hover {
  color: #1890ff;
}
</style>