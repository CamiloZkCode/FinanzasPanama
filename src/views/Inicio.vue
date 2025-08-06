<template>
    <h1>Tarjetas</h1>
    <AdminIncio  v-if="auth.isAdmin" />
    <SupervisorIncio  v-if="auth.isSupervisor" />
    <AsesorIncio  v-if="auth.isAsesor" />
</template>


<script setup>
import { useAuthStore } from '@/stores/auth'

import AdminIncio from '@/components/Admin/AdminInicio.vue'
import SupervisorIncio from '@/components/Supervisor/SupInicio.vue'
import AsesorIncio from '@/components/Asesor/AsesorInicio.vue'
const auth = useAuthStore()


</script>

