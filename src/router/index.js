import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Layouts
import AsidebarLayout from '@/layouts/AsidebarLayout.vue'
import GestionLayout from '@/layouts/GestionLayout.vue'
import AnalisisLayout from '@/layouts/AnalisisLayout.vue'
import PoliticasLayout from '../layouts/PoliticasLayout.vue'

// Vistas
import Login from '@/views/Login.vue'
import Inicio from '@/views/Inicio.vue'
import GestionUsuarios from '@/views/GestionUsuarios.vue'
import Analisis from '@/views/Analisis.vue'
import Politicas from '../views/Politicas.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/inicio',
    component: AsidebarLayout,
    meta: { requiereAuth: true },
    children: [{ path: '', name: 'Inicio', component: Inicio }]
  },
  {
    path: '/usuarios',
    component: GestionLayout,
    meta: { requiereAuth: true },
    children: [{ path: '', name: 'GestionUsuarios', component: GestionUsuarios }]
  },
  {
    path: '/Caja',
    component: AnalisisLayout,
    meta: { requiereAuth: true },
    children: [{ path: '', name: 'Analisis', component: Analisis }]
  },
  {
    path: '/Politicas',
    component: PoliticasLayout,
    meta: { requiereAuth: true },
    children: [{ path: '', name: 'Politicas', component: Politicas }]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  // sincronizar con localStorage si recargó
  if (!auth.isAuthenticated) {
    auth.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
  }

  if (to.name === 'Login' && auth.isAuthenticated) {
    return next('/inicio')
  }

  if (to.meta.requiereAuth && !auth.isAuthenticated) {
    return next({ name: 'Login' })
  }

  next()
})

export default router
