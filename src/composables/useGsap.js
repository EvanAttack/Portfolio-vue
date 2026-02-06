import { onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, Flip)

/**
 * Composable for managing GSAP animations with proper Vue lifecycle
 * Solves the Turbo cache issue by using Vue's onMounted/onUnmounted hooks
 *
 * @param {Function} initFn - Function that initializes GSAP animations
 *                            Should return a cleanup function (optional)
 */
export function useGsap(initFn) {
  let cleanup = null
  let triggers = []

  onMounted(async () => {
    await nextTick()

    requestAnimationFrame(() => {
      const result = initFn({ gsap, ScrollTrigger, Flip })

      if (typeof result === 'function') {
        cleanup = result
      }

      triggers = ScrollTrigger.getAll()
      ScrollTrigger.refresh()
    })
  })

  onUnmounted(() => {
    if (cleanup) {
      cleanup()
    }

    // Only kill ScrollTriggers that were created by this component
    triggers.forEach(st => st.kill())
  })
}

/**
 * Simple animation helper for entrance animations
 */
export function useEntranceAnimation(selector, options = {}) {
  const {
    y = 30,
    opacity = 0,
    duration = 0.8,
    stagger = 0.1,
    delay = 0,
    ease = 'power3.out'
  } = options

  useGsap(({ gsap }) => {
    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    gsap.from(elements, {
      y,
      opacity,
      duration,
      stagger,
      delay,
      ease
    })
  })
}

/**
 * ScrollTrigger batch animation helper
 */
export function useScrollBatch(selector, options = {}) {
  const {
    start = 'top 85%',
    y = 40,
    duration = 0.6,
    stagger = 0.12
  } = options

  useGsap(({ gsap, ScrollTrigger }) => {
    const elements = gsap.utils.toArray(selector)
    if (!elements.length) return

    gsap.set(elements, { opacity: 0, y })

    ScrollTrigger.batch(elements, {
      start,
      onEnter: batch =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger,
          duration,
          ease: 'power3.out'
        }),
      onLeaveBack: batch =>
        gsap.to(batch, {
          opacity: 0,
          y,
          stagger: stagger / 2,
          duration: duration * 0.6
        })
    })
  })
}

export { gsap, ScrollTrigger, Flip }
