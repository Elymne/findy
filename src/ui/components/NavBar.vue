<script setup lang="ts"></script>

<template>
  <header>
    <nav aria-label="Navbar">
      <ul>
        <li>
          <RouterLink to="/">Findy Alternance</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
@media (min-width: 1300px) {
}

@media (min-width: 700px) and (max-width: 1300px) {
}

@media (max-width: 700px) {
}

header > nav {
  display: flex;
  flex-direction: row;
  align-items: top;
}

header > nav > ul {
}

header > nav > ul > li > a {
  text-decoration: none;
}
</style>
