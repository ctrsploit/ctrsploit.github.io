import type {Router, RouteRecordRaw} from 'vue-router'
import {createRouter, createWebHistory} from 'vue-router'
import Index from "./components/index/Index.vue";
import Todo from "@/components/Todo.vue";

const routes: RouteRecordRaw[] = [
    {path: '/', component: Index},
    {path: '/todo', component: Todo, alias: '/:patchMatch(.*)'},
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

export {router}
