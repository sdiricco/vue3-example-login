<template>
  <v-app id="inspire">
    <NavigationDrawer />
    <AppBar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import AppBar from "@/components/AppBar.vue";
</script>

<style scoped></style>
