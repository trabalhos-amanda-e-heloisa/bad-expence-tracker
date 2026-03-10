<script setup>
defineProps({
  filtered: Array,
  total: Number,
  removeExpense: Function
})
</script>

<template>
  <div class="bg-white border-2 border-pink-200 rounded-xl shadow-sm p-4 m-4">

    <h2 class="text-lg font-semibold text-pink-800 text-center mb-3">
      Lista do dia
    </h2>

    <table class="w-full text-sm">
      <thead class="text-pink-700 border-b border-pink-200">
        <tr>
          <th class="text-left py-4">Descrição</th>
          <th class="text-center py-4">Categoria</th>
          <th class="text-right py-4">Valor</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in filtered"
          :key="item.id"
          class="border-b border-gray-200 hover:bg-pink-50 transition"
        >
          <td class="py-4">{{ item.title }}</td>

          <td class="text-center py-4">
            {{ item.category }}
          </td>

          <td class="text-right py-4 font-medium">
            {{ item.value }}
          </td>

          <td class="text-right">
            <button
              class="text-red-500 hover:text-red-700 font-bold px-2"
              @click="removeExpense(item.id)"
            >
              ✕
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-4 text-right text-pink-800 font-semibold">
      Total do dia: {{ total }}
    </div>

  </div>
</template>