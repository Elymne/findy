<script setup lang="ts">
import './ui/assets/main.css'
import NavBar from './ui/components/NavBar.vue'
import CustomFooter from './ui/components/CustomFooter.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <CustomFooter />
</template>
