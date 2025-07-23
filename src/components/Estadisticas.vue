<template>

    <div class="estadisticas">
        <div class="estadistica1">
            <span class="material-symbols-outlined"> credit_card </span>
            <div class="middle">
                <div class="left">
                    <h3>Total Deuda</h3>
                    <h2>$5000,00</h2>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx='38' cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>100%</p>
                    </div>
                </div>
            </div>
            <small class="texto-muted"> Ultimas 24 horas</small>
        </div>

        <div class="estadistica2">
            <span class="material-symbols-outlined"> credit_card_heart </span>
            <div class="middle">
                <div class="left">
                    <h3>Abonado</h3>
                    <h2>$3500,00</h2>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx='38' cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>70%</p>
                    </div>
                </div>
            </div>
            <small class="texto-muted"> Ultimas 24 horas</small>
        </div>


        <div class="estadistica3">
            <span class="material-symbols-outlined"> credit_card_clock </span>
            <div class="middle">
                <div class="left">
                    <h3>Deuda</h3>
                    <h2>$1500,00</h2>
                </div>
                <div class="progress">
                    <svg>
                        <circle cx='38' cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                        <p>30%</p>
                    </div>
                </div>
            </div>
            <small class="texto-muted"> Ultimas 24 horas</small>
        </div>
    </div>
</template>


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

/* ==================== Estadisticas Styles ==================== */

.estadisticas {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.estadisticas>div {
    background: var(--color-blanco);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    box-shadow: var(--box-shadow);
}

.estadisticas>div:hover {
    box-shadow: none;
}

.estadisticas>div span {
    background: var(--primer-color);
    padding: 0.5rem;
    border-radius: 50%;
    color: var(--color-blanco);
    font-size: 1.8rem;
}

.estadisticas>div.estadistica2 span {
    background: var(--color-aprobado);
}

.estadisticas>div.estadistica3 span {
    background: var(--color-peligro);
}


.estadisticas>div .middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.estadisticas h3 {
    margin: 0rem 0 0rem;
    font-size: 1rem;
    font-weight: 500;
}

.estadisticas h2 {
    font-size: 1.5rem;
    font-weight: 600;
}

.estadisticas .progress {
    position: relative;
    width: 90px;
    height: 90px;
    border-radius: 50%;
}

.estadisticas svg {
    width: 7rem;
    height: 7rem;
}

.estadisticas svg circle {
    fill: none;
    stroke: var(--primer-color);
    stroke-width: 14;
    stroke-linecap: round;
    transform: translate(5px, 5px);
    stroke-dasharray: 226;
    stroke-dashoffset: 226;

}

.estadisticas .estadistica1 svg circle {
    stroke-dashoffset: 0;

}

.estadisticas .estadistica2 svg circle {
    stroke-dashoffset: 67;
}

.estadisticas .estadistica3 svg circle {
    stroke-dashoffset: 158;
}

.estadisticas .progress .number {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }

.estadisticas small{
    display: block;
}

/*==================== Media Queries ==================== */
@media screen and (max-width: 1200px) {
    .estadisticas {
        grid-template-columns: 1fr;
        gap: 0;
    }


}
</style>