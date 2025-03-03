<script setup lang="ts">
import { onBeforeMount, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Status } from '@/core/Status'
import OffersPageState from './states/OffersPage.state'
import ListCard from '@/ui/components/ListCard.vue'
import SearchBar from '@/ui/components/searchBar/SearchBar.vue'
import Pager from '@/ui/pages/offers/CustomPager.vue'

const route = useRoute()

let keywords!: string | undefined
let codeZone!: string | undefined
let codeJob!: string | undefined
let distance!: string | undefined
let page!: string | undefined

onBeforeMount(async () => {
  keywords = route.query.keywords?.toString()
  codeZone = route.query.codezone?.toString()
  codeJob = route.query.codejob?.toString()
  distance = route.query.distance?.toString()
  page = route.query.page?.toString()

  await OffersPageState.fetch({
    keywords: keywords,
    codejob: codeJob,
    codezone: codeZone,
    distance: distance,
    page: page,
  })

  console.log(OffersPageState)
})

watch(route, async () => {
  keywords = route.query.keywords?.toString()
  codeZone = route.query.codezone?.toString()
  codeJob = route.query.codejob?.toString()
  distance = route.query.distance?.toString()
  page = route.query.page?.toString()

  await OffersPageState.fetch({
    keywords: keywords,
    codejob: codeJob,
    codezone: codeZone,
    distance: distance,
    page: page,
  })
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
    <Pager
      :current-page="OffersPageState.data?.currentPage"
      :max-page="OffersPageState.data?.maxPage"
      :onClick="(index) => {}"
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

#pager {
  margin: 20px auto;
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
