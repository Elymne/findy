<script setup lang="ts">
import { onBeforeMount, watch } from 'vue'
import { useRoute } from 'vue-router'
import OffersPageState from './states/OffersPage.state'
import { Status } from '@/core/Status'
import ListCard from '@/ui/components/ListCard.vue'
import SearchBar from '@/ui/components/searchBar/SearchBar.vue'

const route = useRoute()

let keywords!: string | undefined
let codezone!: string | undefined
let distance!: string | undefined
let page!: string | undefined

onBeforeMount(async () => {
  keywords = route.query.keywords?.toString()
  codezone = route.query.codezone?.toString()
  distance = route.query.distance?.toString()
  page = route.query.page?.toString()

  await OffersPageState.fetch(keywords, codezone, distance, page)
})

watch(route, async () => {
  keywords = route.query.keywords?.toString()
  codezone = route.query.codezone?.toString()
  distance = route.query.distance?.toString()
  page = route.query.page?.toString()

  await OffersPageState.fetch(keywords, codezone, distance, page)
})
</script>

<template>
  <section v-if="OffersPageState.status == Status.LOADING">
    <h1>Chargement…</h1>
  </section>

  <section v-if="OffersPageState.status == Status.FAILURE">
    <h1>Une erreur s'est produite</h1>
  </section>

  <section v-if="OffersPageState.status == Status.SUCCESS">
    <SearchBar :keywords-prop="keywords" :zone-prop="OffersPageState.zone as string" />
    <h1>Les offres</h1>
    <ListCard
      v-for="offer in OffersPageState.data?.jobs"
      :key="offer.id"
      :id="offer.id"
      :title="offer.title"
      :company="offer.company"
      :zone="offer.zone"
      :date="offer.createdAt"
    />
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
}

section > a {
  margin: 4px 0;
}

@media (min-width: 1280px) {
  section,
  h1,
  #search-bar {
    width: 1200px;
    margin: 0 auto;
  }

  #search-bar {
    margin-top: 60px;
  }

  h1 {
    margin-top: 60px;
  }
}

@media (max-width: 1280px) and (min-width: 780px) {
  section {
    margin: auto 40px;
  }
}

@media (max-width: 780px) and (min-width: 480px) {
  section {
    margin: auto 0;
  }
}

@media (max-width: 480px) {
  section {
    margin: auto 0;
  }
}
</style>
