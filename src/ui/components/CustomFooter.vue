<script setup lang="ts"></script>

<template>
  <footer>
    <section>
      <h1 id="info">Informations</h1>
      <a href="#">Politique de confidentialité</a>
      <a href="#">Mentions légales</a>
      <a href="#">CGU</a>

      <h1 id="about">A propos</h1>
      <a href="#">Qui sommes-nous ?</a>
      <a href="#">Le concept</a>
      <a href="#">Offres d'alternance</a>
    </section>
  </footer>
</template>

<style scoped>
footer {
  background-color: rgb(48, 44, 44);
  border-radius: 20px;
}

section {
  padding: 40px;
}

#about {
  margin-top: 20px;
}

h1 {
  color: white;
}

a {
  margin-right: 20px;
  color: white;
}

@media (min-width: 1280px) {
  footer {
    width: 1200px;
    margin: 120px auto 60px auto;
  }
}

@media (max-width: 1280px) and (min-width: 780px) {
  footer {
    margin: auto 40px;
    margin-bottom: 40px;
  }
}

@media (max-width: 780px) and (min-width: 480px) {
  footer {
    margin: auto 0;
    border-radius: 0px;
  }
}

@media (max-width: 480px) {
  footer {
    margin: auto 0;
    border-radius: 0px;
  }
}
</style>
