<template>
    <div class="estadisticas claves">
        <h2>Creditos Nuevos</h2>
        <div class="estadistica fidelidad">
            <div class="icono">
                <span class="material-symbols-outlined">
                    family_star
                </span>
            </div>
            <div class="right">
                <div class="info">
                    <h3>Puntaje</h3>
                    <small class="texto-muted">Pago Oportuno</small>
                </div>
                <div class="porcentaje">
                    <h2 class="puntaje">
                        <span class="success">100</span><span>/100</span>
                    </h2>
                </div>
            </div>
        </div>
        
         <div class="estadistica fidelidad">
            <div class="icono">
                <span class="material-symbols-outlined">
                    family_star
                </span>
            </div>
            <div class="right">
                <div class="info">
                    <h3>Puntaje</h3>
                    <small class="texto-muted">Pago Oportuno</small>
                </div>
                <div class="porcentaje">
                    <h2 class="puntaje">
                        <span class="success">100</span><span>/100</span>
                    </h2>
                </div>
            </div>
        </div>       

    </div>


    <div class="actualizaciones-recientes">
        <h2>Notificaciones</h2>
        <div class="actualizaciones">
            <div class="actualizacion">
                <div class="perfil-foto">
                    <img src="/src/assets/img/logo.png" alt="">
                </div>
                <div class="mesanje">
                    <p><b>Camilo Garcia</b> ha solicitado un credito de <b>$5000,00</b></p>
                    <small class="texto-muted">Hace 2 horas</small>
                </div>
            </div>

            <div class="actualizacion">
                <div class="perfil-foto">
                    <img src="/src/assets/img/logo.png" alt="">
                </div>
                <div class="mesanje">
                    <p><b>Camilo Garcia</b> ha solicitado un credito de <b>$5000,00</b></p>
                    <small class="texto-muted">Hace 2 horas</small>
                </div>
            </div>

            <div class="actualizacion">
                <div class="perfil-foto">
                    <img src="/src/assets/img/logo.png" alt="">
                </div>
                <div class="mesanje">
                    <p><b>Camilo Garcia</b> ha solicitado un credito de <b>$5000,00</b></p>
                    <small class="texto-muted">Hace 2 horas</small>
                </div>
            </div>
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

:root {
    --primer-color: #7380ec;
    --color-peligro: #ff7782;
    --color-aprobado: #41f1b6;
    --color-riesgo: #ffbb55;
    --color-blanco: #FFF;
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

.perfil-foto {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    overflow: hidden;
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


/*=====================Estadisticas Claves=====================*/
.estadisticas {
    margin-top: 0.4rem;
}

.estadisticas h2 {
    margin-bottom: 0.8rem;
}

.estadisticas .estadistica {
    background: var(--color-blanco);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.7rem;
    padding: 1.2rem var(--card-padding);
    border-radius: var(--border-radius-3);
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
}

.estadisticas .estadistica:hover {
    box-shadow: none;
}

.estadisticas .estadistica .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    width: 100%;
}

.estadisticas .estadistica .icono {
    padding: 0.8rem;
    color: var(--color-blanco);
    border-radius: 50%;
    display: flex;
    background: var(--color-aprobado);
}


.estadisticas .estadistica .porcentaje .puntaje {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0;
}



/*=====================Actualizaciones Recientes=====================*/
.actualizaciones-recientes {
    margin-top: 1rem;
}

.actualizaciones-recientes h2 {
    margin-bottom: 0.8rem;
}


.actualizaciones-recientes .actualizaciones {
    background: var(--color-blanco);
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    box-shadow: var(--box-shadow);
    transition: all 300ms ease;
}

.actualizaciones-recientes .actualizaciones:hover {
    box-shadow: none;
}


.actualizaciones-recientes .actualizaciones .actualizacion {
    display: grid;
    grid-template-columns: 2.6rem auto;
    gap: 1rem;
    margin-bottom: 0.5rem;
}
</style>