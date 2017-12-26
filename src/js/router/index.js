import index from '../page/Index.vue'
import my from '../page/My.vue'
import buy from '../page/Buy.vue'
<<<<<<< HEAD
import search from '../page/Search.vue'
=======
>>>>>>> 12104a25e4e463d6bdeb092f3eda7b67e3538f54

//定义路由
export default [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/my',
        name: 'my',
        component: my
    },
    {
        path: '/buy',
        name: 'buy',
        component: buy
<<<<<<< HEAD
    },
    {
        path: '/search',
        name: 'serach'
        component: search
=======
>>>>>>> 12104a25e4e463d6bdeb092f3eda7b67e3538f54
    }
]