<script setup>
import { useGsap } from '../composables/useGsap'
import ProjectHero from '../components/project/ProjectHero.vue'
import TeamSection from '../components/project/TeamSection.vue'
import PhotoGallery from '../components/project/PhotoGallery.vue'
import InterestCard from '../components/ui/InterestCard.vue'

const teamMembers = [
  { name: 'Evan Nunes', role: 'Front & Back', img: '/img/ndi/Evan.png' },
  { name: 'Damien Rostaing', role: 'Front & Back', img: '/img/ndi/Damien.jpg' },
  { name: 'Marc Haye', role: 'Front & Back', img: '/img/ndi/Marc.jpg' },
  { name: 'Paulo Moreira-Pereira', role: 'Front & Video', img: '/img/ndi/Paulo.jpg' },
  { name: 'Matteo Benhalima', role: 'Front & Back', img: '/img/ndi/Matteo.jpg' }
]

const skills = [
  {
    icon: '🎨',
    title: 'Interactivite JavaScript',
    description: "Developpement d'animations fluides et d'interactions utilisateur intuitives pour une experience immersive."
  },
  {
    icon: '⚡',
    title: 'Backend Node.js',
    description: 'Gestion performante des donnees avec un backend leger et efficace pour des temps de reponse optimaux.'
  },
  {
    icon: '👥',
    title: "Travail d'Equipe",
    description: 'Collaboration efficace et resolution de problemes dans un environnement de developpement rapide.'
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'Approche creative combinant sciences marines et anatomie humaine de maniere originale.'
  },
  {
    icon: '⏱️',
    title: 'Performance',
    description: "Conception et deploiement d'une application complete en temps limite lors de l'evenement."
  }
]

const photos = [
  '/img/ndi/photo1.JPG',
  '/img/ndi/photo2.JPG',
  '/img/ndi/photo3.JPG',
  '/img/ndi/photo4.JPG',
  '/img/ndi/photo5.JPG',
  '/img/ndi/photo6.JPG',
  '/img/ndi/photo7.JPG',
  '/img/ndi/photo8.JPG'
]

useGsap(({ gsap, ScrollTrigger }) => {
  // About section animation
  const aboutSection = document.querySelector('.about-section')
  if (aboutSection) {
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
  }

  // Interest cards animation
  const cards = gsap.utils.toArray('.interest-card')
  if (cards.length) {
    gsap.set(cards, { opacity: 0, y: 40 })

    ScrollTrigger.batch(cards, {
      start: 'top 85%',
      onEnter: batch =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: 'power3.out'
        }),
      onLeaveBack: batch =>
        gsap.to(batch, {
          opacity: 0,
          y: 40,
          stagger: 0.08,
          duration: 0.4
        })
    })
  }
})
</script>

<template>
  <div class="ndi-view">
    <ProjectHero
      badge="Projet academique"
      title="Nuit de l'info"
      description="Lors de la <strong>Nuit de l'Info 2024</strong>, j'ai participe a un evenement collaboratif reunissant des etudiants et des professionnels du developpement informatique. Le defi de cette edition etait de creer une <strong>application web interactive et educative</strong> mettant en avant les <strong>paralleles entre les systemes du corps humain</strong> et les <strong>systemes oceaniques</strong>."
      :technologies="['Html', 'CSS', 'NodeJs']"
      image="https://iutrs.unistra.fr/websites/iutrs/actus-agenda/2024-2025/ACTU_SITE.jpg"
      image-alt="Nuit de l'info"
    />

    <section class="about-section" id="about">
      <div class="about-container">
        <h2 class="about-title">
          <span>Le </span>
          <span class="highlight">Projet</span>
        </h2>

        <div class="about-line"></div>

        <p class="about-text">
          La Nuit de l'Info 2024 a reuni etudiants et professionnels autour d'un defi ambitieux : creer une application web interactive etablissant des paralleles entre les systemes du corps humain et les ecosystemes oceaniques.
          <br /><br />
          Notre equipe a concu une exploration interactive d'un ocean virtuel ou chaque element marin revele les secrets d'un organe humain. Les utilisateurs decouvrent ainsi les fonctions vitales de notre corps a travers des analogies marines captivantes.
          <br /><br />
          Cette experience immersive combine pedagogie et innovation technologique, offrant une nouvelle facon de comprendre la biologie humaine a travers le prisme de l'ocean.
        </p>
      </div>
    </section>

    <section class="interests-section">
      <div class="interests-container">
        <h2 class="interests-title">
          <span>Technologies</span> <span>& Competences</span>
        </h2>

        <div class="interests-grid">
          <InterestCard
            v-for="skill in skills"
            :key="skill.title"
            :icon="skill.icon"
            :title="skill.title"
            :description="skill.description"
          />
        </div>
      </div>
    </section>

    <TeamSection :members="teamMembers" />

    <PhotoGallery :photos="photos" />
  </div>
</template>
