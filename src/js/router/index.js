import index from '../page/Index.vue'
import my from '../page/My.vue'
import buy from '../page/Buy.vue'
import search from '../page/Search.vue'

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
    },
    {
        path: '/search',
        name: 'serach'
        component: search
    }
]