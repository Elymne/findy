<script setup lang="ts">
defineProps<{
  text: string
  imageUrl: string
  redirect: string
}>()
</script>

<template>
  <a :href="redirect">
    <article :style="`background-image: url('${imageUrl}');`">
      <p>{{ text }}</p>
    </article>
  </a>
</template>

<style scoped>
a {
  user-select: none;
  text-decoration: none;
  border-radius: 10px;

  transition: transform 0.2s ease-in-out;
}

a:focus {
  transform: scale(0.94);
}

article {
  background-size: cover;
  background-color: black;
  border-radius: 10px;

  width: 100%;
  height: 200px;

  transition: transform 0.2s ease-in-out;
}

article:hover {
  transform: scale(0.94);
}

p {
  padding-left: 20px;
  padding-top: 20px;

  color: white;

  font-size: 1.3rem;
  font-family: 'quicksand-bold';
}
</style>
