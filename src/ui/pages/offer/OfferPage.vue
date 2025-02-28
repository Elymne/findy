<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import OfferPageState from './states/OfferPageState'
import { Status } from '@/core/Status'
import Tag from '@/ui/components/CustomTag.vue'
import { getFrDate } from '@/core/date.util'

const router = useRoute()

onBeforeMount(async () => {
  await OfferPageState.fetch(router.params.id as string)

  console.log(OfferPageState.data)
  console.log(OfferPageState.status)
})
</script>

<template>
  <section v-if="OfferPageState.status == Status.FAILURE">ERROR</section>
  <section v-if="OfferPageState.status == Status.LOADING">LOADING</section>
  <section v-if="OfferPageState.status == Status.SUCCESS">
    <article>
      <h1 id="title">{{ OfferPageState.data?.title }}</h1>
      <p id="subtitle">
        {{ OfferPageState.data?.company?.name }} -
        {{ OfferPageState.data?.zone.libelle.split('-')[1] }}
      </p>
      <p id="date" v-if="OfferPageState.data?.createdAt">
        {{ getFrDate(OfferPageState.data?.createdAt) }}
      </p>
      <p id="origin">
        Offre d'origine :
        <a :href="OfferPageState.data?.origin">{{ OfferPageState.data?.origin }}</a>
      </p>
      <ul id="list-tag        ">
        <li v-for="tag in OfferPageState.data?.tags" :key="tag">
          <Tag :text="tag" :redirection="''" />
        </li>
      </ul>
    </article>

    <article v-if="OfferPageState.data?.skills && OfferPageState.data?.skills.length > 0">
      <h2 id="skills-subtitle">Compétences Techniques :</h2>
      <ul id="list-job">
        <li v-for="skill in OfferPageState.data?.skills" :key="skill">
          <Tag :text="skill" :redirection="''" />
        </li>
      </ul>
    </article>

    <article v-if="OfferPageState.data?.softSkills && OfferPageState.data?.softSkills.length > 0">
      <h2 id="softskills-subtitle">Compétences :</h2>
      <ul id="list-job">
        <li v-for="softSkill in OfferPageState.data?.softSkills" :key="softSkill.title">
          <Tag :text="softSkill.title" :redirection="''" />
        </li>
      </ul>
    </article>

    <article>
      <h2 id="description-title">Le poste en quelques mots :</h2>
      <p id="description">{{ OfferPageState.data?.description }}</p>
    </article>

    <article v-if="OfferPageState.data?.contact">
      <h2 id="contact-title">Nous contacter :</h2>
      <p>Nom : {{ OfferPageState.data?.contact?.name }}</p>
      <p>Commentaire : {{ OfferPageState.data?.contact?.com }}</p>
      <p>Coordonnées : {{ OfferPageState.data?.contact?.coords }}</p>
      <p>Phone : {{ OfferPageState.data?.contact?.phone }}</p>
      <p>Email : {{ OfferPageState.data?.contact?.mail }}</p>
      <p>Url : {{ OfferPageState.data?.contact?.url }}</p>
    </article>

    <article>
      <h2 id="company-title">L'entreprise :</h2>
      <p>{{ OfferPageState.data?.company?.name }}</p>
      <p>{{ OfferPageState.data?.company?.description }}</p>
      <p>{{ OfferPageState.data?.company?.url }}</p>
      <p>{{ OfferPageState.data?.company?.logo }}</p>
    </article>
  </section>
</template>

<style lang="css" scoped>
section {
  width: 1200px;
  margin: 0 auto;
}

article {
  margin: 20px 0;

  border: 1px solid rgb(209, 209, 209);
  background-color: white;
  border-radius: 20px;

  padding: 20px;
}

article > * {
  padding-left: 20px;
  padding-right: 20px;
}

#subtitle,
#date {
  color: grey;
}

#origin {
  margin-bottom: 10px;
}

h2 {
  margin-bottom: 20px;
}

#description {
  white-space: pre-line;
}

ul {
  list-style-type: none;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

ul > li {
  margin-bottom: 16px;
  margin-right: 10px;
}
</style>
