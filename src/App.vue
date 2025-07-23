<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Preloader from '@/components/Preloader.vue'
import { isMobile } from 'mobile-device-detect'
import { ref } from 'vue'
import AppFooter from '@/components/footer.vue'

const isChecked = ref(false)
const toggleMenu = () => {
  isChecked.value = false
}
</script>

<template>
  <Preloader />
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="nav-logo" to="/" @click="toggleMenu">
          <img src="@/assets/img/logo.png" alt="brand logo v-studios" />
        </RouterLink>
        <div v-if="!isMobile">
          <RouterLink to="/">V-Studios</RouterLink>
          <RouterLink class="nav-contact" to="/contact">Contact</RouterLink>
        </div>
        <label v-if="isMobile" for="menu" class="menu" :class="{ checked: isChecked }">
          <input id="menu" type="checkbox" v-model="isChecked" />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <Transition name="fadeHeight">
          <div class="nav-mob" v-if="isChecked">
            <RouterLink to="/" @click="toggleMenu">V-Studios</RouterLink>
            <RouterLink to="/contact" @click="toggleMenu">Contact</RouterLink>
          </div>
        </Transition>
      </nav>
    </div>
  </header>
  <RouterView />
  <AppFooter />
</template>
