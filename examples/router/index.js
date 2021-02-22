import Vue from "vue"
import VueRouter from "vue-router"
import rich from "../components/f-richtext/richText2.vue"

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        name:"rich",
        component:rich
    },
    {
        path:"/form",
        name:'form',
        component:()=> import(/* webpackChunkName:"form"*/'../components/f-form/dynamicForm.vue')
    },
    {
        path:"/table",
        name:'table',
        component:()=> import(/* webpackChunkName:"form"*/'../components/f-table/demo.vue')
    }
]

const router = new VueRouter({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})
export default router