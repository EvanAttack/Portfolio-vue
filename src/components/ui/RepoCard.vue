<script setup>
defineProps({
  repo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="repo-card p-3 h-100 d-flex flex-column">
    <div>
      <div class="d-flex justify-content-between align-items-start mb-2">
        <h5 class="h6 mb-0">{{ repo.name }}</h5>
        <small class="text-muted">{{ repo.lang }}</small>
      </div>

      <p class="small text-muted mb-2">
        {{ repo.desc }}
      </p>
    </div>

    <!-- FOOTER -->
    <div class="repo-footer mt-auto d-flex justify-content-between align-items-end">
      <a
        class="btn btn-sm btn-outline-primary"
        :href="repo.url || '#'"
        target="_blank"
        rel="noopener"
      >
        Voir
      </a>

      <div class="repo-stats text-end small text-muted">
        <div>
          <svg class="bi pe-none" width="16" height="16" aria-hidden="true">
            <use xlink:href="#star"></use>
          </svg>
          {{ repo.stars }}
        </div>
        <div>
          <svg class="bi pe-none" width="16" height="16" aria-hidden="true">
            <use xlink:href="#watching"></use>
          </svg>
          {{ repo.watchers }}
        </div>
        <div>
          <svg class="bi pe-none" width="16" height="16" aria-hidden="true">
            <use xlink:href="#forks"></use>
          </svg>
          {{ repo.forks }}
        </div>
      </div>
    </div>
  </div>
</template>
