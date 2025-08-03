<template>
    <h1>Gestion Usuarios</h1>
    <AdminTablaUsuarios v-if="auth.isAdmin" />
    <SupTablaUsuarios  v-else-if="auth.isSupervisor" />
</template>



<script setup>
import { useAuthStore } from '@/stores/auth'
import AdminTablaUsuarios from '../components/Admin/AdminUsuarios.vue'
import SupTablaUsuarios from '../components/Supervisor/SupUsuarios.vue'

const auth = useAuthStore()
</script>