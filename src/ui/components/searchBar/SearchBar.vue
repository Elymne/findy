<script setup lang="ts">
import router from '@/router'
import { SearchZoneState } from '@/ui/components/searchBar/SearchZoneState.reactive'
import { computed, onBeforeMount, ref } from 'vue'

const props = defineProps<{
  keywordsProp: string | null
  zoneProp: string | null
}>()

const keyWords = ref<string>(props.keywordsProp ?? '')
const keyWordsChange = computed({
  get: () => keyWords.value,
  set: (val) => {
    keyWords.value = val
  },
})

const zone = ref<string>(props.zoneProp ?? '')
const zoneComputed = computed({
  get: () => zone.value,
  set: (val) => {
    zone.value = val
    SearchZoneState.onUpdate(val)
  },
})

onBeforeMount(() => {
  SearchZoneState.onInit(props.zoneProp ?? '')
})

function onClick() {
  const selectedZone = SearchZoneState.data?.find((elem) => elem.name == zone.value)

  if (selectedZone == undefined) {
    return
  }

  router.push({
    path: 'offers',
    query: {
      keywords: keyWords.value,
      codezone: selectedZone.code,
    },
  })
}
</script>

<template>
  <div id="search-bar">
    <input
      type="text"
      name="keywords-input"
      id="keywords-input"
      v-model="keyWordsChange"
      placeholder="Rechercher ton métier"
    />
    <input
      type="text"
      name="zone-input"
      id="zone-input"
      list="zone-options"
      v-model="zoneComputed"
      placeholder="Où ?"
    />
    <datalist id="zone-options">
      <option v-for="zone in SearchZoneState.data" :key="zone.code" :value="zone.name"></option>
    </datalist>
    <button @click="onClick">
      <img src="./../assets/svg/magnifying_glass.svg" alt="Icone de loupe" />
      <p>Rechercher</p>
    </button>
  </div>
</template>

<style scoped>
div {
  display: flex;
}

input {
  border: none;
}

input:focus {
  background-color: rgb(244, 246, 255);
  color: rgb(70, 87, 197);
  outline: solid 1px rgb(76, 93, 201);
}

button {
  cursor: pointer;
  background-color: rgb(100, 106, 136);
}

button:hover {
  cursor: pointer;
  background-color: rgb(146, 157, 218);
}

button:focus {
  background-color: rgb(146, 157, 218);
  outline: solid 1px rgb(76, 93, 201);
}

@media (min-width: 780px) {
  div {
    flex-direction: row;
  }

  input {
    flex-grow: 1;
    font-weight: 100;

    padding: 16px;
  }

  input:nth-child(1) {
    border-radius: 20px 0px 0px 20px;
    border-right: solid 1px rgb(79, 84, 117);
    border-left: solid 1px rgb(79, 84, 117);
    border-top: solid 1px rgb(79, 84, 117);
    border-bottom: solid 1px rgb(79, 84, 117);
  }

  input:nth-child(2) {
    border-top: solid 1px rgb(79, 84, 117);
    border-bottom: solid 1px rgb(79, 84, 117);
  }

  button {
    width: 100px;

    border-radius: 0px 10px 10px 0px;
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

    border: solid 1px rgb(79, 84, 117);
    border-radius: 10px;

    transition: border-color 0.2s ease-in;
  }

  button {
    margin-top: 20px;
    padding: 20px 40px;

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
