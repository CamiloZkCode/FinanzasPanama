<template>
  <main>
    <div class="contenedor">
      <div class="toggle-box">
        <div class="toggle-panel">
          <h1>¡ Bienvenido !</h1>
          <h2 class="empresa">FINANZAS <span class="danger">VY</span></h2>
          <img class="logo" src="@/assets/img/logo.png" alt="logo" />
          <p class="mensaje">Ingrese sus datos personales para usar todas las funciones del sitio</p>
        </div>
      </div>

      <div class="box-formulario">
        <form @submit.prevent="handleLogin">
          <h1>Inicio Sesión</h1>
          <div class="input-box">
            <input type="text" v-model="username" placeholder="Usuario" required />
            <span class="material-symbols-outlined">person</span>
          </div>

          <div class="input-box">
            <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Contraseña" required />
            <span class="material-symbols-outlined" @click="showPassword = !showPassword" style="cursor: pointer;">
              {{ showPassword ? 'visibility' : 'visibility_off' }}
            </span>
          </div>

          <button type="submit" class="btn-sesion">Iniciar</button>
          <p v-if="error" class="error">{{ error }}</p>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>

/*========AUTENTIFICACION LOGIN ===========*/
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const username = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  if (username.value && password.value) {
    auth.login()
    router.push('/inicio')
  } else {
    error.value = 'Por favor, ingrese las credenciales'
  }
}

/*==== PORTAR TEMA CLARO Y OSCURO === */
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()

onMounted(() => {
  theme.initTheme()
})

/*=====ESTADO CONTRASEÑA =====*/
const showPassword = ref(false)



</script>

<style scoped>
:root {
  --primer-color: #7380ec;
  --color-peligro: #ff7782;
  --color-aprobado: #41f1b6;
  --color-riesgo: #ffbb55;
  --color-blanco: #fff;
  --color-info-gris: #7d8da1;
  --color-info-luz: #dce1eb;
  --color-oscuro: #363949;
  --color-light: rgba(132, 139, 200, 0.18);
  --color-primary-variant: #111e88;
  --color-dark-variant: #677483;
  --color-background: #f6f6f9;
  --card-border-radius: 2rem;
  --border-radius-1: 0.4rem;
  --border-radius-2: 0.8rem;
  --border-radius-3: 1.2rem;

  --card-padding: 1.8rem;
  --padding-1: 1.2rem;
  --box-shadow: 0 2rem 3rem var(--color-light);
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
  font-size: 1.2rem;
  font-weight: 600;
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

main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--color-background);
  margin: 0;
}

.contenedor {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 850px;
  height: 550px;
  background: var(--color-blanco);
  border-radius: var(--card-border-radius);
  box-shadow: var(--box-shadow);
  overflow: hidden;
}

.toggle-box {
  background: var(--color-blanco);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: var(--color-oscuro);
  text-align: center;
}

.toggle-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
}

.toggle-panel h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-oscuro);
}

.toggle-panel .empresa {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: var(--color-oscuro);
}

.logo {
  width: 120px;
  height: auto;
  margin-bottom: 1rem;
}

.toggle-panel .mensaje {
  font-size: 1rem;
  color: var(--color-dark-variant);
  margin-top: 1rem;
  max-width: 300px;
}



/* ⚪ Panel derecho */
.box-formulario {
  background-color: var(--color-blanco);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: var(--color-oscuro);
  text-align: center;
}

.box-formulario form {
  width: 100%;
}

h1 {
  font-weight: 800;
  font-size: 1.8rem;
  color: var(--color-oscuro);
  margin-bottom: 1.5rem;
}

.input-box {
  position: relative;
  margin: 2rem 0;
}

.input-box input {
  width: 100%;
  padding: 1rem 2rem 1rem 1.5rem;
  background: var(--color-background);
  border: 1px solid var(--color-info-luz);
  border-radius: var(--border-radius-1);
  color: var(--color-oscuro);
  font-size: 1rem;
  font-weight: 500;
  transition: 0.3s ease;
}

.input-box input::placeholder {
  color: var(--color-info-gris);
  font-weight: 400;
}

.input-box span {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: var(--color-oscuro);
}

input:focus {
  border-color: var(--primer-color);
  outline: none;
  background: var(--color-background);
}

button {
  width: 50%;
  padding: 0.75rem;
  background: var(--primer-color);
  color: var(--color-blanco);
  font-weight: 500;
  font-size: 1rem;
  border: none;
  border-radius: var(--border-radius-2);
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  background: var(--color-primary-variant);
}

.error {
  color: var(--color-peligro);
  margin-top: 0.75rem;
  font-size: 0.9rem;
}

/*===============Media Query===============================*/

@media screen and (max-width:768px) {

  main {
    height: auto;
    align-items: center;
  }

  .contenedor {
    display: grid;
    grid-template-columns: 1fr;

  }

  .toggle-box,
  .box-formulario {
    padding: 1rem 1.5rem;
  }

  .toggle-panel {
    padding: 0;
  }

  .toggle-panel h1 {
    font-size: 2rem;
    margin-bottom: 0.2rem;
  }

  .toggle-panel .empresa {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .box-formulario h1 {
    display: none;
  }

  .box-formulario form {
    padding: 0;
    margin: 0;
  }

  .input-box {
    margin: 0.8rem 0;
  }

}
</style>
