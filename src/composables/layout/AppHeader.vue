
<template>
    <div class="bg-red-200 p-5 text-center lg:flex lg:justify-between lg:items-center">
        <h1 class="text-pink-800 font-serif text-3xl ">Controle de Gastos</h1>
        <div class="mt-2 justify-between">
            <button class="small-btn text-pink-800 border-pink-800 border-2 m-1.5 p-1.5 pt-0.5 rounded-2xl lg:p-2 lg:pt-1" @click="filter = 'all'">Tudo</button>
            <button class="small-btn text-pink-800 border-pink-800 border-2 m-1.5 p-1.5 pt-0.5 rounded-2xl lg:p-2 lg:pt-1" @click="filter = 'food'">Comida</button>
            <button class="small-btn text-pink-800 border-pink-800 border-2 m-1.5 p-1.5 pt-0.5 rounded-2xl lg:p-2 lg:pt-1" @click="filter = 'transport'">Transporte</button>
            <button class="small-btn text-pink-800 border-pink-800 border-2 m-1.5 p-1.5 pt-0.5 rounded-2xl lg:p-2 lg:pt-1" @click="filter = 'other'">Outros</button>
        </div>
    </div>
</template>