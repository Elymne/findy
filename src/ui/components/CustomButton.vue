<script setup lang="ts">
type OnClick = () => void

defineProps<{
  text: string
  onClick: OnClick
}>()
</script>

<template>
  <button @click="onClick">
    {{ text }}
  </button>
</template>

<style lang="css" scoped>
button {
  margin-top: 20px;
  text-decoration: none;

  padding: 20px;
  position: relative;
  overflow: hidden;

  border-radius: 40px;
  color: white;

  background-color: rgb(0, 0, 0);
  transition: background-color 0.2s;
}

button > span {
  font-weight: bold;
  font-size: 18;
  color: #d8d8d8;
}

button:hover {
  cursor: pointer;
}

button:active {
  background-color: rgb(39, 39, 39);
}

button::after {
  content: '';
  position: absolute;
  background: rgba(224, 224, 224, 0.2);
  top: -50px;
  height: 160px;
  left: -80%;
  transform: rotate(30deg);
  width: 100px;
  transition: left 0.2s ease-in;
}

button:hover::after {
  left: 140%;
  transition: left 0.2s ease-in;
}

button:focus-visible::after {
  left: 140%;
  transition: left 0.2s ease-in;
}
</style>
