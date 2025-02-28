<script setup lang="ts">
import ImageCard from '@/ui/components/ImageCard.vue'
</script>

<template>
  <section>
    <h1>Recherche par ville :</h1>
    <div id="grid-job">
      <ImageCard
        :text="'Paris'"
        image-url="src/ui/assets/images/paris-card.jpg"
        :redirect="'/offers?codezone=75056'"
      />
      <ImageCard
        :text="'Nantes'"
        image-url="src/ui/assets/images/nantes-card.jpg"
        :redirect="'/offers?codezone=44109'"
      />
      <ImageCard
        :text="'Rennes'"
        image-url="src/ui/assets/images/rennes-card.jpg"
        :redirect="'/offers?codezone=35238'"
      />
    </div>
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
