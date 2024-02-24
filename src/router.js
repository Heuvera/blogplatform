import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from './components/LandingPage.vue'
import BlogFoot from './components/BlogFoot.vue'
import CssTricks from "./components/Css-tricks.vue"
import JavascriptBlog from "./components/Javascript-blog.vue"
import ReactBlog from "./components/React-blog.vue"
import VueBlog from "./components/Vue-blog.vue"
import PythonBlog from "./components/Python-blog.vue"
import PostBlog from "./components/PostBlog.vue"


const routes = [
    { 'path': '/', component: LandingPage},
    { 'path': '/blogfoot', component: BlogFoot},
    { 'path': '/css-trick', component: CssTricks},
    { 'path': '/javascript-blog', component: JavascriptBlog},
    { 'path': '/react-blog', component: ReactBlog},
    { 'path': '/vue-blog', component: VueBlog}    ,
    { 'path': '/python-blog', component: PythonBlog},
    { 'path': '/posts', component: PostBlog}
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