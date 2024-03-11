<script setup>
import MovieList from "../MovieList.json";
console.log(MovieList);
</script>

<template>
  <main class="text-3xl font-bold underline text-black">Hello</main>
  <div v-for="item in MovieList" :key="movieIndex">
    {{ item.Name }}
  </div>
</template>
../MovieList
