<template>
  <div id="app">
    <v-app>
      <NuxtRouteAnnouncer />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-app>
  </div>
</template>

<script setup>
import '../assets/css/main.css'

// Color mode is handled by the color-mode module automatically
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  color: rgb(var(--v-theme-on-surface));
  background: rgb(var(--v-theme-surface));
}
</style>
