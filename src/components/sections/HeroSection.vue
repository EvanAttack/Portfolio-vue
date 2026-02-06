<script setup>
import { useGsap } from '../../composables/useGsap'

useGsap(({ gsap }) => {
  const h1 = document.querySelector('.hero h1')
  const others = document.querySelectorAll('.hero p, .hero .btn')

  if (h1) {
    gsap.from(h1, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
  }

  if (others.length) {
    gsap.from(others, {
      y: 16,
      opacity: 0,
      stagger: 0.08,
      delay: 0.2,
      duration: 0.7
    })
  }
})
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4">
          <h1 class="display-5 fw-bold">
            Salut, je m'appelle <span style="color: var(--accent)">Evan</span>
          </h1>
          <p class="lead">
            Etudiant en <strong>3e annee de BUT Informatique</strong> — parcours <em>RACDV</em>.
            Passionne par le web, les apps et les animations modernes.
            Objectif : integrer une ecole d'ingenieur.
          </p>

          <p>
            Competences : HTML • CSS • JavaScript • PHP • MySQL • Docker • Java • Android • GLSL/WebGL
          </p>

          <div class="mt-3">
            <a class="btn btn-primary me-2" href="#projects">Voir mes projets</a>
            <a class="btn btn-outline-primary" href="#repos">Mes depots GitHub</a>
          </div>
        </div>

        <div class="col-lg-6 text-center">
          <img src="/img/evan.png" alt="moi" class="avatar">
        </div>
      </div>
    </div>
  </section>
</template>
