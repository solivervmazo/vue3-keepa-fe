<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const productId = ref('')
const searchProduct = () => {
  if (productId.value) {
    router.push({
      path: `/product/${productId.value}`
    })
  }
}
</script>

<template>
  <v-row>
    <v-col cols="6">
      <v-text-field
        v-model="productId"
        prepend-inner-icon="search"
        density="compact"
        label="Search"
        rounded="lg"
        variant="outlined"
        flat
        hide-details
        single-line
        placeholder="ASIN,UPC,EAN"
      ></v-text-field>
    </v-col>
    <v-col cols="2">
      <v-btn @click="searchProduct">Search</v-btn>
    </v-col>
  </v-row>
</template>

<style scoped>
.v-btn.v-btn--density-default {
  height: 100%;
}
</style>
