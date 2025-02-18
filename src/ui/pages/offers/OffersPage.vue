<script setup lang="ts">
import { PageOffersState } from '@/states/OffersState.reactive'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

import ListCard from '@/ui/components/ListCard.vue'
import SearchBar from '@/ui/components/SearchBar.vue'
import { SearchZoneState } from '@/states/SearchZoneState.reactive'

const keywords = ref<string>('')
const zone = ref<string>('')
const distance = ref<string>('')
const page = ref<string>('')

onBeforeMount(async () => {
  const route = useRoute()

  const codezone = route.query.codezone as string
  const selectedZone = SearchZoneState.data?.find((elem) => elem.code == codezone)
  if (selectedZone != null) {
    zone.value = selectedZone.name as string
  }

  keywords.value = route.query.keywords as string
  distance.value = route.query.distance as string
  page.value = route.query.page as string

  await PageOffersState.fetch(keywords.value, zone.value, distance.value, page.value)
})
</script>

<template>
  <SearchBar :keywords-prop="keywords" :zone-prop="zone" />
  <h1>Les offres</h1>
  <section>
    <ListCard
      v-for="offer in PageOffersState.data?.jobs"
      :key="offer.id"
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
