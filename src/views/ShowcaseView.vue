<template>
  <div class="showcase">
    <div class="image-grid-container">
      <div class="image-grid">
        <div :class="`image-grid-overflow img${i}`" v-for="i in imageCount" :key="i">
          <img :src="`/src/assets/img/showcase/img${i}.jpg`" :alt="`Image ${i}`" />
        </div>
      </div>

      <!--      appear all grid image with just smotth effect and zoom in popin and play video then finish by-->
      <!--      gta 6 effect with logo de zoom .-->
    </div>
    <div class="showcase-gta">
      <img src="@/assets/img/showcase/img1.jpg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default defineComponent({
  name: 'Showcase',
  setup() {
    const imageCount = ref(6)
    onMounted(() => {
      gsap.to('.showcase-gta', {
        opacity: 1,
        ease: 'power1.inOut',
        duration: 1,
        scrollTrigger: {
          trigger: '.showcase',
          pin: true,
          scrub: true,
          start: 'top top',
          end: '+=500',
          markers: true
        }
      })
    })
    return {
      imageCount
    }
  }
})
</script>
