<template>
    <div>
        <!-- Tabla -->
        <div class="contenedor-tabla">


            <div class="filtros">
                <div class="filtro-nombre">
                    <input class="filtro-nom" type="text" placeholder="Busqueda por nombre" />
                    <span class="material-symbols-outlined">search</span>
                </div>
            </div>

            <div class="tabla-scrollable">
                <table class="tabla-clientes">
                    <thead>
                        <tr>
                            <th class="columna-min">N°Pagada</th>
                            <th>Nombre</th>
                            <th>Prestamo</th>
                            <th>Supervisor</th>
                            <th>Asesor</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="Clientes in CreditoCliente" :key="Clientes.id_cliente">
                            <tr>
                                <td class="columna-min ">
                                    <div class="estado">
                                        {{ Clientes.cuotas_pagadas }}/{{ Clientes.cuotas_deberia }}
                                    </div>
                                </td>
                                <td>{{ Clientes.nombre }}</td>
                                <td>${{ Clientes.prestamo_total }}</td>
                                <td>{{ Clientes.nombre }}</td>
                                <td>{{ Clientes.nombre }}</td>
                                <td>
                                    <span class="material-symbols-outlined ver-mas"
                                        @click="toggleExpand(Clientes.id_cliente)">
                                        {{ usuarioExpandido === Clientes.id_cliente ? 'keyboard_double_arrow_up' :
                                            'keyboard_double_arrow_down' }}
                                    </span>
                                </td>
                            </tr>
                            <tr v-if="usuarioExpandido === Clientes.id_cliente">
                                <td colspan="7" class="fila-expandida">
                                    <div class="info-extra">
                                        <strong>Dirección:</strong> {{ Clientes.direccion }} &nbsp;&nbsp;|&nbsp;&nbsp;
                                        <strong>Teléfono:</strong> {{ Clientes.telefono }}
                                    </div>

                                    <div class="info-extra">
                                        <strong>Credito:</strong> ${{ Clientes.prestamo_total }}
                                        &nbsp;&nbsp;|&nbsp;&nbsp;
                                        <strong>Numero Cuotas:</strong> {{ Clientes.numero_cuotas }}
                                    </div>

                                    <div class="info-extra">
                                        <strong>Solicitud Credito:</strong> {{ Clientes.fecha_prestamo }}
                                        &nbsp;&nbsp;|&nbsp;&nbsp;
                                        <strong>Fecha Finalización</strong> {{ Clientes.fecha_finalizacion }}
                                    </div>

                                    <div class="info-extra">
                                        <div class="calendario-cuotas">
                                            <div class="grid-cuotas">
                                                <div v-for="n in generarCuotasPorCliente(Clientes.numero_cuotas)"
                                                    :key="n" class="cuota">
                                                    {{ n }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>

            <div class="contador-tarjetas">
                <h4 class="tarjetas-cobradas">Tarjetas Cobradas: <span id="tarjeta">18</span></h4>
                <h4 class="valor-cobrado">Valor Cobrado: <span id="cobro">$500</span></h4>
            </div>

        </div>
    </div>
</template>


<script setup>
import { ref, computed, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const usuarioLogueado = computed(() => authStore.user)

// Modales

// Cliente






const obtenerFechaActual = () => {
    const hoy = new Date()
    const year = hoy.getFullYear()
    const month = String(hoy.getMonth() + 1).padStart(2, '0')
    const day = String(hoy.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}


// Crédito
const credito = ref({
    cedula_cliente: '',
    valor_prestamo: null,
    fecha_solicitud: obtenerFechaActual(),
    cuotas: null,
    valor_cuota: null,
    valor_total: null,
    fecha_fin: '',
    moneda: 'USD'
})

const resetearFormularioCredito = () => {
    credito.value = {
        cedula_cliente: "",
        valor_prestamo: "",
        fecha_solicitud: obtenerFechaActual(),
        cuotas: "",
        valor_total: "",
        valor_cuota: "",
        fecha_finalizacion: "",
        moneda: 'USD',
    }
}


// Expansión de tabla
const usuarioExpandido = ref(null)
const toggleExpand = (id) => {
    usuarioExpandido.value = usuarioExpandido.value === id ? null : id
}


// Datos de prueba
const CreditoCliente = ref([
    { id_cliente: 1001, nombre: 'María Gómez', telefono: '3123456789', direccion: 'Calle 10 #15-20', casa: 'Casa 1', numero_cuotas: 20, cuotas_pagadas: 5, cuotas_deberia: 8, abono: 100000, abono_total: 500000, prestamo_total: 1200000, fecha_prestamo: '2025-06-15', fecha_finalizacion: '2025-11-30' },
    { id_cliente: 1002, nombre: 'Luis Martínez', telefono: '3132223344', direccion: 'Carrera 8 #45-12', casa: 'Casa 2', numero_cuotas: 24, cuotas_pagadas: 10, cuotas_deberia: 12, abono: 150000, abono_total: 1000000, prestamo_total: 1500000, fecha_prestamo: '2025-05-01', fecha_finalizacion: '2025-10-20' },
    { id_cliente: 1003, nombre: 'Ana Torres', telefono: '3149998877', direccion: 'Diagonal 3 #21-18', casa: 'Casa 3', numero_cuotas: 18, cuotas_pagadas: 18, cuotas_deberia: 18, abono: 120000, abono_total: 1080000, prestamo_total: 1080000, fecha_prestamo: '2025-02-10', fecha_finalizacion: '2025-07-10' },
    { id_cliente: 1004, nombre: 'Jorge Herrera', telefono: '3118887766', direccion: 'Av. Siempre Viva #123', casa: 'Casa 4', numero_cuotas: 12, cuotas_pagadas: 3, cuotas_deberia: 6, abono: 90000, abono_total: 270000, prestamo_total: 600000, fecha_prestamo: '2025-07-01', fecha_finalizacion: '2025-12-15' }
])

// Generador de espacio de cuotas
const generarCuotasPorCliente = (cuotas) => {
    const num = parseInt(cuotas) || 0
    return Array.from({ length: num }, (_, i) => i + 1)
}
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



.contenedor-tabla {
    margin-top: 1.0rem;
}


/*=========================Filtro Tabla==========================*/

.filtros {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 0.5rem;
    align-items: center;
}

.filtro-nombre {
    display: flex;
    align-items: center;
    background: var(--color-blanco);
    padding: 0 0.6rem;
    border-radius: 0.4rem;
    border: 1px solid var(--colo);
    width: 16rem;
}

.filtro-nombre .filtro-nom {
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

.filtro-nombre .material-symbols-outlined {
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

.contenedor-tabla .tabla-clientes {
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

.contenedor-tabla .columna-min {
    width: 1rem;
    font-weight: 600;
}

.contenedor-tabla .tabla-clientes .estado {
    background: var(--color-aprobado);
    color: var(--color-blanco);
    border-radius: var(--card-border-radius);
    padding: 0.5rem 0rem;
    margin: 0.5rem 0rem;
}


table tbody tr:last-child td {
    border: none;
}


.ver-mas {
    cursor: pointer;
    color: var(--primer-color);
}

.fila-expandida {
    background: var(--color-blanco);
    color: var(--color-oscuro);
}

.info-extra {
    padding: 0.5rem 1rem;
    font-size: 0.95rem;
}

.calendario-cuotas {
    display: flex;
    justify-content: center;
}

.grid-cuotas {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
    width: 300px;
}

.cuota {
    background: var(--color-blanco);
    border: 1px solid var(--color-info-gris);
    text-align: center;
    padding: 0.8rem;
    border-radius: 5px;
}

/*=======================TARJETAS COBRADAS=========================*/
.contador-tarjetas {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.5rem;
}

.contador-tarjetas .tarjetas-cobradas {
    width: 100%;
    background: var(--color-riesgo);
    color: var(--color-blanco);
    padding: 0.5rem 1rem;
    border-radius: var(--card-border-radius);
    font-size: 1rem;

}

.contador-tarjetas .valor-cobrado {
    width: 100%;
    background-color: var(--color-aprobado);
    color: var(--color-blanco);
    padding: 0.5rem 1rem;
    border-radius: var(--card-border-radius);
    font-size: 1rem;
}

/*======================Media Querry====================*/

@media screen and (max-width: 768px) {

    /*===================tabla ======================*/
    .filtros {
        margin-top: 2rem;
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


    .tabla-scrollable {
        height: 55vh;
    }


    .contenedor-tabla {
        position: relative;
    }

    .contenedor-tabla .tabla-clientes {
        min-width: 150%;
    }

    .contenedor-tabla table {
        width: 100%;
        margin-top: 1rem;
        font-size: 0.9rem;
    }

    .contenedor-tabla .tabla-clientes td,
    th {
        word-wrap: break-word;
        white-space: normal;
    }

    .contenedor-tabla .columna-min {
        white-space: nowrap;
        text-align: center;
        font-size: 0.8rem;
    }

    .contenedor-tabla table span {
        font-size: 1.5rem;
        cursor: pointer;
    }

    .fila-expandida {
        font-size: 1rem;
        overflow-x: auto;
        max-width: 100%;
        box-sizing: border-box;
    }

    .fila-expandida .info-extra {
        white-space: initial;
    }
}
</style>
