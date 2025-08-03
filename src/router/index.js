import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

// Layout
import LayoutGeneral from '@/layouts/LayoutGeneral.vue'

// Vistas
import Login from '@/views/Login.vue'
import Inicio from '@/views/Inicio.vue'
import GestionUsuarios from '@/views/GestionUsuarios.vue'
import CreditoCliente from '@/views/CreditoCliente.vue'
import CreditoFuncionario from '@/views/CreditoFuncionario.vue'
import InformeGastos from '@/views/InformeGastos.vue'
import InformeIngresos from '@/views/Ingresos.vue'
import Caja from '@/views/Caja.vue'
import Politicas from '@/views/Politicas.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/inicio',
    component: LayoutGeneral,
    meta: { requiereAuth: true },
    children: [
      { path: '', name: 'Inicio', component: Inicio }
    ]
  },
  {
    path: '/usuarios',
    component: LayoutGeneral,
    meta: { requiereAuth: true },
    children: [
      { path: '', name: 'GestionUsuarios', component: GestionUsuarios }
    ]
  },
  {
    path: '/credito-cliente',
    component: LayoutGeneral,
    meta: { requiereAuth: true },
    children: [
      { path: '', name: 'CreditoCliente', component: CreditoCliente }
    ]
  },
  {
    path: '/credito-funcionario',
    component: LayoutGeneral,
    meta: { requiereAuth: true },
    children: [
      { path: '', name: 'CreditoFuncionario', component: CreditoFuncionario }
    ]
  },
  {
    path: '/ingresos',
    component: LayoutGeneral,
    meta: { requiereAuth: true },
    children: [
      { path: '', name: 'InformeIngresos', component: InformeIngresos }
    ]
  },
  {
    path: '/gastos',
    component: LayoutGeneral,
    meta: { requiereAuth: true },
    children: [
      { path: '', name: 'InformeGastos', component: InformeGastos }
    ]
  },
  {
    path: '/caja',
    component: LayoutGeneral,
    meta: { requiereAuth: true },
    children: [
      { path: '', name: 'Caja', component: Caja }
    ]
  },
  {
    path: '/politicas',
    component: LayoutGeneral,
    meta: { requiereAuth: true },
    children: [
      { path: '', name: 'Politicas', component: Politicas }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore()

  if (!auth.isAuthenticated) {
    auth.isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'
    if (auth.isAuthenticated) {
      auth.user = JSON.parse(localStorage.getItem('user') || 'null')
    }
  }

  if (to.name === 'Login' && auth.isAuthenticated) {
    return next('/inicio')
  }

  if (to.meta.requiresAuth) {
    if (!auth.isAuthenticated) {
      return next({ name: 'Login' })
    }
    
    // Verificar si el token sigue válido
    const isValid = await auth.checkAuth()
    if (!isValid) {
      return next({ name: 'Login' })
    }
  }

  next()
})

export default router
