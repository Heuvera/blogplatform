import { createRouter, createWebHashHistory } from "vue-router";
import AppHeader from './components/AppHeader.vue'
import BlogFoot from './components/BlogFoot.vue'

const routes = [
    { 'path': '/', component: AppHeader},
    { 'path': '/blogfoot', component: BlogFoot}
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