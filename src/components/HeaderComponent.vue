<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header
    class="bg-indigo-800 text-gray-100 text-xl flex justify-between p-5 w-full text-3xl"
  >
    <router-link class="" to="/">MovieList</router-link>
    <router-link class="" to="/about">About</router-link>
  </header>
</template>
