<script setup lang="ts">
import { ref, defineProps } from 'vue'
import BarChart from '@/components/graphChart/BarChart.vue'

const tab = ref(null)

const props = defineProps<{
  buyBoxPricesData?: []
  inStockRateData?: []
}>()
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab :value="1" class="text-subtitle-2">Average Buy Box Prices</v-tab>
      <v-tab :value="2" class="text-subtitle-2">In Stock Rate</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item :value="1">
          <BarChart
            v-if="props.buyBoxPricesData"
            :labels="['30 Days', '90 Days', '180 Days']"
            :datasets="props.buyBoxPricesData"
          />
        </v-tabs-window-item>
        <v-tabs-window-item :value="2">
          <BarChart
            v-if="props.inStockRateData"
            :labels="['30 Days', '90 Days', '180 Days']"
            :datasets="props.inStockRateData"
          />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>
