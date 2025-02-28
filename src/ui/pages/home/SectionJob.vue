<script setup lang="ts">
import { onBeforeMount } from 'vue'
import SectionJobState from './states/SectionJob.state'
import Tag from '@/ui/components/CustomTag.vue'
import ImageCard from '@/ui/components/ImageCard.vue'
import Button from '@/ui/components/CustomButton.vue'

onBeforeMount(async () => {
  SectionJobState.fetch()
})
</script>

<template>
  <section>
    <h1>Rechercher par secteur de métier ?</h1>
    <div id="grid-job">
      <ImageCard
        image-url="src/ui/assets/images/informatique-card.jpg"
        :text="'Informatique'"
        :redirect="'/offers?codejob=62'"
      />
      <ImageCard
        image-url="src/ui/assets/images/marketing-card.jpg"
        :text="'Marketing'"
        :redirect="'/offers?codejob=47'"
      />
      <ImageCard
        image-url="src/ui/assets/images/sante-card.jpg"
        :text="'Santé'"
        :redirect="'/offers?codejob=86'"
      />
    </div>
    <hr />
    <ul id="list-job">
      <li v-for="job in SectionJobState.data" :key="job.code">
        <Tag :text="job.title" :redirection="`/offers?codejob=${job.code}`" />
      </li>
    </ul>
    <Button
      id="job-button"
      :text="`Voir tous les secteurs`"
      :onClick="
        () => {
          // TODO page à faire.
          console.log('MERDE ALORS')
        }
      "
    />
  </section>
</template>

<style scoped>
h1 {
  margin-top: 60px;
  margin-bottom: 20px;
}

#list-job {
  list-style-type: none;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#list-job > li {
  margin-bottom: 16px;
  margin-right: 10px;
}

hr {
  margin: 20px 0;
}

@media (min-width: 1280px) {
  section {
    width: 1200px;
    margin: 0 auto;
  }

  #grid-job {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;

    margin-bottom: 40px;
  }
}

@media (max-width: 1280px) and (min-width: 780px) {
  section {
    margin: auto 40px;
  }

  #grid-job {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    margin-bottom: 40px;
  }
}

@media (max-width: 780px) and (min-width: 480px) {
  section {
    margin: auto 0;
  }

  h1,
  #list-job,
  #job-button {
    margin-right: 20px;
    margin-left: 20px;
  }

  #grid-job {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin: 0 20px;
    padding-bottom: 40px;
  }
}

@media (max-width: 480px) {
  section {
    margin: auto 0;
  }

  h1,
  #list-job,
  #job-button {
    margin: auto 4px;
  }

  #grid-job {
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin: 0 20px;
    padding-bottom: 40px;
  }
}
</style>
