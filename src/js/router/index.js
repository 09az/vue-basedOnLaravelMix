//定义路由
export default [
    {
        path: '/',
        name: 'index',
        component: require('../components/IndexPage.vue')
    },
    {
        path: '/my',
        name: 'my',
        component: require('../components/MyPage.vue')
    },
    {
        path: '/buy',
        name: 'buy',
        component: require('../components/BuyPage.vue')
    }
]