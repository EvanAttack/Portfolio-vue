<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

defineProps({
  photos: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'Galerie photos'
  }
})

const activeIndex = ref(null)

const handleOpen = (index) => {
  const boxContent = document.querySelectorAll('.ndi-gallery .box-content')[index]
  const modalContent = document.querySelector('.ndi-gallery .modal .content')
  const modal = document.querySelector('.ndi-gallery .modal')
  const overlay = document.querySelector('.ndi-gallery .modal .overlay')

  if (!boxContent || !modalContent) return

  const state = Flip.getState(boxContent)

  modalContent.appendChild(boxContent)
  activeIndex.value = index

  gsap.set(modal, { autoAlpha: 1 })

  Flip.from(state, {
    duration: 0.7,
    ease: 'power1.inOut',
    absolute: true
  })

  gsap.to(overlay, { autoAlpha: 0.65, duration: 0.35 })
}

const handleClose = () => {
  if (activeIndex.value === null) return

  const boxContent = document.querySelector('.ndi-gallery .modal .content .box-content')
  const boxes = document.querySelectorAll('.ndi-gallery .boxes-container .box')
  const modal = document.querySelector('.ndi-gallery .modal')
  const overlay = document.querySelector('.ndi-gallery .modal .overlay')

  if (!boxContent || !boxes[activeIndex.value]) return

  const state = Flip.getState(boxContent)

  boxes[activeIndex.value].appendChild(boxContent)
  activeIndex.value = null

  gsap.to([modal, overlay], {
    autoAlpha: 0,
    duration: 0.35,
    ease: 'power1.inOut'
  })

  Flip.from(state, {
    duration: 0.7,
    ease: 'power1.inOut',
    absolute: true,
    onComplete: () => gsap.set(boxContent, { zIndex: 'auto' })
  })

  gsap.set(boxContent, { zIndex: 1002 })
}

const handleClick = (index) => {
  if (activeIndex.value !== null) {
    handleClose()
  } else {
    handleOpen(index)
  }
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && activeIndex.value !== null) {
    handleClose()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section class="ndi-gallery">
    <h2 class="gallery-title">
      <span>Galerie</span> <span class="highlight">photos</span>
    </h2>
    <div class="wrapper">
      <div class="boxes-container">
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="box"
        >
          <div
            class="box-content"
            :style="{ backgroundImage: `url('${photo}')` }"
            :aria-label="`Photo ${index + 1}`"
            @click="handleClick(index)"
          ></div>
        </div>
      </div>
    </div>

    <div class="modal">
      <div class="overlay" @click="handleClose"></div>
      <div class="content"></div>
    </div>
  </section>
</template>
