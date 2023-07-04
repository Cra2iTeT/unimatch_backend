import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/basicDataDisplay'
    },
    {
        // 基础数据展示页
        path: '/basicDataDisplay',
        name: 'basicDataDisplayPage',
        meta: {
            title: '基础数据展示',
            keepalive: true
        },
        component: () => import('@/views/dataDisPlay/basicDataDisplayPage.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router