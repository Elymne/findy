<script setup lang="ts">
defineProps(['title', 'company', 'companyLogo', 'zone', 'JobTitle', 'date'])
</script>

<template>
  <article>
    <a tabindex="0">
      <img class="top-image" src="./../assets/images/background_top.jpg" />
      <div>
        <h2>{{ title }}</h2>
        <p class="company">{{ company }}</p>
        <p class="zone">{{ zone }}</p>
        <p class="date">{{ date }}</p>
      </div>
    </a>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: start;
}

a {
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  background-color: #ffffff;

  transition: transform 0.2s ease-in-out;
  user-select: none;
}

a:hover {
  transform: scale(0.94);
  background: #ffffff !important;
  border: 1px solid #cacaca;
}

a:focus {
  transform: scale(0.94);
  background: #ffffff !important;
}

img.top-image {
  width: 100%;
  height: 100px;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
}

div {
  padding: 0 10px 10px 10px;
}

h2,
p {
  margin: 0;
  padding: 0;
}

p.company {
  font-style: normal;
}

p.zone {
  font-style: italic;
  font-family: 'quicksand-light';
}

p.date {
  margin-top: 20px;
  font-family: 'quicksand-light';
}
</style>
