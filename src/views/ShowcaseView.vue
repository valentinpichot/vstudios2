<template>
  <div id="showcase-section" class="showcase">
    <!-- Video Grid Section -->
    <div class="image-grid-container">
      <RouterLink to="/contact">
        <div class="image-grid">
          <div class="image-grid-overflow img">
            <video loop muted autoplay playsinline preload="auto" aria-hidden="true">
              <source src="@/assets/video/travel-large.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="image-grid-overflow img">
            <video loop muted autoplay playsinline preload="auto" aria-hidden="true">
              <source src="@/assets/video/car-large.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="image-grid-overflow img">
            <video loop muted autoplay playsinline preload="auto" aria-hidden="true">
              <source src="@/assets/video/fdj-large.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="image-grid-overflow img">
            <video loop muted autoplay playsinline preload="auto" aria-hidden="true">
              <source src="@/assets/video/coach-large.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="image-grid-overflow img">
            <video loop muted autoplay playsinline preload="auto" aria-hidden="true">
              <source src="@/assets/video/bio-large.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="image-grid-overflow img">
            <video loop muted autoplay playsinline preload="auto" aria-hidden="true">
              <source src="@/assets/video/matel-large.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </RouterLink>
    </div>

    <!-- Showcase GTA Section -->
    <div class="showcase-gta">
      <div class="showcase-gta-blur"></div>
      <div class="showcase-gta-img">
        <img src="@/assets/img/v.svg" alt="Showcase Center Logo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default defineComponent({
  name: 'Showcase',
  setup() {
    // Function to manage GSAP animations
    const setupAnimations = () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.showcase',
          pin: true,
          scrub: 0.5,
          start: 'top top',
          end: '+=1500',
          toggleActions: 'play pause resume restart'
        }
      })

      timeline
        .to('.image-grid', {
          opacity: 0.1,
          duration: 2,
          ease: 'linear'
        })
        .to(
          '.showcase-gta-blur',
          {
            zIndex: 4,
            duration: 1,
            background: 'radial-gradient(circle at center, transparent 10%, #88aef3 100%)',
            ease: 'linear'
          },
          '<'
        )
        .to(
          '.showcase-gta-img',
          {
            autoAlpha: 1,
            duration: 2,
            ease: 'linear'
          },
          '<'
        )
        .to(
          '.showcase-gta-img img',
          {
            scale: 1,
            zIndex: 5,
            duration: 3,
            ease: 'power1.inOut'
          },
          '<'
        )
        .to(
          '.showcase-gta-blur',
          {
            backdropFilter: 'none',
            duration: 0,
            ease: 'linear'
          },
          '>'
        )
        .to(
          '.image-grid',
          {
            opacity: 0,
            duration: 0.5,
            ease: 'linear'
          },
          '<'
        )
        .to(
          '.showcase',
          {
            background: 'radial-gradient(circle, rgba(0,0,0,0) 70%, rgba(88,102,163,0) 100%)',
            duration: 0.5,
            ease: 'power1.inOut'
          },
          '>'
        )
    }

    onMounted(() => {
      setupAnimations()
    })
  }
})
</script>
