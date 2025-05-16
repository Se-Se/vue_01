import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    children: [
      {
        path: 'team',
        name: 'Team',
        component: () => import('../views/about/Team.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('../views/about/Contact.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    redirect: '/test/page/dashboard',
    component: () => import('../layout/index.vue'),
    children: [
      // {
      //   path: '',
      //   redirect: '/test/page/dashboard'
      // },
      {
        path: 'page/:id',
        name: 'TestPage',
        component: () => import('../views/test/DynamicPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 