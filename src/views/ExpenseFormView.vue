<script setup>
import NewExpenseForm from '../components/forms/NewExpenseForm.vue'
import { useExpenses } from '../composables/useExpenses'
import { useRouter } from 'vue-router'

const router = useRouter()

const {
    title,
    value,
    category,
    addExpense,
    clearAllForms,
    titleError,
    valueError
} = useExpenses()

function saveExpense() {
    const success = addExpense()

    if (success) {
        router.push('/')
    }
}

function goHome() {
    router.push('/')
}
</script>

<template>
    <div class="bg-red-200 py-5 lg:px-20">
        <button @click="goHome" class="text-pink-600 hover:text-pink-800 font-semibold ml-4">
            ← Voltar
        </button>
    </div>
    <div class="flex justify-center">
        <div class="md:w-1/2">
            <NewExpenseForm v-model:title="title" v-model:value="value" v-model:category="category"
                :addExpense="saveExpense" :clearAllForms="clearAllForms" :titleError="titleError"
                :valueError="valueError" />
        </div>

    </div>
</template>