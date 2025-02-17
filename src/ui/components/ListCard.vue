<script setup lang="ts">
const { date } = defineProps<{
  title: string
  company: string
  zone: string
  date: string
}>()
const sDate = new Date(date)
</script>

<template>
  <a>
    <article tabindex="0">
      <div>
        <p class="title">{{ title }}</p>
        <p class="company">{{ company ?? 'Entreprise inconnue*' }}</p>
        <p class="zone">{{ zone }}</p>
        <p class="date">{{ sDate.toLocaleString() }}</p>
      </div>
      <img class="top-image" src="./../assets/images/background_top.jpg" />
    </article>
  </a>
</template>

<style scoped>
a {
  user-select: none;
}

article {
  display: flex;
  flex-direction: row;
  align-items: start;

  border: 1px solid #e9e9e9;
  border-radius: 10px;
  background-color: #ffffff;

  transition: transform 0.2s ease-in-out;
}

article:hover {
  transform: scale(0.98);
  background: #ffffff !important;
  border: 1px solid #cacaca;
}

article:focus {
  transform: scale(0.94);
  background: #ffffff !important;
}

div {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 10px 10px 10px;

  flex-grow: 1;
}

img.top-image {
  width: 200px;
  height: 100%;
  border-radius: 0 10px 10px 0;
  object-fit: cover;
}

p {
  margin: 0;
  padding: 0;
}

p.title {
  margin-top: 10px;
  font-style: normal;
  font-size: 0.8rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

p.company {
  font-style: normal;
  font-size: 0.8rem;
  font-family: 'quicksand-light';

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

p.zone {
  font-style: italic;
  font-size: 0.6rem;
  font-family: 'quicksand-light';

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}

p.date {
  margin-top: 20px;
  font-size: 0.6rem;
  font-family: 'quicksand-light';

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
