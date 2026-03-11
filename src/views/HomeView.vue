<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import ExpenseList from '../components/records/ExpenseList.vue'
import { useExpenses } from '../composables/useExpenses'
import { useRouter } from 'vue-router'

const router = useRouter()

const {
    filter,
    filtered,
    total,
    removeExpense,
    clearAll,
    confirmClearAll,
    cancelClearAll,
    showConfirmClear,
    messageClearAll,
    messageSuccess
} = useExpenses()

function goToForm() {
    router.push('/expense-form')
}
</script>

<template>
    <div class="header">
        <AppHeader :filter="filter" @changeFilter="filter = $event" />
    </div>

    <div class="flex justify-center">
        <div class="w-full lg:w-1/2">

            <ExpenseList :filtered="filtered" :total="total" :removeExpense="removeExpense" :clearAll="clearAll" />

            <p v-if="messageClearAll" class="bg-pink-100 text-pink-800 p-3 rounded text-center mt-2">
                {{ messageClearAll }}
            </p>
            <p v-if="messageSuccess" class="bg-green-100 text-green-800 p-3 rounded text-center mt-2">
                {{ messageSuccess }}
            </p>

            <div class="flex justify-center mt-6">
                <button @click="goToForm"
                    class="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition">
                    + Cadastrar despesa
                </button>
            </div>

        </div>
    </div>

    <div v-if="showConfirmClear" class="fixed inset-0 flex items-center justify-center bg-black/40">
        <div class="bg-white p-6 rounded-xl shadow-lg text-center w-80">

            <h3 class="text-lg font-semibold mb-3">
                Apagar todas as despesas?
            </h3>

            <p class="text-gray-600 mb-5">
                Esta ação não poderá ser desfeita.
            </p>

            <div class="flex justify-center gap-4">

                <button @click="cancelClearAll" class="px-4 py-2 border rounded-lg hover:bg-gray-100">
                    Cancelar
                </button>

                <button @click="confirmClearAll" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                    Apagar tudo
                </button>

            </div>

        </div>
    </div>
</template>