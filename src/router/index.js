import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import rootText from '../components/BodyTo/rootText.vue'
const routes = [
  {
    path:'',
    redirect: '/rootText'
    
  },
  {
    path: '/',
    name: 'Home',
    component: Home,rootText,
    children:[
      {
      path: '/about',
      name: 'About',
     
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/Photoalbum',
      name: 'Photoalbum',
     
      component: () => import(/* webpackChunkName: "about" */ '../components/BodyTo/Photoalbum.vue')      
    },
  {
      path:'/rootText',
      name:'rootText',
      component:()=>import('../components/BodyTo/rootText.vue')

  },

  ]
  },
  {
    path:'/404',
    name:'404',
    component:()=>import("../views/404.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
