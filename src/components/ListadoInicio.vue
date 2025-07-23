<template>
    <div class="tabla-inicio">
        <h2>Informacion Principal</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Monto</th>
                    <th>Fecha Solicitud</th>
                    <th>Estado</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Camilo Garcia</td>
                    <td>$5000</td>
                    <td>22/07/2025</td>
                    <td class="success">Aprobado</td>
                    <td class="primary">Detalles </td>
                </tr>

                <tr>
                    <td>Camilo Garcia</td>
                    <td>$5000</td>
                    <td>22/07/2025</td>
                    <td class="success">Aprobado</td>
                    <td class="primary">Detalles </td>
                </tr>

                <tr>
                    <td>Camilo Garcia</td>
                    <td>$5000</td>
                    <td>22/07/2025</td>
                    <td class="success">Aprobado</td>
                    <td class="primary">Detalles </td>
                </tr>

                <tr>
                    <td>Camilo Garcia</td>
                    <td>$5000</td>
                    <td>22/07/2025</td>
                    <td class="success">Aprobado</td>
                    <td class="primary">Detalles </td>
                </tr>
            </tbody>
        </table>
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
}

.tabla-inicio table:hover {
    box-shadow: none;
}

table tbody td {
    height: 2.2rem;
    border-bottom: 1px solid var(--color-light);
    color: var(--color-dark-variant);

}

table tbody tr:last-child td {
    border: none;
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

    table thead tr th:last-child,
    table thead tr th:first-child {
        display: none;
    }

    table tbody tr td:last-child,
    table tbody tr td:first-child {
        display: none;
    }


}

/*======768======*/
@media screen and (max-width:768px) {
    .tabla-inicio {
        position: relative;
        margin: 2rem 0 0 0;
        width: 100%;
    }

    .tabla-inicio table{
        width: 100%;
        margin-top: 1rem;
    }
}
</style>