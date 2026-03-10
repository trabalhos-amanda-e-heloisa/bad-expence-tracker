<script setup>
import AppHeader from './components/layout/AppHeader.vue';
import NewExpenceForm from './components/forms/NewExpenceForm.vue';
import { useExpenses } from './composables/useExpenses';
import ExpenseList from './components/records/ExpenceList.vue';

const {
    expenses,
    title,
    value,
    category,
    filter,
    addExpense,
    removeExpense,
    clearAll,
    filtered,
    total,
} = useExpenses();

</script>

<template>
    <div class="header">
        <AppHeader :filter="filter" @changeFilter="filter = $event" />
    </div>
    <div class="md:flex justify-center w-full">
        <div class="md:w-1/2">
            <ExpenseList :filtered="filtered" :total="total" :removeExpense="removeExpense" />
        </div>
        <div class="md:w-1/2">
            <NewExpenceForm v-model:title="title" v-model:value="value" v-model:category="category"
                :addExpense="addExpense" :clearAll="clearAll" />
        </div>
    </div>
</template>