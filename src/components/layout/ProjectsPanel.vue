<script setup>
import { watch, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'

const props = defineProps({
  open: Boolean
})

const emit = defineEmits(['close'])

const animateOpen = () => {
  const panel = document.getElementById('projectsPanel')
  if (!panel) return
  gsap.to(panel, {
    scaleY: 1,
    opacity: 1,
    duration: 0.35,
    ease: 'power3.inOut'
  })
}

const animateClose = () => {
  const panel = document.getElementById('projectsPanel')
  if (!panel) return
  gsap.to(panel, {
    scaleY: 0,
    opacity: 0,
    duration: 0.25,
    ease: 'power2.inOut'
  })
}

watch(() => props.open, (isOpen) => {
  if (isOpen) {
    animateOpen()
  } else {
    animateClose()
  }
}, { immediate: true })

const projects = [
  {
    path: '/NDI',
    img: 'https://iutrs.unistra.fr/websites/iutrs/actus-agenda/2024-2025/ACTU_SITE.jpg',
    title: "Nuit de l'Info 2024",
    tech: 'NodeJs'
  },
  {
    path: '/myavatar',
    img: 'https://ps.w.org/gravatar-enhanced/assets/icon-256x256.png?rev=3133133',
    title: 'MyAvatar',
    tech: 'Symfony · Twig'
  },
  {
    path: '/animeCritik',
    img: '/img/animeCritik/onePiece.jpg',
    title: 'Critikanime',
    tech: 'Symfony · VueJs'
  }
]
</script>

<template>
  <div
    id="projectsPanel"
    class="projects-panel"
    :class="{ 'is-open': open }"
  >
    <div class="projects-panel-inner">
      <RouterLink
        v-for="project in projects"
        :key="project.path"
        :to="project.path"
        class="project-mini-card"
        @click="emit('close')"
      >
        <img :src="project.img" :alt="project.title">
        <div>
          <strong>{{ project.title }}</strong>
          <span>{{ project.tech }}</span>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.projects-panel {
  pointer-events: none;
}

.projects-panel.is-open {
  pointer-events: auto;
}
</style>
