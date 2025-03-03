<script setup lang="ts">
type OnClick = (index: number) => void

const { currentPage, maxPage, onClick } = defineProps<{
  currentPage: number | undefined
  maxPage: number | undefined
  onClick: OnClick
}>()
</script>

<template>
  <section v-if="currentPage != undefined && maxPage != undefined" id="pager">
    <div v-for="n in maxPage" :key="n">
      <a disabled v-if="currentPage == n" class="selected">{{ n }}</a>
      <a v-on:click="() => onClick(n)" v-if="currentPage != n">{{ n }}</a>
    </div>
  </section>
</template>

<style lang="css" scoped>
#pager {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

a {
  margin: 0 10px;
}

.selected {
  cursor: default;
  color: grey;
  font: 1.1em;
}
</style>
