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
  color: rgb(31 41 55); /* gray-800 */
  background: rgb(255 255 255); /* white */
}

.dark body {
  color: rgb(249 250 251); /* gray-50 */
  background: rgb(17 24 39); /* gray-900 */
}
</style>
