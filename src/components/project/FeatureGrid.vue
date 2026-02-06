<script setup>
defineProps({
  features: {
    type: Array,
    required: true
  },
  gridClass: {
    type: String,
    default: 'feature-grid'
  },
  cardClass: {
    type: String,
    default: 'feature-card'
  }
})
</script>

<template>
  <div :class="gridClass">
    <div
      v-for="feature in features"
      :key="feature.title"
      :class="cardClass"
    >
      <h3>{{ feature.title }}</h3>
      <p v-html="feature.description"></p>
    </div>
  </div>
</template>
