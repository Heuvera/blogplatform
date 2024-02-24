import { createRouter, createWebHashHistory } from "vue-router";
import AppHeader from './components/AppHeader.vue'
import BlogFoot from './components/BlogFoot.vue'
import CssTricks from "./components/Css-tricks.vue"
import JavascriptBlog from "./components/Javascript-blog.vue"
import ReactBlog from "./components/React-blog.vue"
import VueBlog from "./components/Vue-blog.vue"
import PythonBlog from "./components/Python-blog.vue"
import Post from "./components/Post.vue"


const routes = [
    { 'path': '/', component: AppHeader},
    { 'path': '/blogfoot', component: BlogFoot},
    { 'path': '/css-trick', component: CssTricks},
    { 'path': '/javascript-blog', component: JavascriptBlog},
    { 'path': '/react-blog', component: ReactBlog},
    { 'path': '/vue-blog', component: VueBlog}    ,
    { 'path': '/python-blog', component: PythonBlog},
    { 'path': '/posts', component: Post}
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