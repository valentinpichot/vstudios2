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
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  column-gap: 0.5rem;
  color: white;
  transition: all 1s ease;
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: rgba(175, 168, 168, 0.12);
  backdrop-filter: invert(0.8) blur(3px);
}

nav a.router-link-exact-active {
  color: black;
  transition: all 0.7s ease-in-out;
  background-color: grey;
}

nav a {
  transition: all 0.7s ease-in-out;
  display: inline-block;
  padding: 0 0.5rem;
  border-left: 1px solid transparent;
  font-weight: 400;
  border-radius: 8px;
}

nav a:first-of-type {
  border: 0;
}
</style>
