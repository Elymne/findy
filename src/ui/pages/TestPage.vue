<script setup lang="ts">
import SampleStateImpl, { SampleCode, Status } from '@/states/SampleState'
import { onBeforeMount } from 'vue'

onBeforeMount(async () => {
  await SampleStateImpl.fetchSample(SampleCode.DEVELOP)
  console.log(SampleStateImpl.data)
})
</script>

<template>
  <main>
    <h1 v-if="SampleStateImpl.status == Status.LOADING">Chargement…</h1>
    <h1 v-if="SampleStateImpl.status == Status.FAILURE">Echec</h1>
    <h1 v-if="SampleStateImpl.status == Status.SUCCESS">Succès du chargement</h1>
  </main>
</template>
