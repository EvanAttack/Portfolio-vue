<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const isOpen = ref(false)

const open = () => {
  isOpen.value = true
  const overlay = document.getElementById('contactOverlay')
  const panel = document.getElementById('contactPanel')

  if (overlay && panel) {
    overlay.style.pointerEvents = 'auto'
    gsap.to(overlay, { opacity: 1 })
    gsap.to(panel, { x: 0 })
  }
}

const close = () => {
  isOpen.value = false
  const overlay = document.getElementById('contactOverlay')
  const panel = document.getElementById('contactPanel')

  if (overlay && panel) {
    overlay.style.pointerEvents = 'none'
    gsap.to(overlay, { opacity: 0 })
    gsap.to(panel, { x: '100%' })
  }
}

const handleOpenContact = () => {
  open()
}

onMounted(() => {
  window.addEventListener('open-contact', handleOpenContact)
})

onUnmounted(() => {
  window.removeEventListener('open-contact', handleOpenContact)
})
</script>

<template>
  <div id="contactOverlay" class="contact-overlay" @click="close"></div>

  <div id="contactPanel" class="contact-panel">
    <button class="contact-close" @click="close">✕</button>

    <h2>Contactez-moi</h2>

    <div class="contact-info">
      <div class="contact-row">
        <span class="label">Nom</span>
        <span class="value">Evan Nunes</span>
      </div>

      <div class="contact-row">
        <span class="label">Email</span>
        <a href="mailto:evan.nunes@orange.fr" class="value">
          evan.nunes@orange.fr
        </a>
      </div>

      <div class="contact-row">
        <span class="label">Telephone</span>
        <a href="tel:+33672218600" class="value">
          06 72 21 86 00
        </a>
      </div>

      <p class="contact-note">
        Merci de m'envoyer un message avant d'appeler,<br>
        je suis souvent en cours ou je filtre les appels non identifies.
      </p>
    </div>

    <h3 class="contact-subtitle">Mes reseaux professionnels</h3>

    <div class="contact-socials">
      <a href="https://github.com/EvanAttack" target="_blank">GitHub</a>
      <a href="https://gitlabinfo.iutmontp.univ-montp2.fr/nunese" target="_blank">GitLab</a>
      <a href="https://www.linkedin.com/in/evan-nunes" target="_blank">LinkedIn</a>
    </div>
  </div>
</template>
