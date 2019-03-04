<template>
    <div class="container-fluid container-main">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Main'
    };
</script>

<style scoped>
    .container-main {
        padding: 20px 20px;
    }
</style>