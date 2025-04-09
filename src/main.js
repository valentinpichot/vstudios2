import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'
import { gsap } from 'gsap'
import { isMobile } from 'mobile-device-detect'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const appElement = document.getElementById('app')

if (appElement) {
  if (isMobile) {
    appElement.classList.add('mob')
    console.log('Mobile device detected.')
  } else {
    appElement.classList.add('desk')
    console.log('Desktop device detected.')
  }
}
