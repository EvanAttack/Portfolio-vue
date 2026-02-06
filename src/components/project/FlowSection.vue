<script setup>
import { useGsap } from '../../composables/useGsap'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  steps: {
    type: Array,
    required: true
  },
  panels: {
    type: Array,
    required: true
  }
})

useGsap(({ gsap, ScrollTrigger }) => {
  const pin = document.querySelector('#ca-flow .ca-flow-pin')
  const steps = gsap.utils.toArray('#ca-flow [data-ca-step]')
  const panels = gsap.utils.toArray('#ca-flow [data-ca-panel]')

  if (pin && steps.length && panels.length) {
    function activate(key) {
      steps.forEach(s => s.classList.remove('active'))
      panels.forEach(p => p.classList.remove('active'))
      document.querySelector(`#ca-flow [data-ca-step="${key}"]`)?.classList.add('active')
      document.querySelector(`#ca-flow [data-ca-panel="${key}"]`)?.classList.add('active')
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: pin,
        start: 'top top',
        end: '+=900',
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const p = self.progress
          if (p < 0.33) activate('api')
          else if (p < 0.66) activate('front')
          else activate('avatar')
        }
      }
    }).to({}, { duration: 1 })
  }

  gsap.utils.toArray('.ca-flow-title').forEach(el => {
    gsap.fromTo(el,
      { y: 18, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      }
    )
  })
})
</script>

<template>
  <section class="ca-flow" id="ca-flow">
    <div class="ca-flow-pin">
      <div class="ca-flow-container">
        <div class="ca-flow-left">
          <h2 class="ca-flow-title">{{ title }}</h2>
          <p class="ca-flow-sub" v-html="subtitle"></p>

          <div class="ca-steps">
            <div
              v-for="(step, index) in steps"
              :key="step.key"
              class="ca-step"
              :class="{ active: index === 0 }"
              :data-ca-step="step.key"
            >
              <span class="dot"></span>
              <div>
                <strong>{{ step.title }}</strong>
                <small>{{ step.subtitle }}</small>
              </div>
            </div>
          </div>
        </div>

        <div class="ca-flow-right">
          <div
            v-for="(panel, index) in panels"
            :key="panel.key"
            class="ca-panel"
            :class="{ active: index === 0 }"
            :data-ca-panel="panel.key"
          >
            <h3>{{ panel.title }}</h3>
            <ul v-if="panel.list">
              <li v-for="item in panel.list" :key="item">{{ item }}</li>
            </ul>
            <div v-else v-html="panel.content"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
