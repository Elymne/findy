<script setup lang="ts">
import { ref } from 'vue'

const keyWords = ref<string>('')
const zone = ref<string>('')

function carotte(payload: MouseEvent) {
  console.log(payload)
  console.log('Clicked!')
}

function change() {
  console.log('New val !')
}
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
      @keypress="change"
      type="text"
      name="zone-input"
      id="zone-input"
      list="zone-options"
      v-model="zone"
      placeholder="Paris, Lyon, Nantes…"
    />
    <datalist id="zone-options">
      <option key="1" value="Tartine au beurre"></option>
      <option key="2" value="Tartine au caca"></option>
    </datalist>
    <button @click="carotte">
      <img src="./../assets/svg/magnifying_glass.svg" height="30" width="30" alt="Icone de loupe" />
    </button>
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
  background-color: rgb(250, 250, 250);

  border: none;

  padding: 16px;
  transition: border-color 0.2s ease-in;
}

input:nth-child(1) {
  border-radius: 20px 0px 0px 20px;
  border-right: solid 1px rgb(79, 84, 117);
}

input:focus {
  background-color: rgb(255, 255, 255);
  color: rgb(95, 106, 182);
  outline: none;
}

button {
  flex-grow: 0.4;
  border: none;

  border-radius: 0px 10px 10px 0px;

  background-color: rgb(84, 102, 202);
  transition: background-color 0.2s;
}

button:hover {
  cursor: pointer;
  background-color: rgb(104, 124, 240);
}
</style>
