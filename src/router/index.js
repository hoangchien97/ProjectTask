import Login from './../components/Login'
import Register from './../components/Register'
import Dashboard from './../components/Dashboard'
import Task from './../components/Task'

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
    {
        path: '/tasks',
        name: 'listTasks',
        component: Task
    }
]