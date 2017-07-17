
import home from './pages/home.vue';
import login from './pages/login.vue';

let routes=[
        {
                path:'/',
                component:home,
                name: 'home'
        },
        {
                path:'/home',
                component:home,
                name: 'home'
        },
        {
                path:'/login',
                component:login,
                name: 'login'
        } 
]

export default routes;

