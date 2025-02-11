<script setup lang="ts"></script>

<template>
  <header>
    <nav aria-label="Navbar">
      <ul>
        <li>
          <RouterLink to="/">Findy</RouterLink>
        </li>
      </ul>
    </nav>
    <hr />
  </header>
</template>

<style>
@media (min-width: 1280px) {
  nav {
    width: 1200px;
    margin: 0 auto;
  }
}

@media (max-width: 1280px) and (min-width: 780px) {
  nav {
    margin: 0 20px;
  }
}

@media (max-width: 780px) and (min-width: 480px) {
  nav {
    margin: 0 10px;
  }
}

@media (max-width: 480px) {
  nav {
    margin: 0 4px;
  }
}

header {
  width: 100vw;
  display: flex;
  flex-direction: column;
}

header > hr {
  border-bottom: 1px solid rgb(48, 48, 48);
  border-top: none;
}

header > nav > ul {
  list-style-type: none;
  margin: 10px 0;
}

header > nav > ul > li > a {
  position: relative;
  text-decoration: none;

  font-family: 'lexend';
  color: rgb(59, 59, 59);
  font-size: 1.4rem;
  letter-spacing: 0px;
}

header > nav > ul > li > a:hover {
  color: rgb(102, 102, 102);
}
</style>
