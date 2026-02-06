<script setup>
defineProps({
  members: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'Notre equipe'
  }
})
</script>

<template>
  <section class="team-section">
    <h2 class="team-title">
      <span>Notre</span> <span class="highlight">equipe</span>
    </h2>

    <div class="team-grid">
      <div
        v-for="member in members"
        :key="member.name"
        class="team-card"
      >
        <div class="team-avatar">
          <img :src="member.img" :alt="member.name">
        </div>
        <h3>{{ member.name }}</h3>
        <span>{{ member.role }}</span>
      </div>
    </div>
  </section>
</template>
