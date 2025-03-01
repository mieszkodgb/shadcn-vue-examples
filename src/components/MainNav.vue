<script setup lang="ts">
import { cn } from '@/lib/utils'
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-6', $attrs.class ?? '')"
  >
    <RouterLink 
      to="/"
      :class="['text-sm font-medium transition-colors, hover:text-primary',
              isActiveLink('/')
              ? ''
              : ' text-muted-foreground hover:text-primary',
              ]"
      >
      Overview
    </RouterLink>
    <RouterLink 
      to="/list"
      :class="['text-sm font-medium transition-colors, hover:text-primary',
              isActiveLink('/list')
              ? ''
              : ' text-muted-foreground hover:text-primary',
              ]"
      >
      List view
    </RouterLink>
    <RouterLink 
      to="/chart"
      :class="['text-sm font-medium transition-colors, hover:text-primary',
              isActiveLink('/chart')
              ? ''
              : ' text-muted-foreground hover:text-primary',
              ]"
      >
      Chart view
    </RouterLink>
    <RouterLink 
      to="/settings"
      :class="['text-sm font-medium transition-colors, hover:text-primary',
              isActiveLink('/settings')
              ? ''
              : ' text-muted-foreground hover:text-primary',
              ]"
      >
      Setting view
    </RouterLink>
  </nav>
</template>
