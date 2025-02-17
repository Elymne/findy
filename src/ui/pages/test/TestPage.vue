<script setup lang="ts">
import { Status } from '@/core/Status'
import { SampleCode } from '@/models/SampleCode.enum'
import { SampleState } from '@/states/SampleState.reactive'
import { onBeforeMount } from 'vue'

onBeforeMount(async () => {
  await SampleState.fetch(SampleCode.DEVELOP)
  console.log(SampleState.data)
})
</script>

<template>
  <h1 v-if="SampleState.status == Status.LOADING">Chargement…</h1>
  <h1 v-if="SampleState.status == Status.FAILURE">Echec</h1>
  <h1 v-if="SampleState.status == Status.SUCCESS">Succès du chargement</h1>
</template>
