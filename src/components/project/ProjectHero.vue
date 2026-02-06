<script setup>
import { useGsap } from '../../composables/useGsap'

defineProps({
  badge: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: {
    type: Array,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: 'Project image'
  },
  extraClass: {
    type: String,
    default: ''
  }
})

useGsap(({ gsap }) => {
  gsap.fromTo('.project-hero-split .project-left > *',
    { y: 26, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out' }
  )

  gsap.fromTo('.project-hero-split .project-image',
    { scale: 0.92, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.1 }
  )
})
</script>

<template>
  <section class="project-hero-split" :class="extraClass">
    <div class="project-left">
      <span class="project-badge">{{ badge }}</span>
      <h1 class="project-title">{{ title }}</h1>

      <p class="project-desc" v-html="description"></p>

      <div class="project-tech">
        <span v-for="tech in technologies" :key="tech">{{ tech }}</span>
      </div>
    </div>

    <div class="project-right">
      <div class="project-image" :class="extraClass ? `${extraClass.replace('project-hero-split ', '')}-image` : ''">
        <img :src="image" :alt="imageAlt">
      </div>
    </div>
  </section>
</template>
