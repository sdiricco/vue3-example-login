<template>
  <v-navigation-drawer v-model="layout.drawer" temporary>
    <v-list>
      <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" :title="auth.user" :subtitle="auth.email"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-folder" title="Dashboard" value="dashboard" to="/home/dashboard"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="Profile" value="profile" to="/home/profile"></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-4">
        <v-btn block variant="outlined" @click="auth.logout"> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useLayoutStore } from "@/store/layout";
import { useAuthenticationStore } from "@/store/authentication";
const layout = useLayoutStore();
const auth = useAuthenticationStore();
</script>
<style scoped></style>
