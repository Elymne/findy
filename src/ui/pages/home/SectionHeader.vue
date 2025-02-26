<script setup lang="ts">
import SearchBar from '@/ui/components/searchBar/SearchBar.vue'
</script>

<template>
  <section id="image-block">
    <div id="fade-in">
      <h1>TROUVEZ VOTRE ALTERNANCE EN QUELQUES CLICS</h1>
      <h2>
        Pas d’écoles de commerce, uniquement des entreprises qui recherchent leurs futurs alternants
        !
      </h2>
      <SearchBar />
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 1280px) {
  #fade-in {
    padding: 100px 0;
  }

  h1,
  h2,
  #search-bar {
    width: 1200px;
    margin: 0 auto;
  }

  #search-bar {
    margin-top: 60px;
  }
}

@media (max-width: 1280px) and (min-width: 780px) {
  #fade-in {
    padding: 100px 0px;
  }

  h1,
  h2,
  #search-bar {
    margin: auto 40px;
  }

  #search-bar {
    margin-top: 40px;
  }
}

@media (max-width: 780px) and (min-width: 480px) {
  #fade-in {
    padding: 100px 0px;
  }

  h1,
  h2,
  #search-bar {
    margin: auto 20px;
  }

  #search-bar {
    margin-top: 10px;
  }
}

@media (max-width: 480px) {
  #fade-in {
    padding: 40px 0px;
  }

  #search-bar {
    margin: auto 10px;
    margin-top: 10px;
  }

  h1 {
    text-align: center;
  }

  h2 {
    display: none;
  }
}

#image-block {
  width: 100vw;
  left: 0px;

  background-image: url('../../assets/images/background_top.jpg');
  background-size: cover;
}

#fade-in {
  width: 100vw;
  animation: shade_in 1s cubic-bezier(0, 0, 0.2, 1) 0s 1 normal forwards;
}

@keyframes shade_in {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.6);
  }
}

h1,
h2 {
  color: white;
}

h1 {
  opacity: 0;
  animation: fade_in_translate 1s cubic-bezier(0, 0, 0.2, 1) 0s 1 forwards;
}

h2 {
  opacity: 0;
  animation: fade_in_translate 1s cubic-bezier(0, 0, 0.2, 1) 0.4s 1 forwards;
}

#search-bar {
  opacity: 0;
  animation: fade_in_translate 1s cubic-bezier(0, 0, 0.2, 1) 0.6s 1 forwards;
}

@keyframes fade_in_translate {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
