<script setup>
defineProps({
    title: String,
    value: String,
    category: String,
    addExpense: Function,
    clearAll: Function
})

const emit = defineEmits(['update:title', 'update:value', 'update:category'])
</script>
<template>
    <div class="bg-red-200 p-5 rounded-2xl max-w-xl mx-auto lg:max-w-1000">
        <h2 class="text-pink-800 font-serif text-2xl text-center mb-4">Nova despesa</h2>
        <div class="">
            <input :value="title" @input="emit('update:title', $event.target.value)"
                class="w-full border-2 border-pink-800 rounded-xl pr-30 pl-5 py-2 m-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Descricao" />
            <input :value="value" @input="emit('update:value', $event.target.value)"
                class="w-full border-2 border-pink-800 rounded-xl pr-30 pl-5 py-2 m-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Valor" />
            <input :value="category" @input="emit('update:category', $event.target.value)"
                class=" w-full border-2 border-pink-800 rounded-xl pr-30 pl-5 py-2 m-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Categoria" />
        </div>
        <div class="flex gap-10 flex-row mt-4 justify-center lg:gap-20">
            <button
                class="small-text-pink-800 border-red-800 border-2 rounded-xl py-1 px-10 bg-red-300 md:hover:bg-red-400 transition lg:w-50"
                @click="clearAll">Limpar tudo</button>
            <button
                class="small-text-pink-800 border-green-800 border-2 rounded-xl py-1 px-12 bg-green-300 md:hover:bg-green-400 transition lg:w-50"
                @click="addExpense">Add</button>
        </div>
    </div>
</template>