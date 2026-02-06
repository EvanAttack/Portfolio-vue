<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="interest-card">
    <span class="icon">{{ icon }}</span>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>
