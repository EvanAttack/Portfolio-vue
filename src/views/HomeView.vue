<script setup>
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import InterestsSection from '../components/sections/InterestsSection.vue'
import TimelineSection from '../components/sections/TimelineSection.vue'
import SkillsSection from '../components/sections/SkillsSection.vue'
import ReposSection from '../components/sections/ReposSection.vue'
import ProjectsCarousel from '../components/sections/ProjectsCarousel.vue'
</script>

<template>
  <div class="home-view">
    <HeroSection />
    <AboutSection />
    <InterestsSection />
    <TimelineSection />
    <SkillsSection />
    <ReposSection />
    <ProjectsCarousel />

    <footer class="bg-transparent">
      <div class="container text-center">
        <p class="mb-0">© {{ new Date().getFullYear() }} Evan N. — Portfolio cree avec Vue.js, Bootstrap & GSAP</p>
      </div>
    </footer>
  </div>
</template>
