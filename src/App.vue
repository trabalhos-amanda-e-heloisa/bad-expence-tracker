<script setup>
import AppHeader from './components/layout/AppHeader.vue';
import NewExpenceForm from './components/form/NewExpenceForm.vue';
import { useExpenses } from './composables/useExpenses';

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
        <div class="layout flex flex-col gap-6 p-4">
            <NewExpenceForm v-model:title="title" v-model:value="value" v-model:category="category"
                :addExpense="addExpense" :clearAll="clearAll" />
            <div class="panel">
                <h2>Lista do dia</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Descricao</th>
                            <th>Categoria</th>
                            <th>Valor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in filtered" :key="item.id">
                            <td>{{ item.title }}</td>
                            <td>{{ item.category }}</td>
                            <td>{{ item.value }}</td>
                            <td>
                                <button class="small-btn" @click="removeExpense(item.id)">X</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="summary">
                    Total do dia: {{ total }}
                </div>
            </div>
        </div>
    </div>
</template>