<template>
    <TarjetasInicio />
</template>


<script setup>
import TarjetasInicio from '../components/TarjetasInicio.vue';

</script>
<style scoped>

.date {
    display: inline-block;
    background: var(--color-light);
    border-radius: var(--border-radius-1);
    margin-top: 0.5rem;
    padding: 0.5rem 1.6rem;
}

.date input[type="date"] {
    background: transparent;
    color: var(--color-oscuro);
}

</style>