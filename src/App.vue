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
    <div class="app">
        <div class="header">
            <AppHeader :filter="filter" @changeFilter="filter = $event" />
        </div>
    </div>
        <div>        
            <ExpenseList
                :filtered="filtered"
                :total="total"
                :removeExpense="removeExpense"
            />
        </div>
        <div class="layout">
            <NewExpenceForm 
                v-model:title="title"
                v-model:value="value"
                v-model:category="category"
                :addExpense="addExpense"
                :clearAll="clearAll"
            />
        </div>
</template>