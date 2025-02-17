<script setup lang="ts"></script>

<template>
  <footer>
    <section>
      <h1>Informations</h1>
      <a href="#">Politique de confidentialité</a>
      <a href="#">Mentions légales</a>
      <a href="#">CGU</a>
    </section>
    <section>
      <h1>A propos</h1>
      <a href="#">Qui sommes-nous ?</a>
      <a href="#">Le concept</a>
      <a href="#">Offres d'alternance</a>
    </section>
  </footer>
</template>

<style scoped>
footer {
  background-color: rgb(218, 218, 218);
  border-radius: 20px;
}

section {
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}

a {
  margin-right: 20px;
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
  }
}

@media (max-width: 780px) and (min-width: 480px) {
  footer {
    margin: auto 0;
  }
}

@media (max-width: 480px) {
  footer {
    margin: auto 0;
  }
}
</style>
