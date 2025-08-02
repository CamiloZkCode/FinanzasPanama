<template>
    <div class="top">
        <button id="menu-btn" @click="abrirMenu" >
            <span class="material-symbols-outlined">
                menu
            </span>
        </button>
        <div class="theme-toggle " @click="themeStore.toggleTheme()">
            <span class="material-symbols-outlined" :class="{ active: !themeStore.darkMode }">
                light_mode
            </span>
            <span class="material-symbols-outlined" :class="{ active: themeStore.darkMode }">
                dark_mode
            </span>
        </div>
        <div class="perfil">
            <div class="info">
                <p>Hey, <b>Camilo</b></p>
                <small class="texto-muted">Admin</small>
            </div>
            <div class="perfil-foto">
                <img src="@/assets/img/logo.png" alt="">
            </div>
        </div>
    </div>
</template>


<script setup>
import { useMenuStore } from '@/stores/menu'
import { useThemeStore } from '@/stores/theme'


const menuStore = useMenuStore()
const abrirMenu = () => { menuStore.abrir()
};
const themeStore = useThemeStore();
</script>

<style scoped>

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}

.mi-enlace {
    color: var(--color-oscuro);
    text-decoration: none;
}

img {
    display: block;
    width: 100%;
}

h1 {
    font-weight: 800;
    font-size: 1.8rem;
}

h2 {
    font-size: 1.4rem;
    font-weight: 600;

}

h3 {
    font-size: 0.87rem;
}

h4 {
    font-size: 0.8rem;
}

h5 {
    font-size: 0.77rem;
}

small {
    font-size: 0.75rem;
}

.perfil-foto {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    overflow: hidden;
}

.texto-muted {
    color: var(--color-info-gris);
}

p {
    color: var(--color-dark-variant);
    margin: 0.2rem 0;
}


b {
    color: var(--color-oscuro)
}

.primary {
    color: var(--primer-color);
}

.danger {
    color: var(--color-peligro);
}

.success {
    color: var(--color-aprobado);
}

.warning {
    color: var(--color-riesgo);
}

/*========== Barra de Perfil ==========*/


.top {
    display: flex;
    justify-content: end;
    gap: 2rem;
}

.top button {
    display: none;
}

.top .theme-toggle {
    background: var(--color-light);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 1.6rem;
    width: 4.2rem;
    cursor: pointer;
    border-radius: var(--border-radius-1);
}

.top .theme-toggle span {
    font-size: 1.2rem;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 300ms ease-in, color 300ms ease-in, transform 300ms ease-in;

}

.top .theme-toggle span.active {
    background: var(--primer-color);
    color: var(--color-blanco);
    border-radius: var(--border-radius-1);
    transform: scale(1.1); 

}

.top .perfil {
    display: flex;
    text-align: right;
    gap: 2rem;
}

/*====================Media Querrys ================*/

@media screen and (max-width: 768px) {

    .top {
        position: fixed;
        top: 0;
        left: 0;
        align-items: center;
        padding: 0 0.8rem;
        height: 4.6rem;
        background: var(--color-blanco);
        margin: 0;
        width: 100%;
        z-index: 2;
        box-shadow: 0 1rem 1rem var(--color-light);
    }

    .top .theme-toggle {
        width: 4.4rem;
        position: absolute;
        left: 40%;
    }



    .top button {
        display: inline-block;
        background: transparent;
        cursor: pointer;
        color:var(--color-oscuro);
        position: absolute;
        left: 1rem;
    }

    .top button span{
        font-size: 2rem;
    }
}
</style>