import { createRouter, createWebHistory,RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from '../views/EstudianteView.vue'
import EstudianteNew from '../views/EstudianteNew.vue'
import EstudianteEdit from '../views/EstudianteEdit.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes= [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createE',
    name: 'createE',
    component: EstudianteNew
  },
  {
    path: '/editE/:id',
    name: 'editE',
    component: EstudianteEdit
  },
  {
    path: '/viewE/:id',
    name: 'viewE',
    component: EstudianteView
  },
  {
    path: '/',
    component: Home},
  {
    path: '/login', 
    component: Login},
  {
    path: '/register',
    component: Register},
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
