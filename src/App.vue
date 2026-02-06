<script setup>
import { onMounted } from 'vue'
import TheNavbar from './components/layout/TheNavbar.vue'
import ContactPanel from './components/layout/ContactPanel.vue'
import { useDarkMode } from './composables/useDarkMode'

const { isDark } = useDarkMode()

onMounted(() => {
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})
</script>

<template>
  <div id="portfolio-app">
    <TheNavbar />

    <main>
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <ContactPanel />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
