<template>
    <div id="app">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import BootstrapVue from 'bootstrap-vue';
    import VueRouter from 'vue-router';

    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-vue/dist/bootstrap-vue.css';

    import Header from './components/Header';
    import Footer from './components/Footer';
    import Main from './components/Main';

    Vue.use(BootstrapVue);
    Vue.use(VueRouter);

    export default {
        name: 'app',
        components: {
            Main,
            Header,
            Footer
        }
    };
</script>

<style>
    #app {
    }
</style>
