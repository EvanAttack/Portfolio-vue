<script setup>
import { useDarkMode } from '../../composables/useDarkMode'

const { isDark, toggleTheme } = useDarkMode()
</script>

<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="isDark ? 'Activer le mode clair' : 'Activer le mode sombre'"
    :title="isDark ? 'Mode clair' : 'Mode sombre'"
  >
    <span v-if="isDark" class="icon">🌙</span>
    <span v-else class="icon">☀️</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  background: none;
  border: 2px solid rgba(59, 130, 246, 0.2);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
}

.theme-toggle:hover {
  transform: scale(1.1);
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
}

.icon {
  font-size: 1.2rem;
}
</style>
