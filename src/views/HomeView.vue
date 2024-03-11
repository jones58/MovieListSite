<script setup>
import MovieList from "../MovieList.json";
</script>

<template>
  <main class="text-3xl text-gray-100 mx-5">
    <div v-for="(item, index) in MovieList" :key="index">
      {{ item.Name }}
    </div>
  </main>
</template>
../MovieList
