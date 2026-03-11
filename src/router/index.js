import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExpenseFormView from '../views/ExpenseFormView.vue'

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/expense-form',
        component: ExpenseFormView
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})