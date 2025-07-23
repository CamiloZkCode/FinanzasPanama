import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import AsidebarLayout from '@/layouts/AsidebarLayout.vue'
import GestionLayout from '@/layouts/GestionLayout.vue'
import AnalisisLayout from '@/layouts/AnalisisLayout.vue'

// Vistas
import Inicio from '@/views/Inicio.vue'
import GestionUsuarios from '@/views/GestionUsuarios.vue'
import Analisis from '@/views/Analisis.vue'

const routes = [
  {
    path: '/',
    component: AsidebarLayout,
    children: [
      {
        path: '',
        name: 'Inicio',
        component: Inicio
      }
    ]
  },
  {
    path: '/usuarios',
    component: GestionLayout,
    children: [
      {
        path: '',
        name: 'GestionUsuarios',
        component: GestionUsuarios
      }
    ]
  },
  {
    path: '/Caja',
    component: AnalisisLayout,
    children: [
      {
        path: '',
        name: 'Analisis',
        component: Analisis
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
