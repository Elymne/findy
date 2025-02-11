<script setup lang="ts">
import { ref } from 'vue'

const keyWords = ref<string>('')
</script>

<template>
  <section id="search-bar">
    <input
      type="text"
      name="keywords-input"
      id="keywords-input"
      v-model="keyWords"
      placeholder="Recherche par mots-clés"
    />
    <input
      type="text"
      name="keywords-input"
      id="keywords-input"
      v-model="keyWords"
      placeholder="Recherche par mots-clés"
    />
  </section>
</template>

<style scoped>
section {
  display: flex;
}

input {
  flex-grow: 1;
  font-weight: 100;
  color: rgb(79, 84, 117);

  border-width: 1px;
  border-color: #d8d8d8;

  padding: 10px;

  transition: border-color 0.2s ease-in;
}

input:nth-child(1) {
  border-radius: 10px 0px 0px 10px;
  border-style: none;
}
</style>
