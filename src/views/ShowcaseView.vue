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
      <div class="showcase-gta-blur"></div>
      <div class="showcase-gta-img">
        <img src="@/assets/img/v.svg" alt="" />
      </div>
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.showcase',
          pin: true,
          scrub: 0.5,
          start: 'top top',
          end: '+=1500'
        }
      })

      tl.to(
        '.image-grid',
        {
          ease: 'linear',
          opacity: 0.1,
          duration: 2
        },
        '<'
      )
        .to(
          '.showcase-gta-blur',
          {
            ease: 'linear',
            zIndex: 4,
            duration: 1,
            background: 'radial-gradient(circle at center, transparent 10%, $blueLight 100%)'
          },
          '<'
        )
        .to(
          '.showcase-gta-img',
          {
            autoAlpha: 1,
            ease: 'linear',
            duration: 2
          },
          '<'
        )
        .to(
          '.showcase-gta-img img',
          {
            zIndex: 5,
            ease: 'power1.inOut',
            duration: 3,
            scale: 1
          },
          '<'
        )
        .to(
          '.showcase-gta-blur',
          {
            ease: 'linear',
            duration: 0,
            backdropFilter: 'none'
          },
          '>'
        )
      tl.to(
        '.image-grid',
        {
          ease: 'linear',
          opacity: 0,
          duration: 0.5
        },
        '<'
      )
        .to(
          '.showcase-view',
          {
            ease: 'power1.inOut',
            duration: 0.5,
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0) 70%, rgb(88 102 163 / 0%) 100%) 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)'
          },
          '>'
        )
    })
    return {
      imageCount
    }
  }
})
</script>
