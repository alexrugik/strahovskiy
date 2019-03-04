import Home from './components/main/Home';
import Bio from './components/main/Bio';
import Contacts from './components/main/Contacts';
import VueRouter from 'vue-router';

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/bio', component: Bio},
    {path: '/contacts', component: Contacts},
];

export const router = new VueRouter({
    routes
});