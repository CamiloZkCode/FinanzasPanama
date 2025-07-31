<template>
    <div class="estadisticas">
        <div class="estadistica1">
            <span class="material-symbols-outlined"> credit_card </span>
            <div class="middle">
                <div class="left">
                    <h3>Tarjetas</h3>
                    <h2>15</h2>
                </div>
            </div>
            <small class="texto-muted"> Ultimas 24 horas</small>
        </div>

        <div class="estadistica2">
            <span class="material-symbols-outlined"> credit_card_heart </span>
            <div class="middle">
                <div class="left">
                    <h3>Cobrado</h3>
                    <h2>$3500,00</h2>
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
    grid-template-columns: repeat(1, 1fr);
    gap: 0.5rem;
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
    margin-bottom: 1rem;
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
    font-size: 1.3rem;
    font-weight: 500;
}

.estadisticas h2 {
    font-size: 1.5rem;
    font-weight: 600;
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

    .estadisticas > div {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }

    .estadisticas > div span {
    align-self: center; 
    justify-self: center; 
    margin-bottom: 0;
  }

  .estadisticas small {
    grid-column: 1 / -1; /* ✅ ocupa toda la fila abajo */
    margin-top: 0.5rem;
    text-align: left; /* o center, si prefieres centrado */
  }


}
</style>