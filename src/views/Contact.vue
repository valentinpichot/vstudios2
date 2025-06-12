<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__container__inside">
        <div class="left">
          <p>Say hi</p>
          <p>Drop me a line</p>
          <p>Get in touch</p>
          <p>Let's work together</p>
          <p>Parle-moi</p>
          <p>Dis bonjour</p>
        </div>
        <div class="right">
          <div @click="appearContact" class="right-first">
            <p>Email me</p>
            <p>Click ici</p>
          </div>
          <div class="right-second">
            <p>valentinpichot2@gmail.com</p>
            <p>(+33) 07 66 94 65 58</p>
            <p>thank you</p>
          </div>

          <br />
          <br />
          <div @click="appearContact" class="right-first">
            <p>Text me</p>
            <p>Textote moi</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Function to handle email sending
const appearContact = () => {
  setTimeout(() => {
    const contactAppear = document.querySelectorAll('.right-second')
    const contactDesappear = document.querySelectorAll('.right-first')
    if (contactAppear.length) {
      gsap.to(contactAppear, {
        autoAlpha: 1,
        height: 'auto',
        ease: 'easeOut',
      })
      gsap.to(contactDesappear, {
        autoAlpha: 0,
        x: '100'
      })
    }
  }, 100)
}
onMounted(() => {
  const container = document.querySelector('.contact__container')
  const contact = document.querySelector('.contact')

  if (container) {
    gsap.to(container, {
      y: -20,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: contact,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2
      }
    })
  }
})
</script>
