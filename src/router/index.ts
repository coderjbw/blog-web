import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/myHome.vue'
import Article from '@/views/article/myArticle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/article',
      name: 'article',
      component: Article,
    },
    { path: '/', redirect: '/home' },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import()
    // }
  ],
})

export default router
