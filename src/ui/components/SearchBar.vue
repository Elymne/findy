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
  <div id="search-bar">
    <input
      type="text"
      name="keywords-input"
      id="keywords-input"
      v-model="keyWords"
      placeholder="Rechercher ton métier"
    />
    <input
      @keypress="change"
      type="text"
      name="zone-input"
      id="zone-input"
      list="zone-options"
      v-model="zone"
      placeholder="Où ?"
    />
    <datalist id="zone-options">
      <option key="1" value="Tartine au beurre"></option>
      <option key="2" value="Tartine au caca"></option>
    </datalist>
    <button @click="carotte">
      <img src="./../assets/svg/magnifying_glass.svg" alt="Icone de loupe" />
      <p>Rechercher</p>
    </button>
  </div>
</template>

<style scoped>
div {
  display: flex;
}

input:focus {
  background-color: rgb(244, 246, 255);
  color: rgb(70, 87, 197);
  outline: solid 1px rgb(76, 93, 201);
}

button:hover {
  cursor: pointer;
  background-color: rgb(104, 124, 240);
}

button:focus {
  background-color: rgb(104, 124, 240);
  outline: solid 1px rgb(76, 93, 201);
}

@media (min-width: 780px) {
  div {
    flex-direction: row;
  }

  input {
    flex-grow: 1;
    font-weight: 100;
    color: rgb(79, 84, 117);
    background-color: rgb(250, 250, 250);

    border: none;

    padding: 16px;
  }

  input:nth-child(1) {
    border-radius: 20px 0px 0px 20px;
    border-right: solid 1px rgb(79, 84, 117);
  }

  button {
    flex-grow: 0.4;
    border: none;

    border-radius: 0px 10px 10px 0px;

    background-color: rgb(84, 102, 202);
  }

  button > p {
    display: none;
  }

  button > img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 780px) {
  div {
    flex-direction: column;
    align-items: center;
  }

  input {
    margin-top: 10px;
    padding: 16px;

    font-weight: 100;
    width: 90vw;

    color: rgb(79, 84, 117);
    background-color: rgb(250, 250, 250);

    border: none;
    border-radius: 10px;

    transition: border-color 0.2s ease-in;
  }

  button {
    margin-top: 20px;
    padding: 20px 40px;

    background-color: rgb(84, 102, 202);

    border: none;
    border-radius: 40px;

    transition: background-color 0.2s;
  }

  button > p {
    color: white;
  }

  button > img {
    display: none;
  }
}
</style>
