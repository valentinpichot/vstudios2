<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Preloader from './components/Preloader.vue'
</script>

<template>
  <Preloader />
  <header>
    <!--    <img alt="Vue logo" class="logo" src="@/assets/img/logo.svg" width="125" height="125" />-->

    <div class="wrapper">
      <nav>
        <RouterLink to="/">V-Studios</RouterLink>
        <RouterLink to="/showcase">ShowCase</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  column-gap: 0.5rem;
  color: white;
  transition: all 1s ease;
}

nav a.router-link-exact-active {
  color: black;
  transition: all 1s ease;
}

nav a.router-link-exact-active {
  background-color: grey;
  transition: background-color 1s ease;
}

nav a {
  transition: all 1s ease;
  display: inline-block;
  padding: 0 0.5rem;
  border-left: 1px solid transparent;
  font-weight: 400;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    //padding-right: calc(var / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 0;
  }
}
</style>
