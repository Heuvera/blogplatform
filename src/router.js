import { createRouter, createWebHashHistory } from "vue-router";
import AppHeader from './components/AppHeader.vue'


const routes = [
    { 'path': '/', component: AppHeader}
];

// create a router instance
const router = createRouter({
    history: createWebHashHistory('clipsync'),
    routes
});

router.afterEach( ()=> {
    window.scrollTo(0, 0);
});

export default router 