import Login from './../components/Login'
import Register from './../components/Register'
// import Header from './../components/Header'
import Task from './../components/Task'
import NotFound from './../components/messages/404'
import Dashboard from './../components/Dashboard'
export const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard
        // components: {
        //     default: Dashboard,
        //     'header': Header
        // }
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
    },
    {
        path: '/404',
        name: 'notFound',
        component: NotFound
    },
    {
        path: '*', redirect: '/404'
    }
]