<script setup lang="ts">
defineProps<{
  text: string
  redirection: string | null
}>()
</script>

<template>
  <a v-if="redirection" :href="redirection">{{ text }}</a>
  <a v-if="!redirection">{{ text }}</a>
</template>

<style scoped>
a,
p {
  user-select: none;
  padding: 4px 10px;

  border: solid 1px rgb(39, 39, 39);
  border-radius: 40px;

  background-color: rgb(255, 255, 255);
  color: rgb(39, 39, 39);

  text-decoration: none;
}

a:hover,
p:hover {
  background-color: rgb(39, 39, 39) !important;
  color: rgb(255, 255, 255);

  -webkit-transition: background-color 0.6s ease-in color 0.6s ease-in;
  -ms-transition: background-color 0.6s ease-in color 0.6s ease-in;
  transition: background-color 0.6s ease-in color 0.6s ease-in;
}
</style>
