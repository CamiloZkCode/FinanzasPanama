<template>
    <div>
        <div class="contenedor-botones">
            <button @click="mostrarCliente = true">
                Crear Cliente
                <span class="material-symbols-outlined">person_add</span>
            </button>
        </div>


        <!-- Modal Cliente -->
        <div v-if="mostrarCliente" class="modal-overlay">
            <div class="modal-content">
                <span class="material-symbols-outlined close-icon" @click="mostrarCliente = false">close</span>
                <h2>Registrar Cliente</h2>
                <form @submit.prevent="guardarCliente" enctype="multipart/form-data">
                    <input v-model="cliente.documento" type="number" placeholder="Documento" required />
                    <input v-model="cliente.nombre" placeholder="Nombre" required />
                    <input v-model="cliente.apellido" placeholder="Apellido" required />
                    <input v-model="cliente.direccion_casa" placeholder="Dirección casa" />
                    <input v-model="cliente.direccion_trabajo" placeholder="Dirección trabajo" />
                    <input v-model="cliente.telefono" placeholder="Teléfono" />
                    <input v-model="cliente.ocupacion" placeholder="Ocupación" />
                    <input v-model="cliente.referencia" placeholder="Referencia" />

                    <label>Selecciona la Ruta</label>
                    <select v-model="cliente.id_ruta">
                        <option disabled value="">Seleccione una ruta</option>
                        <option v-for="ruta in rutas" :key="ruta.id" :value="ruta.id">{{ ruta.nombre }}</option>
                    </select>

                    <!-- Archivos -->
                    <label>Foto de la cédula:</label>
                    <input type="file" @change="onFileChange($event, 'cedula')" accept="image/*,application/pdf" />

                    <label>Foto del negocio:</label>
                    <input type="file" @change="onFileChange($event, 'negocio')" accept="image/*,application/pdf" />

                    <label>Documento del negocio:</label>
                    <input type="file" @change="onFileChange($event, 'documentonegocio')"
                        accept="image/*,application/pdf" />
                    <button type="submit">Guardar Cliente</button>
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
                            <th>Cargo</th>
                            <th>Nombre</th>
                            <th>Jefe</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuariosFiltrados" :key="usuario.id_usuario">
                            <td>{{ usuario.id_usuario }}</td>
                            <td>{{ usuario.rol }}</td>
                            <td>{{ usuario.nombre }}</td>
                            <td>{{ usuario.jefe }}</td>
                            <td>
                                <span class="material-symbols-outlined delete">delete</span>
                            </td>
                            <td>
                                <span class="material-symbols-outlined edit">edit</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script setup>

import { ref, computed } from 'vue'

// Simula el usuario logueado
const usuarioLogueado = ref({
    id_usuario: 1,
    id_rol: 1 // 1 = Admin, 2 = Supervisor, 3 = Trabajador
})

// Control de visibilidad de modales
const mostrarUsuario = ref(false)
const mostrarCliente = ref(false)

// Datos del usuario a crear
const usuario = ref({
    id_usuario: '',
    nombre: '',
    correo: '',
    telefono: '',
    id_rol: '',
    id_administrador: null,
    id_supervisor: null,
})

// Datos del cliente a crear
const cliente = ref({
    nombre: '',
    direccion: '',
    telefono: ''
})

// Lista ficticia de supervisores
const supervisores = ref([
    { id: 101, nombre: 'Supervisor A' },
    { id: 102, nombre: 'Supervisor B' },
])

const guardarUsuario = () => {
    if (usuarioLogueado.value.id_rol === 1) {
        if (usuario.value.id_rol == 2) {
            usuario.value.id_administrador = usuarioLogueado.value.id_usuario
            usuario.value.id_supervisor = null
        } else if (usuario.value.id_rol == 3) {
            usuario.value.id_administrador = usuarioLogueado.value.id_usuario
            // id_supervisor ya viene del select
        }
    } else if (usuarioLogueado.value.id_rol === 2) {
        usuario.value.id_administrador = null
        usuario.value.id_supervisor = usuarioLogueado.value.id_usuario
    }

    console.log('Usuario registrado:', { ...usuario.value })
    mostrarUsuario.value = false
}

const guardarCliente = () => {
    console.log('Cliente registrado:', cliente.value)
    mostrarCliente.value = false
}

// Simulación de datos
const usuarios = ref([
    { id_usuario: 5554545, rol: 'Supervisor', nombre: 'Carlos', jefe: 'Alberto' },
    { id_usuario: 1234567, rol: 'Administrador', nombre: 'Laura', jefe: '-' },
    { id_usuario: 9876543, rol: 'Trabajador', nombre: 'Julián', jefe: 'Carlos' },
    { id_usuario: 1112223, rol: 'Supervisor', nombre: 'Paola', jefe: 'Alberto' }
])

const filtroCedula = ref('')
const filtroCargo = ref('')

// Filtro combinado
const usuariosFiltrados = computed(() => {
    return usuarios.value.filter(usuario => {
        const coincideCedula = usuario.id_usuario
            .toString()
            .includes(filtroCedula.value.trim())
        const coincideCargo =
            filtroCargo.value === '' ||
            usuario.rol.toLowerCase() === filtroCargo.value.toLowerCase()
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
    font-size: 1.2rem;
    color: var(--color-oscuro);
    cursor: pointer;
}

.filtro-cargo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.filtro-cargo .lblcargo {
    font-size: 1rem;
    margin-right: 1rem;
}

.filtro-cargo select {
    width: 16rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    border: 1px solid #ccc;
    font-size: 0.9rem;
    margin: 0;
    background: var(--color-blanco);
    color: var(--color-oscuro);
}


/*=====================Tabla============*/
.tabla-scrollable {
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
    height: 2rem;
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

    .filtro-cedula {
        width: 80%;
        max-width: 100%;
    }

    .filtro-cargo select {
        width: 100%;
        max-width: 100%;
    }

    .filtro-cargo {
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
    }


    .contenedor-tabla {
        position: relative;
        margin: 2rem 0 0 0;
    }

    .contenedor-tabla .tabla-usuarios {
        min-width: 150%;
    }

    .contenedor-tabla table {
        width: 100%;
        margin-top: 1rem;
        font-size: 1rem;
    }

    .contenedor-tabla table span {
        font-size: 1rem;
        cursor: pointer;
    }



}
</style>
