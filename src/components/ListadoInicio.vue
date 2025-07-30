<template>
    <div class="tabla-inicio">
        <h2>Tarjetas</h2>

        <div class="table-scroll">
            <table>
                <thead>
                    <tr>
                        <th>N°Cuota/ Pagada</th>
                        <th>Nombre</th>
                        <th>Pago/Abono</th>
                        <th>Valor Cuota</th>
                        <th>Prestamo Restante</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="estado">5/8</td>
                        <td>Camilo Pimiento</td>
                        <td>$500</td>
                        <td>$100</td>
                        <td>$500/$1000</td>
                        <td class="primary">Detalles </td>
                    </tr>

                    <tr>
                        <td class="estado">5/8</td>
                        <td>Camilo Pimiento</td>
                        <td>$500</td>
                        <td>$100</td>
                        <td>$500/$1000</td>
                        <td class="primary">Detalles </td>
                    </tr>


                    <tr>
                        <td class="estado">5/8</td>
                        <td>Camilo Pimiento</td>
                        <td>$500</td>
                        <td>$100</td>
                        <td>$500/$1000</td>
                        <td class="primary">Detalles </td>
                    </tr>

                    <tr>
                        <td class="estado">5/8</td>
                        <td>Camilo Pimiento</td>
                        <td>$500</td>
                        <td>$100</td>
                        <td>$500/$1000</td>
                        <td class="primary">Detalles </td>
                    </tr>

                    <tr>
                        <td class="estado">5/8</td>
                        <td>Camilo Pimiento</td>
                        <td>$500</td>
                        <td>$100</td>
                        <td>$500/$1000</td>
                        <td class="primary">Detalles </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <router-link to="/" class="mi-enlace"> Ver mas </router-link>
    </div>
</template>

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

/*========================== TABLA INICIO ==========================*/

.tabla-inicio {
    margin-top: 1.0rem;
}

.tabla-inicio table {
    background: var(--color-blanco);
    width: 100%;
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    text-align: center;
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
    margin-top: 0.5rem;
    font-size: 1rem;
}

.tabla-inicio table:hover {
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

table tbody tr td.estado {
    background: var(--color-peligro);
    color: var(--color-blanco);
    border-radius:var(--card-border-radius)
}

.tabla-inicio .mi-enlace {
    text-align: center;
    display: block;
    margin: 1rem auto;
    color: var(--primer-color);
}

/*======================= Media Queries ======================= */
@media screen and (max-width: 1200px) {
    .tabla-inicio {
        width: 94%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin: 2rem 0 0 8.8rem;
    }

    .tabla-inicio table {
        width: 83vw;
    }


}

/*======768======*/
@media screen and (max-width:768px) {
    .tabla-inicio {
        position: relative;
        margin: 2rem 0 0 0;
        width: 100%;
    }

    .tabla-inicio table {
        width: 100%;
        margin-top: 1rem;
        font-size: 1rem;
    }

    .tabla-inicio table th:nth-last-child(2),
    .tabla-inicio table th:nth-last-child(3),
    .tabla-inicio table td:nth-last-child(2),
    .tabla-inicio table td:nth-last-child(3) {
        display: none;

    }

    .tabla-inicio table th:first-child,
    .tabla-inicio table td:first-child {
        width: 1rem;
        font-size: 1rem;
        text-align: center;
        padding: 0.1rem;
        border-right: 1px solid transparent;
    }


}
</style>