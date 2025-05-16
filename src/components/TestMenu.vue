<template>
  <a-layout-sider
    v-model:collapsed="collapsed"
    :collapsedWidth="0"
    width="200"
    style="background: #fff"
    :trigger="null"
  >
    <a-menu
      mode="inline"
      :selectedKeys="selectedKeys"
      :openKeys="openKeys"
      @select="onSelect"
      @openChange="onOpenChange"
      style="height: 100%"
    >
      <!-- 渲染顶级菜单项 -->
      <a-menu-item
        v-for="item in topLevelItems"
        :key="item.key"
        @click="handleMenuClick(item)"
      >
        {{ item.label }}
      </a-menu-item>

      <!-- 渲染带子菜单的项 -->
      <a-sub-menu
        v-for="item in subMenuItems"
        :key="item.key"
      >
        <template #title>{{ item.label }}</template>
        <a-menu-item
          v-for="child in item.children"
          :key="child.key"
          @click="handleMenuClick(child)"
        >
          {{ child.label }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
    <div class="trigger-wrapper">
      <menu-unfold-outlined
        v-if="collapsed"
        class="trigger"
        @click="() => (collapsed = !collapsed)"
      />
      <menu-fold-outlined
        v-else
        class="trigger"
        @click="() => (collapsed = !collapsed)"
      />
    </div>
  </a-layout-sider>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'

const route = useRoute()
const router = useRouter()
const selectedKeys = ref(['dashboard'])
const openKeys = ref(['test-group'])
const collapsed = ref(false)

// 菜单配置数据
const menuItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/test/page/dashboard'
  },
  {
    key: 'test-group',
    label: 'Test Pages',
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
  {
    key: 'settings',
    label: 'Settings',
    path: '/test/page/settings'
  }
]

// 分离顶级菜单项和子菜单项
const topLevelItems = computed(() => menuItems.filter(item => !item.children))
const subMenuItems = computed(() => menuItems.filter(item => item.children))

// 根据当前路由更新选中的菜单项
const updateSelectedKeys = () => {
  const path = route.path
  const id = route.params.id
  
  if (path.includes('/test/page/')) {
    selectedKeys.value = [id]
    if (id !== 'dashboard' && id !== 'settings') {
      openKeys.value = ['test-group']
    }
  }
}

// 监听路由变化
router.afterEach(() => {
  updateSelectedKeys()
})

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

// 初始化选中状态
updateSelectedKeys()
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