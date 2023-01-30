<template>
  <v-app full-height>
    <div class="d-flex align-center justify-center h-100">
      <v-card max-width="400" min-width="400">
        <v-form @submit.prevent="auth.login">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
            <v-card-text >
              <v-text-field prepend-icon="mdi-account" name="login" label="Login" type="text" v-model="auth.email"></v-text-field>
              <v-text-field id="password" prepend-icon="mdi-lock" name="password" label="Password" type="password" v-model="auth.password"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" block variant="elevated" color="primary" size="large">Login</v-btn>
            </v-card-actions>
        </v-form>
      </v-card>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { useAuthenticationStore } from "../store/authentication";
const auth = useAuthenticationStore();
</script>
