<script setup lang="ts">
import { SampleCode } from '@/models/SampleCode.enum'
import { SampleState } from '@/states/SampleState'
import { Status } from '@/core/Status'
import { onBeforeMount } from 'vue'

import Card from '@/ui/components/GridCard.vue'
import Button from '@/ui/components/CustomButton.vue'

onBeforeMount(async () => {
  await SampleState.fetch(SampleCode.DEVELOP)
})
</script>

<template>
  <section id="QuickLookBlock">
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
    <Button
      id="offer-button"
      :text="`Voir les offres`"
      :onClick="() => console.log('MERDE ALORS')"
    />
  </section>
</template>

<style scoped>
@media (min-width: 1280px) {
  section {
    width: 1200px;
    margin: 0 auto;
  }

  #grid-offers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
}

@media (max-width: 1280px) and (min-width: 780px) {
  #search-bar {
    margin-top: 40px;
  }

  section {
    margin: auto 40px;
  }

  #grid-offers {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  h1 {
    margin: auto 20px;
  }
}

@media (max-width: 780px) and (min-width: 480px) {
  section {
    margin: auto 0;
  }

  h1 {
    margin: auto 20px;
  }

  #grid-offers {
    padding-bottom: 40px;
    width: 100vw;

    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  #grid-offers > a {
    padding: 0 4px;
    flex: 0 0 300px;
  }
}

@media (max-width: 480px) {
  section {
    margin: auto 0;
  }

  h1 {
    margin: auto 4px;
  }

  #grid-offers {
    padding-bottom: 20px;
    width: 100vw;

    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  #grid-offers > a {
    padding: 0 4px;
    flex: 0 0 260px;
  }
}

h1 {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
