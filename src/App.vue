<script setup>
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
            <h1>Controle de Gastos Rapido</h1>
            <div>
                <button class="small-btn" @click="filter = 'all'">Tudo</button>
                <button class="small-btn" @click="filter = 'food'">Comida</button>
                <button class="small-btn" @click="filter = 'transport'">Transporte</button>
                <button class="small-btn" @click="filter = 'other'">Outros</button>
            </div>
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