<script setup>
import { useGsap } from '../../composables/useGsap'

const timelineSteps = [
  {
    key: 'objectif',
    title: "Objectif : Ecole d'ingenieur",
    isDot2: true
  },
  {
    key: 'but',
    title: 'BUT Informatique — RACDV',
    isDot2: false
  },
  {
    key: 'lycee',
    title: 'Lycee Dhuoda — STI2D',
    isDot2: false
  }
]

const descriptions = {
  objectif: {
    title: "Pourquoi une ecole d'ingenieur ?",
    paragraphs: [
      "Mon objectif est d'integrer une ecole d'ingenieur afin d'approfondir mes competences en <strong>architecture logicielle</strong>, <strong>developpement full-stack</strong> et <strong>systemes complexes</strong>.",
      "J'aime comprendre comment les applications fonctionnent en profondeur : de la conception a la mise en production, en passant par la performance, la securite et la scalabilite.",
      "A terme, je souhaite travailler sur des projets a forte valeur technique, ou la rigueur, la reflexion et l'innovation ont une vraie importance."
    ]
  },
  but: {
    title: 'BUT Informatique',
    paragraphs: [
      "Actuellement en <strong>3e annee de BUT Informatique</strong>, je me specialise dans la <strong>conception et le developpement d'applications</strong>, avec une forte orientation web.",
      "J'ai travaille sur de nombreux projets en equipe en utilisant <strong>HTML, CSS, JavaScript, PHP, SQL</strong>, ainsi que des frameworks comme <strong>Symfony et VueJs</strong> et des outils comme <strong>Git / GitLab</strong>.",
      "Ces projets m'ont permis de developper des competences techniques, mais aussi des methodes de travail professionnelles : organisation, autonomie, communication et respect des delais."
    ]
  },
  lycee: {
    title: 'Lycee STI2D',
    paragraphs: [
      "Mon interet pour l'informatique a reellement commence en <strong>STI2D</strong>, ou j'ai decouvert la logique de programmation, les systemes techniques et la resolution de problemes.",
      "Cette formation m'a donne une approche concrete et logique, qui m'aide encore aujourd'hui dans ma maniere de concevoir des applications et d'aborder des problematiques techniques.",
      "C'est a cette periode que j'ai compris que je voulais evoluer dans le domaine du developpement et des technologies numeriques."
    ]
  }
}

useGsap(({ gsap, ScrollTrigger }) => {
  const steps = document.querySelectorAll('[data-step]')
  const descs = document.querySelectorAll('[data-desc]')

  if (steps.length && descs.length) {
    const activate = (key) => {
      document.querySelector(`[data-step="${key}"]`)?.classList.add('active')
      document.querySelector(`[data-desc="${key}"]`)?.classList.add('active')
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: '.timeline-pin',
        start: 'top top',
        end: '+=200%',
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: self => {
          const p = self.progress

          steps.forEach(s => s.classList.remove('active'))
          descs.forEach(d => d.classList.remove('active'))

          if (p < 0.33) {
            activate('objectif')
          } else if (p < 0.66) {
            activate('but')
          } else {
            activate('lycee')
          }
        }
      }
    })
  }

  const progressLine = document.querySelector('.timeline-line-progress')
  if (progressLine) {
    gsap.to(progressLine, {
      height: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline-pin',
        start: 'top top',
        end: '+=200%',
        scrub: true
      }
    })
  }

  gsap.from('.timeline-right', {
    opacity: 0,
    y: 40,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#timeline',
      start: 'top 70%'
    }
  })
})
</script>

<template>
  <section id="timeline" class="timeline-pin">
    <div class="timeline-screen">
      <!-- LEFT: Timeline -->
      <div class="timeline-left">
        <h2>Parcours de formation</h2>

        <div class="timeline">
          <div class="timeline-line"></div>
          <div class="timeline-line-progress"></div>

          <div
            v-for="step in timelineSteps"
            :key="step.key"
            class="tl-item"
            :class="{ active: step.key === 'objectif' }"
            :data-step="step.key"
          >
            <div :class="step.isDot2 ? 'dot2' : 'dot'"></div>
            <h5>{{ step.title }}</h5>
          </div>
        </div>
      </div>

      <!-- RIGHT: Description -->
      <div class="timeline-right">
        <div
          v-for="(desc, key) in descriptions"
          :key="key"
          class="desc-item"
          :class="{ active: key === 'objectif' }"
          :data-desc="key"
        >
          <h3>{{ desc.title }}</h3>
          <p v-for="(para, idx) in desc.paragraphs" :key="idx" v-html="para"></p>
        </div>
      </div>
    </div>
  </section>
</template>
