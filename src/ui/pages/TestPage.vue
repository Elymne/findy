<script setup lang="ts">
import type OfferRepository from '@/domain/repositories/OfferRepository'
import { Container } from '@/infrastructure/di/Container'
import { IName } from '@/infrastructure/di/IName'
import { onBeforeMount, ref } from 'vue'
import type Offer from '@/domain/models/results/Offer.result'

const offerRepository: OfferRepository = Container.get(IName.OfferRepository) as OfferRepository
const bidule = ref<Offer[]>([])

onBeforeMount(async () => {
  console.log(bidule)

  bidule.value = await offerRepository.findManyBySearch({
    keyWords: 'Dev',
    codeZone: '',
    distance: null,
  })

  console.log(bidule)
})
</script>

<template>
  <main>
    <h1>Testons…</h1>
  </main>
</template>
