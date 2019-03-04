<template>
    <b-navbar toggleable="md" type="light" variant="light">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#" :to="'home'">Strahovskii personal site</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item href="#" :to="'home'">Home</b-nav-item>
                <b-nav-item href="#" :to="'bio'">Bio</b-nav-item>
                <b-nav-item href="#" :to="'contacts'">Contacts</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: 'Header'
    };
</script>

<style scoped>

</style>