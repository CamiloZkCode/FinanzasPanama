<template>
    <div class="contenedor-tarjetas">
        <h2>Tarjetas</h2>
        <div class="filtros">
            <div class="filtro-cedula">
                <input class="filtro-ced" type="text" placeholder="Busqueda por nombre" />
                <span class="material-symbols-outlined">search</span>
            </div>
        </div>

        <div class="tabla-scrollable">
            <table class="tabla-tarjetas">
                <thead>
                    <tr>
                        <th>N°Pagada</th>
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

        <div class="contador-tarjetas">
            <h4 class="tarjetas-cobradas">Tarjetas Cobradas: <span id="tarjeta">18</span></h4>
            <h4 class="valor-cobrado">Valor Cobrado: <span id="cobro">$500</span></h4>
        </div>
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

.contenedor-tarjetas {
    margin-top: 1.0rem;
}

/*====filtro====*/
.filtros {
    display: flex;
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
    width: 17rem;
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

.filtros .filtro-cedula .material-symbols-outlined {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    color: var(--color-oscuro);
    cursor: pointer;
}

/*==Tabla==*/

.tabla-scrollable {
    max-height: 60vh;
    overflow-y: auto;
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
    height: 1rem;
}

.tabla-scrollable::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 0.8rem;
}

.contenedor-tarjetas .tabla-tarjetas {
    width: auto;
    min-width: 100%;
    border-collapse: collapse;
}


.contenedor-tarjetas .tabla-tarjetas {
    text-align: center;
    transition: all 300ms ease;
    margin-top: 0.5rem;
    font-size: 1rem;
    width: 100%;
    padding: 0;
    box-shadow: none;
    background: transparent;
}

.contenedor-tarjetas .tabla-scrollable:hover {
    box-shadow: none;
}


table tbody td {
    height: 3rem;
    border-bottom: 1.2px solid var(--color-light);
    color: var(--color-dark-variant);
}


table tbody tr td.estado {
    background: var(--color-aprobado);
    color: var(--color-blanco);
    border-radius: var(--card-border-radius)
}

.tabla-inicio .mi-enlace {
    text-align: center;
    display: block;
    margin: 1rem auto;
    color: var(--primer-color);
}


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
    background-color: var(--primer-color);
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

    .filtro-cedula {
        width: 18rem;
    }
    
    .tabla-scrollable{
        height: 50vh;
    }

    /*==========TABLA==========*/
    .contenedor-tarjetas {
        position: relative;
        margin: 2rem 0 0 0;
    }

    .contenedor-tarjetas .tabla-tarjetas {
        min-width: 130%;
    }


    .contenedor-tarjetas table {
        width: 90%;
        margin-top: 1rem;
        font-size: 0.9rem;
    }

    .contenedor-tarjetas table th:nth-last-child(3),
    .contenedor-tarjetas table td:nth-last-child(3),
    .contenedor-tarjetas table th:nth-last-child(2),
    .contenedor-tarjetas table td:nth-last-child(2) {
        display: none;
    }

    .tabla-tarjetas th:first-child,
    .tabla-tarjetas td:first-child {
        max-width: 60px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.8rem;
        font-weight: 600;
    }


}
</style>