<template>
    <aside :class="{ abierto: menuStore.abierto }">
        <div class="top">
            <div class="logo">
                <img src="@/assets/img/logo.png" alt="logo">
                <h2>YAG <span class="danger">BANK</span></h2>
            </div>
            <div class="cerrar" id="cerrar-btn" @click="cerrarMenu">
                <span class="material-symbols-outlined">
                    close
                </span>
            </div>
        </div>

        <div class="sidebar">
            <router-link to="/inicio" class="mi-enlace" active-class="active">
                <span class="material-symbols-outlined">
                    browse
                </span>
                <h3>Inicio</h3>
            </router-link>

            <router-link   v-if="auth.isAdmin || auth.isSupervisor" to="/usuarios" class="mi-enlace" active-class="active">
                <span class="material-symbols-outlined">
                    supervisor_account
                </span>
                <h3>Gestion Usuarios</h3>
            </router-link>


            <router-link to="/credito-cliente" class="mi-enlace" active-class="active">
                <span class="material-symbols-outlined">
                    payment_arrow_down
                </span>
                <h3>Credito Cliente</h3>
            </router-link>

            <router-link  v-if="auth.isAdmin" to="/credito-funcionario" class="mi-enlace" active-class="active">
                <span class="material-symbols-outlined">
                    payments
                </span>
                <h3>Credito Funcionario</h3>
            </router-link>

            <router-link  v-if="auth.isAdmin" to="/ingresos" class="mi-enlace" active-class="active">
                <span class="material-symbols-outlined">
                    checkbook
                </span>
                <h3>Informe Ingresos</h3>
            </router-link>


            <router-link to="/gastos" class="mi-enlace" active-class="active">
                <span class="material-symbols-outlined">
                    request_quote
                </span>
                <h3>informe Gastos</h3>
            </router-link>

            <router-link to="/caja" class="mi-enlace" active-class="active">
                <span class="material-symbols-outlined">
                    point_of_sale
                </span>
                <h3>Caja</h3>
            </router-link>


            <a href="#" @click.prevent="handleLogout" class="mi-enlace">
                <span class="material-symbols-outlined">logout</span>
                <h3>Cerrar Sesión</h3>
            </a>


            <router-link to="/politicas" class="mi-enlace" active-class="active">
                <span class="material-symbols-outlined">
                    info
                </span>
                <h3>Politicas</h3>
            </router-link>


        </div>
    </aside>
</template>

<script setup>

/*========================Cerrar Sesion =====================*/
import { useAuthStore } from '@/stores/auth'
import { useMenuStore } from '@/stores/menu'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const menuStore = useMenuStore()
const router = useRouter()


function cerrarMenu() {
  menuStore.abierto = false
}

function handleLogout() {
  auth.logout()
  router.push('/')
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

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

/*===========================ASIDEBAR ===============*/


aside {
    height: 100vh;
}

aside .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;

}

aside .logo {
    display: flex;
    gap: 0.5rem;
}

aside .logo img {
    width: 3rem;
    height: 3rem;
}

aside .cerrar {
    display: none;
}


/*==================== SIDEBAR ================*/

aside .sidebar {
    display: flex;
    flex-direction: column;
    height: 86vh;
    position: relative;
    top: 1.5rem;
}

aside h3 {
    font-weight: 500;
}

aside .sidebar .mi-enlace {
    display: flex;
    color: var(--color-info-gris);
    margin-left: 1.6rem;
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 3.4rem;
    transition: all 300ms ease;
}

aside .sidebar .mi-enlace span {
    font-size: 1.6rem;
    transition: all 300ms ease;
}

aside .sidebar .mi-enlace:last-child {
    position: absolute;
    bottom: 2rem;
    width: 100%;
}


aside .sidebar .mi-enlace.active {
    background: var(--color-light);
    color: var(--primer-color);
    margin-left: 0;
}



aside .sidebar .mi-enlace.active:before {
    content: "";
    width: 6px;
    height: 100%;
    background: var(--primer-color);
}

aside .sidebar .mi-enlace.active span {
    color: var(--primer-color);
    margin-left: calc(1rem - 3px);
}

aside .sidebar .mi-enlace:hover {
    color: var(--primer-color);
}

aside .sidebar .mi-enlace:hover span {
    margin-left: 1rem;
}


/*==================== MEDIA QUERIES ==================*/
@media screen and (max-width: 1200px) {

    aside .logo h2 {
        display: none;
    }

    aside .sidebar h3 {
        display: none;
    }


    aside .sidebar .mi-enlace {
        width: 5.6rem;
    }


    aside .sidebar .mi-enlace:last-child {
        position: relative;
        margin-top: 1.8rem;
    }

}

/*===768===*/

@media screen and (max-width: 768px) {
    aside {
        position: fixed;
        left: -100%;
        background: var(--color-blanco);
        width: 18rem;
        z-index: 30;
        box-shadow: 1rem 3rem 4rem var(--color-light);
        height: 100vh;
        padding-right: var(--card-padding);
        display: none;
        animation: ShowMenu 400ms ease forwards;
    }

    @keyframes ShowMenu {
        to {
            left: 0;
        }
    }

    aside.abierto {
        display: block;
    }


    aside .logo {
        margin-left: 1rem;
    }

    aside .logo h2 {
        display: inline;
    }

    aside .sidebar h3 {
        display: inline;
    }

    aside .sidebar .mi-enlace {
        width: 100%;
        height: 3.9rem;
    }

    aside .sidebar .mi-enlace:last-child {
        position: absolute;
        bottom: 5rem;
    }

    aside .cerrar {
        display: inline-block;
        cursor: pointer;
    }




}
</style>