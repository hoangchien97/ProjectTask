import Login from './../components/Login'
import Register from './../components/Register'
import Dashboard from './../components/Dashboard'

export const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'pageLogin',
        component: Login
    },
    {
        path: '/register',
        name: 'pageRegister',
        component: Register
    },
]