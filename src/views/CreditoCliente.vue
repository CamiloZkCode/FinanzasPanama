<template>
    <h1>Creditos Clientes</h1>
    <AdminClientes  />
    <SupClientes v-if="auth.isSupervisor"/>
    <AsesorClientes v-if="auth.isAsesor"/>

</template>


<script setup>

import { useAuthStore } from '@/stores/auth'

import AdminClientes from '../components/Admin/AdminClientes.vue';
import SupClientes from '@/components/Supervisor/SupClientes.vue'
import AsesorClientes from '../components/Asesor/AsesorClientes.vue';

const auth = useAuthStore()
</script>