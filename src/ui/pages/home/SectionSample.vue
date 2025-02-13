<script setup lang="ts">
import { SampleCode } from '@/models/SampleCode.enum'
import { SampleState } from '@/states/SampleState'
import { Status } from '@/core/Status'
import { onBeforeMount } from 'vue'

import Card from '@/ui/components/CardComponent.vue'
import Button from '@/ui/components/CustomButton.vue'

onBeforeMount(async () => {
  await SampleState.fetch(SampleCode.DEVELOP)
})
</script>

<template>
  <section id="QuickLookBlock" class="responsive">
    <h1>C'est quoi les offres aujourd'hui ?</h1>
    <div id="grid-offers" v-if="SampleState.status == Status.SUCCESS">
      <Card
        v-for="offer in SampleState.data"
        :key="offer.id"
        :title="offer.title"
        :company="offer.company"
        :zone="offer.zone"
        :date="offer.updateAt ?? offer.createdAt"
      />
    </div>
    <Button :text="`Voir les offres`" :onClick="() => console.log('MERDE ALORS')" />
  </section>
</template>

<style scoped>
section {
  margin: 40px auto;
}

h1 {
  margin-bottom: 40px;
}

#grid-offers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>
