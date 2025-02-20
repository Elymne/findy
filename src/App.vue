<script setup lang="ts">
import './ui/assets/main.css'
import NavBar from './ui/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>
