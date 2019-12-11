import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import login from './views/auth/login.vue'
import register from './views/auth/register.vue'
import Dashboard from './views/Dashboard.vue'
import firebase from 'firebase'



Vue.use(VueRouter)

const router = new VueRouter({ //devuelve una const ruter
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: login
        },
        {
            path: '/register',
            name: 'Register',
            component: register
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: {
                requiresAutch: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => { // to and from are both route objects. must call `next`.
    if (to.matched.some(ruta => ruta.meta.requiresAutch)) {
        const user =firebase.auth().currentUser;//currentUser devuelve el usuarip que esta actualmente en el nav
        if (user) {
            next();
        } else {
            next({
                name: 'login'
            })
        }
    } else {
        next();
    }
})

export default router; //se importa  la const ruter
