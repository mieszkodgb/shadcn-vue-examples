<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
  >
    <RouterLink 
      to="/"
      class="text-sm font-medium transition-colors hover:text-primary"
      >
      Overview
    </RouterLink>
    <RouterLink 
      to="/list"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
      List view
    </RouterLink>
    <RouterLink 
      to="/chart"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
      Chart view
    </RouterLink>
    <RouterLink 
      to="/settings"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
      Setting view
    </RouterLink>
  </nav>
</template>
