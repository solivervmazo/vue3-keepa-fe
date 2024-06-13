<script setup lang="ts">
interface Props {
  rating: number
}

const props = defineProps<Props>()

const getStarClass = (starNumber: number) => {
  if (props.rating >= starNumber) {
    return 'text-yellow'
  } else if (props.rating >= starNumber - 0.5) {
    return 'text-yellow'
  } else {
    return 'text-grey'
  }
}

const getStarIcon = (starNumber: number) => {
  if (props.rating >= starNumber) {
    return 'star'
  } else if (props.rating >= starNumber - 0.5) {
    return 'star_half'
  } else {
    return 'star'
  }
}
</script>

<template>
  <div class="d-flex flex-row justify-start align-center">
    <v-icon v-for="n in 5" :key="n" :class="getStarClass(n)">
      {{ getStarIcon(n) }}
    </v-icon>
    <span class="text-overline">({{ props.rating }})</span>
  </div>
</template>

<style scoped>
.text-yellow {
  color: yellow;
}
.text-grey {
  color: grey;
}
</style>
