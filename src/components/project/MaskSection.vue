<script setup>
import { useGsap } from '../../composables/useGsap'

defineProps({
  title: {
    type: String,
    default: 'Avant / Apres refonte'
  },
  subtitle: {
    type: String,
    default: ''
  },
  beforeImage: {
    type: String,
    required: true
  },
  afterImage: {
    type: String,
    required: true
  },
  beforeLabel: {
    type: String,
    default: 'Apres'
  },
  afterLabel: {
    type: String,
    default: 'Avant'
  }
})

useGsap(({ gsap, ScrollTrigger }) => {
  const section = document.querySelector('#myavatar-mask')
  const reveal = document.querySelector('#maskReveal')
  if (!section || !reveal) return

  gsap.set(reveal, { clipPath: 'inset(0 100% 0 0)' })

  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=700',
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  })
    .to({}, { duration: 0.25 })
    .to(reveal, {
      clipPath: 'inset(0 0% 0 0)',
      ease: 'none'
    })
})
</script>

<template>
  <section class="mask-section" id="myavatar-mask">
    <div class="mask-container">
      <h2 class="mask-title">{{ title }}</h2>
      <p v-if="subtitle" class="mask-subtitle">{{ subtitle }}</p>

      <div class="mask-stage">
        <div class="mask-frame" id="maskFrame">
          <!-- Before image (bottom layer) -->
          <img class="mask-img base" :src="beforeImage" alt="Avant refonte">

          <!-- After image (top layer, masked) -->
          <div class="mask-reveal" id="maskReveal">
            <img class="mask-img top" :src="afterImage" alt="Apres refonte">
          </div>

          <div class="mask-labels">
            <span class="pill pill-left">{{ beforeLabel }}</span>
            <span class="pill pill-right">{{ afterLabel }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
