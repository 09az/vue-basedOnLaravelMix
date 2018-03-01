//定义路由
export default [
    {
        path: '/:filter',
        name: 'index',
        component: require('../components/List.vue')
    },
    {
        path: '/play/:id',
        name: 'play',
        component: require('../components/Play.vue')
    }
]