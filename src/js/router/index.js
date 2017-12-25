import index from '../page/Index.vue'
import my from '../page/My.vue'
import buy from '../page/Buy.vue'

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
    }
]