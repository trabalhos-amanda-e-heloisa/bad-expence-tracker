<script setup>
import AppHeader from './components/layout/AppHeader.vue';
import NewExpenceForm from './components/form/NewExpenceForm.vue';
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
        <div>        
            <ExpenseList
                :filtered="filtered"
                :total="total"
                :removeExpense="removeExpense"
            />
        </div>
        <div class="layout">
            <div class="panel">
                <h2>Nova despesa</h2>
                <input v-model="title" class="input" placeholder="Descricao" />
                <input v-model="value" class="input" placeholder="Valor" />
                <input v-model="category" class="input" placeholder="Categoria" />
                <div class="row">
                    <button class="small-btn" @click="addExpense">Add</button>
                    <button class="small-btn" @click="clearAll">Limpar tudo</button>
                </div>
            </div>
        </div>
</template>