<script setup>
import { useGsap } from '../../composables/useGsap'

useGsap(({ gsap, ScrollTrigger }) => {
  const section = document.querySelector('.about-section')
  if (!section) return

  gsap.timeline({
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top top',
      end: '+=600',
      scrub: true,
      pin: true,
      pinSpacing: true
    }
  })
    .to('.about-title span', {
      opacity: 1,
      y: 0,
      stagger: 0.15
    })
    .to('.about-line', {
      width: '120px'
    }, '-=0.3')
    .to('.about-text', {
      opacity: 1,
      y: 0
    }, '-=0.2')
})
</script>

<template>
  <section class="about-section" id="about">
    <div class="about-container">
      <h2 class="about-title">
        <span>Un developpeur</span>
        <span class="highlight">curieux</span>
        <span>rigoureux</span>
        <span>et passionne</span>
      </h2>

      <div class="about-line"></div>

      <p class="about-text">
        J'aime comprendre comment les choses fonctionnent en profondeur,
        concevoir des solutions propres et efficaces, et transformer des idees
        en applications concretes.
        <br /><br />
        Que ce soit en developpement web, en backend ou sur des projets plus
        techniques, je travaille avec serieux, autonomie et une vraie envie
        de progresser en permanence.
      </p>
    </div>
  </section>
</template>
