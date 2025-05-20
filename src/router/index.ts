import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
// import RegisterView from '@/views/RegisterView.vue'
// import ProductDetailView from '@/views/ProductDetailView.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    // {
    //   path: '/regist',
    //   name: 'regist',
    //   component: RegisterView,
    // },
    // {
    //   path: '/products/:id',
    //   name: 'product-detail',
    //   component: ProductDetailView,
    //   props: true,
    // },
  ],
})

export default router
