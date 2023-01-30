<template>
  <v-app-bar>
    <v-app-bar-nav-icon variant="text" @click.stop="layout.toggleDrawer()"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script setup lang="ts">
import {useLayoutStore} from "@/store/layout"
const layout = useLayoutStore();
</script>

<style scoped></style>
