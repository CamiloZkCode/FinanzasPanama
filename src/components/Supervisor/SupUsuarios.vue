<template>
    <div>
        <div class="contenedor-botones">
            <button @click="mostrarUsuario = true">
                Crear Usuario
                <span class="material-symbols-outlined">assignment_ind</span>
            </button>
        </div>

        <!-- Modal: Crear Usuario -->
        <!-- Modal Usuario -->
        <div v-if="mostrarUsuario" class="modal-overlay">
            <div class="modal-content">
                <span class="material-symbols-outlined close-icon" @click="mostrarUsuario = false;limpiarFormulario()">close</span>

                <h2>Registrar Trabajador</h2>

                <form @submit.prevent="guardarUsuario">
                    <input v-model="usuario.id_usuario" type="number" placeholder="Cédula" required />
                    <input v-model="usuario.nombre" placeholder="Nombre" required />
                    <input v-model="usuario.correo" type="email" placeholder="Correo" required />
                    <input v-model="usuario.telefono" placeholder="Teléfono" required />

                    <button type="submit">Guardar</button>
                </form>
            </div>
        </div>

        <div class="contenedor-tabla">
            <div class="filtros">
                <div class="filtro-cedula">
                    <input class="filtro-ced" type="text" placeholder="Buscar por cédula" v-model="filtroCedula" />
                    <span class="material-symbols-outlined">search</span>
                </div>
            </div>

            <div class="tabla-scrollable">
                <table class="tabla-usuarios">
                    <thead>
                        <tr>
                            <th>N°CC</th>
                            <th>Nombre</th>
                            <th>Telefono</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="usuario in usuariosFiltrados" :key="usuario.id_usuario">
                            <tr>
                                <td>{{ usuario.id_usuario }}</td>
                                <td>{{ usuario.nombre }}</td>
                                <td>{{ usuario.telefono }}</td>
                                <td>{{ usuario.correo }}</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script setup>

import { ref, computed,onMounted } from 'vue'
import { registrarUsuario,creartablaUsuarioXSupervisor} from '@/services/usuario'
import { useAuthStore } from '@/stores/auth'
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.css'

//Recupera id administrador 
const authStore = useAuthStore()
const usuarioLogueado = computed(() => authStore.user)

const mostrarUsuario = ref(false)

// Modelo del usuario
const usuario = ref({
    id_usuario: '',
    nombre: '',
    correo: '',
    telefono: '',
    id_rol: '3',
    id_administrador: null,

})
//Funcion para limpiar el formulario al cerrar el modal
const limpiarFormulario = () => {
  usuario.value = {
    id_usuario: "",
    nombre: "",
    correo: "",
    telefono: "",
    id_rol: '3',
    id_administrador: null
  };
};

onMounted(async () => {
  console.log('Iniciando carga de datos...')
  try {
    await cargarUsuariosDelSupervisor()
    console.log('Datos cargados completamente')
  } catch (error) {
    console.error('Error en mounted:', error)
  }
})

// Función para guardar usuario (aquí accedes al la url gestionada por axios)
const guardarUsuario = async () => {
  try {
    // Siempre asigna el ID del usuario logueado como supervisor
    usuario.value.id_administrador = usuarioLogueado.value.id

    const respuesta= await  registrarUsuario(usuario.value);

    alertify.alert(
            'Usuario registrado con éxito',
            `
                <div style="text-align: left;">
                <strong>Nombre de usuario:</strong> ${respuesta.datos.username}<br>
                <strong>Contraseña temporal:</strong> ${respuesta.datos.contraseña_temporal}
                </div>
            `,
            function () {
                // ✅ Esta función se ejecuta SÓLO cuando el usuario hace clic en 'OK'.
                // Aquí cerramos el modal principal, limpiamos el formulario y recargamos los datos.
                mostrarUsuario.value = false;
                limpiarFormulario();
                cargarUsuariosDelSupervisor();
            }
        ).set({
            transition: 'fade',
            movable: false,
            resizable: false,
            pinnable: false,
            closable: true,
        });

    } catch (error) {
        console.error(error);
        alertify.alert('Error', error.message || 'Error al registrar usuario');
    }
};

async function cargarUsuariosDelSupervisor() {
  try {
    const data = {
      id_administrador: usuarioLogueado.value.id 
    }

    const resultado = await creartablaUsuarioXSupervisor(data)
    console.log("Resultado crudo:", resultado)
    
    // FORMA MÁS SEGURA DE ASIGNAR (garantiza reactividad)
    usuarios.value = Array.isArray(resultado) ? [...resultado] : []
    
    console.log("Usuarios después de asignar:", usuarios.value)
    console.log("¿Es array?", Array.isArray(usuarios.value))
    console.log("Longitud:", usuarios.value.length)

  } catch (error) {
    console.error("Error al cargar usuarios:", error)
    usuarios.value = [] // Limpiar en caso de error
  }
}
// Lista  de usuarios
const usuarios = ref([
])

// Filtros
const filtroCedula = ref('')
const filtroCargo = ref('')

// Filtro dinámico
const usuariosFiltrados = computed(() => {
    return usuarios.value.filter(usuario => {
        const coincideCedula = usuario.id_usuario.toString().includes(filtroCedula.value.trim())
        const coincideCargo = filtroCargo.value === '' || usuario.rol.toLowerCase() === filtroCargo.value.toLowerCase()
        return coincideCedula && coincideCargo
    })
})
</script>


<style scoped>
:root {
    --primer-color: #0188db;
    --color-peligro: #b6212b;
    --color-aprobado: #67c119;
    --color-riesgo: #f4b908;
    --color-morado: #b5106b;
    --color-rosado: #D726A3;
    --color-blanco: #FFF;
    --color-info-gris: #7d8da1;
    --color-info-luz: #dce1eb;
    --color-oscuro: #363949;
    --color-light: rgba(132, 139, 200, 0.18);
    --color-primary-variant: #2749aa;
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

.contenedor-botones {
    margin-top: 1.5rem;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    background: var(--primer-color);
    color: var(--color-blanco);
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    height: 2.2rem;
    line-height: 1;
}

button:hover {
    background: var(--primer-color);
}

input,
select {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid var(--color-info-luz);
    border-radius: 6px;
}

.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
}

.modal-content {
    background: var(--color-background);
    padding: 2rem;
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.close-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 28px;
    color: var(--color-peligro);
}

.close-icon:hover {
    color: var(--color-peligro);
}

.contenedor-tabla {
    margin-top: 1.0rem;
}

/*===========Filtro=================*/

.filtros {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 0.5rem;
    align-items: center;
}

.filtro-cedula {
    display: flex;
    align-items: center;
    background: var(--color-blanco);
    padding: 0 0.6rem;
    border-radius: 0.4rem;
    border: 1px solid var(--colo);
    width: 16rem;
}

.filtro-cedula .filtro-ced {
    border: none;
    outline: none;
    background: transparent;
    flex: 1;
    padding: 0.8rem;
    font-size: 1rem;
    justify-content: center;
    margin: 0;
    color: var(--color-oscuro);
}

.filtro-cedula .material-symbols-outlined {
    margin-left: 0.5rem;
    font-size: 1.4rem;
    color: var(--color-oscuro);
    cursor: pointer;
}



/*=====================Tabla============*/
.tabla-scrollable {
    max-height: 60vh;
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 0.5rem;
    background: var(--color-blanco);
    border-radius: var(--card-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--card-padding);
    transition: all 300ms ease;

}

.tabla-scrollable::-webkit-scrollbar {
    height: 0.5rem;
}

.tabla-scrollable::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 0.8rem;
}

.contenedor-tabla .tabla-usuarios {
    width: auto;
    min-width: 100%;
    border-collapse: collapse;
}

.contenedor-tabla table {
    text-align: center;
    transition: all 300ms ease;
    margin-top: 0.5rem;
    font-size: 1rem;
    width: 100%;
    padding: 0;
    box-shadow: none;
    background: transparent;
}

.contenedor-tabla .tabla-scrollable:hover {
    box-shadow: none;
}

table tbody td {
    height: 3rem;
    border-bottom: 1px solid var(--color-light);
    color: var(--color-dark-variant);
}

table tbody tr:last-child td {
    border: none;
}


/*======================Media Querry====================*/

@media screen and (max-width: 768px) {

    /*==============Modales===========================*/
    .modal-content {
        width: 90%;
        height: auto;
        max-height: 90vh;
        overflow-y: auto;
        padding: 1.5rem;
        font-size: 0.9rem;
    }


    .close-icon {
        font-size: 24px;
        top: 8px;
        right: 8px;
    }

    .modal-content h2 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .modal-content input,
    .modal-content select {
        font-size: 1.2rem;
        padding: 0.6rem;
    }

    .modal-content button {
        font-size: 0.9rem;
        padding: 0.6rem 1rem;
    }



    /*===tabla ====*/

    input,
    select {
        font-size: 0.9rem;
        padding: 0.6rem;
    }

    .filtros {
        flex-direction: column;
        align-items: stretch;
        align-items: center;
        gap: 1rem;
    }

    .tabla-scrollable {
        max-height: 50vh;
    }


    .contenedor-tabla {
        position: relative;
        margin: 2rem 0 0 0;
    }

    .contenedor-tabla .tabla-usuarios {
        min-width: 110%;
    }

    .contenedor-tabla table {
        width: 100%;
        margin-top: 1rem;
        font-size: 0.85rem;
    }


    table th:last-child,
    table td:last-child {
        font-size: 0.8rem;
    }


}
</style>
