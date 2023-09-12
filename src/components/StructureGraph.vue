<template>
    <component :is="svgObject" />
</template>

<script setup lang="ts">

defineProps<{
    svgObject: object
}>();
</script>

<style>
svg:hover>* {
    opacity: 0.3;
    transition: 0.2s
}

svg:hover>a:hover {
    opacity: 1.0;
    transition: 0.1s
}
</style>
