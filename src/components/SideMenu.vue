<template>
  <a-layout-sider v-if="showMenu" width="200" style="background: #fff">
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
  </a-layout-sider>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const selectedKeys = ref(['home'])
const openKeys = ref(['about'])

// 菜单配置数据
const menuItems = [
  {
    key: 'home',
    label: 'Home',
    path: '/'
  },
  {
    key: 'about',
    label: 'About',
    children: [
      {
        key: 'about-main',
        label: 'About Main',
        path: '/about'
      },
      {
        key: 'team',
        label: 'Team',
        path: '/about/team'
      },
      {
        key: 'contact',
        label: 'Contact',
        path: '/about/contact'
      }
    ]
  }
]

// 分离顶级菜单项和子菜单项
const topLevelItems = computed(() => menuItems.filter(item => !item.children))
const subMenuItems = computed(() => menuItems.filter(item => item.children))

// 计算是否显示菜单
const showMenu = computed(() => {
  return !route.path.startsWith('/test')
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
</script>

<style scoped>
.ant-layout-sider {
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
}
</style> 