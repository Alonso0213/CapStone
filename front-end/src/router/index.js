import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/parking',
    name: 'parking',
    component: () => import('../views/ParkingView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/single/:id?',
    name: 'singlePage',
    component: () => import('../views/singleView.vue')
  },
  {
    path: "/addparking",
    name: "addparking",
    component: () => import("../views/AddView.vue")
  },
  {
    path: "/adduser",
    name: "adduser",
    component: () => import("../views/addUserView.vue")
  },
  {
    path: "/editparking/:id",
    name: "editparking",
    component: () => import("../views/editView.vue"),
    props: true
  },
  {
    path: "/edituser/:id",
    name: "edituser",
    component: () => import("../views/editUserView.vue"),
    props: true
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
