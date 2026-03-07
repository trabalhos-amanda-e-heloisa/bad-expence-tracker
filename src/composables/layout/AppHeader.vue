<script setup>
defineProps(['filter'])

const emit = defineEmits(['changeFilter'])
</script>
<template>
    <div class="bg-red-200 py-5 text-center lg:flex lg:justify-between lg:items-center lg:px-20">
        <h1 class="text-pink-800 font-serif text-3xl py-2">Controle de Gastos</h1>
        <div class="mt-2 justify-between">
            <button class="small-btn text-pink-800 text-xl my-2 px-4 lg:p-2 lg:pt-1 lg:px-5 border-r-pink-800 border-r-2 lg:hover:text-pink-950" @click="emit('changeFilter','all')">Tudo</button>
            <button class="small-btn text-pink-800 text-xl my-2 px-4 lg:p-2 lg:pt-1 lg:px-5 border-r-pink-800 border-r-2 lg:hover:text-pink-950" @click="emit('changeFilter','food')">Comida</button>
            <button class="small-btn text-pink-800 text-xl my-2 px-4 lg:p-2 lg:pt-1 lg:px-5 border-r-pink-800 border-r-2 lg:hover:text-pink-950" @click="emit('changeFilter','transport')">Transporte</button>
            <button class="small-btn text-pink-800 text-xl my-2 px-4 lg:p-2 lg:pt-1 lg:px-5 lg:hover:text-pink-950" @click="emit('changeFilter','other')">Outros</button>
        </div>
    </div>
</template>