<script setup lang="ts"></script>

<template>
  <section id="section-description">
    <h1>Seulement l'alternance</h1>
  </section>
</template>

<style scoped>
h1 {
  margin-top: 60px;
}

@media (min-width: 1280px) {
  section {
    width: 1200px;
    margin: 0 auto;
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
