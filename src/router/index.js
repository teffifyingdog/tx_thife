import Router from 'vue-router'
import BigCategory from '@/components/BigCategory'
import Vue from 'vue';
import UpdateResources from '@/components/UpdateResources'
import Index from '@/components/Index'

Vue.use(Router)//Vue全局使用Router

export default new Router({

    routes: [
        {
            path: '/BigCategory',
            name: 'BigCategory',
            component: BigCategory
        },
        {
            path: '/UpdateResources',
            name: 'UpdateResources',
            component: UpdateResources
        },
        {
            path: '/',
            name: 'Index',
            component: Index
        }
    ]
})