import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from "../views/Header";
import Footer from "../views/Footer";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        components: {
            header: Header,
            default: Header,
            footer: Footer
        }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
