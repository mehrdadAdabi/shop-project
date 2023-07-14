<template>
    <headerCom />
    <div class="main">
        <div class="container">
            <slot />
        </div>
    </div>
    <footerCom />
</template>

<style>
@import "../css/main.css";
</style>


<script setup lang="ts">
useHead({
    link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }]
})


</script>