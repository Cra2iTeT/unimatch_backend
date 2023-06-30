import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        // 基础数据展示页
        path: '/basicDataDisplay',
        name: 'basicDataDisplayPage',
        meta: {
            title: '登录',
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