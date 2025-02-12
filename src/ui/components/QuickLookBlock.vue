<script setup lang="ts">
import Card from './CardComponent.vue'
</script>

<template>
  <section id="QuickLookBlock" class="responsive">
    <h1>C'est quoi les offres aujourd'hui ?</h1>
    <Card
      title="Super, c'est un titre"
      company="Une société qui ne vous veut que du mal"
      zone="Quelque part ici"
      date="feb, 23 2020"
    />
  </section>
</template>

<style scoped>
section {
  margin-top: 40px;
}

h1 {
  margin-bottom: 40px;
}
</style>
