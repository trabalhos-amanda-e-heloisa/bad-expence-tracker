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
  <div class="bg-white border-2 border-pink-200 rounded-xl shadow-sm p-4 m-4 max-w-xl mx-auto">

    <h2 class="text-lg font-semibold text-pink-800 text-center mb-4">
      Nova despesa
    </h2>

    <div class="flex flex-col gap-3">

      <input
        :value="title"
        @input="emit('update:title', $event.target.value)"
        class="w-full border border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
        placeholder="Descrição"
      />

      <input
        :value="value"
        @input="emit('update:value', $event.target.value)"
        class="w-full border border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
        placeholder="Valor"
      />

      <input
        :value="category"
        @input="emit('update:category', $event.target.value)"
        class="w-full border border-pink-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
        placeholder="Categoria"
      />

    </div>

    <div class="flex justify-center gap-6 mt-5">

      <button
        class="border border-pink-400 text-pink-700 rounded-lg px-5 py-2 hover:bg-pink-50 transition"
        @click="clearAll"
      >
        Limpar tudo
      </button>

      <button
        class="bg-pink-500 text-white rounded-lg px-6 py-2 hover:bg-pink-600 transition"
        @click="addExpense"
      >
        Adicionar
      </button>

    </div>

  </div>
</template>