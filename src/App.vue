<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import SearchBar from '@/components/searchBar/SearchBar.vue'
</script>

<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-start">
        <search-bar></search-bar>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <v-row no-gutters class="pa-5">
                <v-alert border="top" border-color="success" elevation="2">
                  Please use following Product code for successful result: B07HGTZSZY, B08JG8J5JP,
                  B09XYZ1234
                </v-alert>
              </v-row>
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
</style>
