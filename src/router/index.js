import {createRouter, createWebHashHistory} from 'vue-router'
import userManagerView from "@/views/dataManagerDisplay/userManagerView.vue";
import userActivityDisplay from "@/views/operationalDataDisplay/userActivityView.vue";
import teamManagerView from "@/views/dataManagerDisplay/teamManagerView.vue";
import tagManagerView from "@/views/dataManagerDisplay/tagManagerView.vue";
import tagRelationManagerView from "@/views/dataManagerDisplay/tagRelationManagerView.vue";

const routes = [
    {
        path: '/',
        redirect: '/operationalDataDisplay/userActivityDisplay',
    },
    {
        path: '/operationalDataDisplay',
        children: [
            {
                path: '/operationalDataDisplay/userActivityView',
                component: userActivityDisplay
            },
        ]
    },
    {
        path: '/dataManagerDisplay',
        children: [
            {path: '/dataManagerDisplay/userManagerView', component: userManagerView},
            {path: '/dataManagerDisplay/teamManagerView', component: teamManagerView},
            {path: '/dataManagerDisplay/tagManagerView', component: tagManagerView},
            {path: '/dataManagerDisplay/tagRelationManagerView', component: tagRelationManagerView},
        ]
    },
    {
        path: '/resultDisplay',
        name: 'resultDisplay',
        children: [
            {path: '/dataManagerDisplay/userManager', name: 'userManager', component: userManagerView},
            {path: '/dataManagerDisplay/teamManager', name: 'teamManager', component: teamManagerView},
            {path: '/dataManagerDisplay/tagManager', name: 'tagManager', component: tagManagerView},
            {
                path: '/dataManagerDisplay/tagRelationManager',
                name: 'tagRelationManager',
                component: tagRelationManagerView
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router