<script setup>
import ProjectHero from '../components/project/ProjectHero.vue'
import MaskSection from '../components/project/MaskSection.vue'
import FeatureGrid from '../components/project/FeatureGrid.vue'
import PhotoGallery from '../components/project/PhotoGallery.vue'

const features = [
  {
    title: 'Inscription & Auth',
    description: 'Login, mot de passe, email + photo optionnelle. Espace prive apres connexion.'
  },
  {
    title: 'Gestion profil',
    description: "Voir/modifier/supprimer l'avatar. Modifier email/mot de passe avec validation du mot de passe actuel."
  },
  {
    title: 'API Avatar',
    description: 'Acces public via <code>/avatar/{hash}</code> (SHA-256 email). Image par defaut si inexistant.'
  },
  {
    title: 'Confidentialite',
    description: 'Profil masquable/demasquable en AJAX. Avatar inaccessible si profil masque.'
  },
  {
    title: 'Maintenance',
    description: "Mode maintenance via variable d'environnement : toutes les routes (y compris avatars) redirigent."
  },
  {
    title: 'Admin + CLI',
    description: 'Liste utilisateurs + suppression (hors admins). Commandes Symfony : creer/supprimer un utilisateur.'
  }
]

const technicalConstraints = [
  'Images stockees hors <code>public/</code> et servies via controleur (BinaryFileResponse).',
  "Mise a jour du hash lors d'un changement d'email.",
  "Suppression de l'avatar lors de la suppression du compte.",
  'JavaScript "vanilla" uniquement (AJAX + debouncing).'
]

const photos = [
  '/img/myavatar/1.png',
  '/img/myavatar/2.png',
  '/img/myavatar/3.png',
  '/img/myavatar/4.png',
  '/img/myavatar/5.png',
  '/img/myavatar/6.png',
  '/img/myavatar/7.png',
  '/img/myavatar/8.png'
]
</script>

<template>
  <div class="myavatar-view">
    <ProjectHero
      badge="Projet academique — Symfony"
      title="MyAvatar"
      description="Application web en <strong>server-side rendering</strong> (Symfony + Twig) inspiree de <strong>Gravatar</strong> : associer une adresse email a une photo de profil, recuperable via une URL basee sur un <strong>hash SHA-256</strong>."
      :technologies="['Symfony', 'Twig', 'MySQL', 'JS (AJAX)', 'SHA-256']"
      image="https://ps.w.org/gravatar-enhanced/assets/icon-256x256.png?rev=3133133"
      image-alt="MyAvatar"
    />

    <MaskSection
      title="Avant / Apres refonte"
      subtitle="Une refonte UI realisee pour rendre l'interface plus moderne, lisible et coherente (typographie, layout, hierarchie visuelle)."
      before-image="/img/avant.png"
      after-image="/img/apres.png"
      before-label="Apres"
      after-label="Avant"
    />

    <section class="project-block">
      <div class="container narrow">
        <h2>Fonctionnalites realisees</h2>
        <FeatureGrid :features="features" />
      </div>
    </section>

    <section class="project-block alt">
      <div class="container narrow">
        <h2>Contraintes techniques importantes</h2>
        <ul class="project-list">
          <li v-for="(constraint, index) in technicalConstraints" :key="index" v-html="constraint"></li>
        </ul>
      </div>
    </section>

    <PhotoGallery :photos="photos" />
  </div>
</template>
