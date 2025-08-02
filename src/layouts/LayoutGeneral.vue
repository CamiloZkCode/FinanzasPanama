<template>
<div class="contenedor">
    <Asidebar />
    <main>
    <router-view />
    </main> 
    <div class="right">
        <BarraLogin />
    </div>
</div>

</template>

<script setup>
import Asidebar from '../components/Asidebar.vue'
import BarraLogin from '../components/BarraLogin.vue';


import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme';
const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})



</script>

<style>

.contenedor {
    display: grid;
    width: 96%;
    margin: 0 auto;
    gap: 1.4rem;
    grid-template-columns: 14rem auto 20rem;
    background: var(--color-background);
    color: var(--color-oscuro);
}

main{
    margin-top: 1rem;
}

.right{
    margin-top: 1.4rem;
}

/*======MEDIA QUERIES======*/
@media screen and (max-width: 1200px) {
    .contenedor{
        width: 94%;
        grid-template-columns: 7rem auto 23rem;
    }
}

@media screen and (max-width: 768px) {
    .contenedor{
        width: 100%;
        grid-template-columns: 1fr;
    }

    main{
        margin-top: 6rem;
        padding: 0 1rem;
    }

    .right{
        width: 94%;
        margin: 0 auto 2rem;
    }
}
</style>