<script setup lang="ts">
import { type Product } from '@/types/types'

const props = defineProps<{
  product: Product
}>()
</script>

<template>
  <v-container class="d-flex flex-row ga-2">
    <div>
      <v-img
        :aspect-ratio="1"
        class="bg-white"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        width="200"
        cover
      ></v-img>
    </div>
    <div v-if="props.product">
      <p><strong>ASIN/UPC/EAN:</strong> {{ props.product.code }}</p>
      <p><strong>Variation Count:</strong> {{ props.product.variationCount }}</p>
      <p><strong>Rating Count:</strong> {{ props.product.ratingCount }}</p>
      <p><strong>Average Rating:</strong> {{ props.product.averageRating }}</p>
    </div>
  </v-container>
</template>
