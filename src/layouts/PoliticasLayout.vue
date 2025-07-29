<template>
    <div class="contenedor">
        <Asidebar />
        <main>
            <RouterView />
        </main>
        <div class="right">
            <BarraLogin />
        </div>
    </div>
</template>

<script setup>
import Asidebar from '../components/Asidebar.vue'
import BarraLogin from '../components/BarraLogin.vue';
</script>