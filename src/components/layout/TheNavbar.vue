<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import gsap from 'gsap'
import ProjectsPanel from './ProjectsPanel.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'

const route = useRoute()
const projectsPanelOpen = ref(false)
const contactOpen = ref(false)

const emit = defineEmits(['open-contact'])

const toggleProjects = () => {
  projectsPanelOpen.value = !projectsPanelOpen.value
}

const closeProjects = () => {
  projectsPanelOpen.value = false
}

const openContact = () => {
  closeProjects()
  window.dispatchEvent(new CustomEvent('open-contact'))
}

const handleClickOutside = (e) => {
  const panel = document.getElementById('projectsPanel')
  const toggle = document.getElementById('projectsToggle')
  if (panel && toggle && !panel.contains(e.target) && !toggle.contains(e.target)) {
    closeProjects()
  }
}

const handleScroll = () => {
  if (projectsPanelOpen.value) {
    closeProjects()
  }
}

const handleEscape = (e) => {
  if (e.key === 'Escape' && projectsPanelOpen.value) {
    closeProjects()
  }
}

// Close panel when route changes
watch(() => route.path, () => {
  closeProjects()
})

onMounted(() => {
  const navbar = document.querySelector('.main-navbar')
  if (navbar) {
    gsap.fromTo(
      navbar,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
  }

  gsap.fromTo(
    '.nav-links li',
    { y: -10, opacity: 0 },
    { y: 0, opacity: 1, stagger: 0.1, delay: 0.3, duration: 0.6 }
  )

  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <nav class="main-navbar">
    <div class="nav-logo">
      <RouterLink to="/" @click="closeProjects">Evan</RouterLink>
    </div>

    <ul class="nav-links">
      <li>
        <RouterLink to="/" :class="{ active: route.path === '/' }" @click="closeProjects">
          Accueil
        </RouterLink>
      </li>
      <li class="nav-projects">
        <button
          id="projectsToggle"
          class="nav-link-btn"
          :class="{ active: route.path.startsWith('/myavatar') || route.path.startsWith('/animeCritik') || route.path.startsWith('/NDI') }"
          @click="toggleProjects"
        >
          Projets
        </button>
      </li>
      <li>
        <a href="/pdf/Evan_Nunes_CV.pdf" target="_blank" rel="noopener" @click="closeProjects">CV</a>
      </li>
    </ul>

    <div class="nav-cta-group">
      <ThemeToggle />
      <button id="contactToggle" class="nav-btn" @click="openContact">
        Me Contacter
      </button>
    </div>

    <ProjectsPanel :open="projectsPanelOpen" @close="closeProjects" />
  </nav>
</template>

<style scoped>
.nav-cta-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
