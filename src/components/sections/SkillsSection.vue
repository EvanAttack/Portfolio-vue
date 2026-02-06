<script setup>
import { useGsap } from '../../composables/useGsap'

const skills = [
  { name: 'PHP', file: 'php.png' },
  { name: 'Symfony', file: 'symfony.svg' },
  { name: 'HTML', file: 'html.png' },
  { name: 'CSS', file: 'css.png' },
  { name: 'JavaScript', file: 'js.png' },
  { name: 'Vue', file: 'VueJs.png' },
  { name: 'Angular', file: 'angular.webp' },
  { name: 'Java', file: 'java.webp' },
  { name: 'Python', file: 'python.png' },
  { name: 'Docker', file: 'docker.png' },
  { name: 'MySQL', file: 'mysql.svg' },
  { name: 'Git', file: 'Git.png' }
]

useGsap(({ gsap, ScrollTrigger }) => {
  const section = document.querySelector('#skills')
  const track = document.querySelector('.skills-track')

  if (!section || !track) return

  const scrollWidth = track.scrollWidth - window.innerWidth

  gsap.to(track, {
    x: -scrollWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${track.scrollWidth}`,
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  })
})
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="skills-pin">
      <h2 class="skills-title">Mes Competences</h2>

      <div class="skills-track">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card"
        >
          <img
            :src="`/img/${skill.file}`"
            :alt="skill.name"
            loading="lazy"
          >
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
