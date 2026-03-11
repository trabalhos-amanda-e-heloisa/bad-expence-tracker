<script setup>
defineProps({
  filtered: Array,
  total: Number,
  removeExpense: Function
})
</script>

<template>
  <div class="bg-white border-2 border-pink-200 rounded-xl shadow-sm p-4 m-4 lg:m-12 md:m-10">

    <h2 class="text-lg font-semibold text-pink-800 text-center mb-3">
      Lista do dia
    </h2>

    <div v-if="filtered.length === 0" class="text-center text-pink-600 py-10">
      <p class="text-lg font-medium">
        Nenhuma despesa registrada hoje!
      </p>

      <p class="text-sm text-gray-500 mt-1">
        Adicione sua primeira despesa
      </p>
    </div>

    <table v-else class="w-full text-sm">
      <thead class="text-pink-700 border-b border-pink-200">
        <tr>
          <th class="text-left py-4">Descrição</th>
          <th class="text-center py-4">Categoria</th>
          <th class="text-right py-4">Valor</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in filtered" :key="item.id" class="border-b border-gray-200 hover:bg-pink-50 transition">
          <td class="py-4">{{ item.title }}</td>

          <td class="text-center py-4">
            {{ item.category }}
          </td>

          <td class="text-right py-4 font-medium">
            R$ {{ Number(item.value).toFixed(2).replace('.', ',') }}
          </td>

          <td class="text-right">
            <button class="text-red-500 hover:text-red-700 font-bold px-2 cursor-pointer"
              @click="removeExpense(item.id)">
              ✕
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4 text-right text-pink-800 font-semibold">
      Total do dia: R$ {{ Number(total).toFixed(2).replace('.', ',') }}
    </div>

  </div>
</template>