<script setup lang="ts">
import StarRating from '@/components/starRating/StarRating.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import ProductChart from '@/components/ProductChart.vue'
import LineChart from '@/components/graphChart/LineChart.vue'
import { ref, onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { fetchProductData } from '@/services/productClient'
import { type Product } from '@/types/types'

const route = useRoute()

const product = ref<Product | null>(null)
const error = ref<string>('')

const buyBoxPricesData = ref([
  {
    label: 'Buy Box Prices',
    backgroundColor: '#42A5F5',
    data: [0, 0, 0]
  }
])

const inStockRateData = ref([
  {
    label: 'In-Stock Rate',
    backgroundColor: '#66BB6A',
    data: [0, 0, 0]
  }
])

const salesRank = ref([
  {
    label: 'Historical Sales Rank',
    backgroundColor: '#66BB6A',
    data: [0, 0, 0]
  }
])

const fetchProduct = async (id: string) => {
  try {
    const response = await fetchProductData(id)
    product.value = response.data ?? null
    if (!product.value) {
      error.value = response.statusText ?? 'Something went wrong.'
      return
    }
    if (product.value) {
      buyBoxPricesData.value[0].data = [
        product.value.buyBoxPrices.last30Days,
        product.value.buyBoxPrices.last90Days,
        product.value.buyBoxPrices.last180Days
      ]

      inStockRateData.value[0].data = [
        product.value.inStockRate.last30Days,
        product.value.inStockRate.last90Days,
        product.value.inStockRate.last180Days
      ]

      salesRank.value[0].data = product.value.salesRankChartData.data
    }
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  const productId = route.params.id as string
  if (productId) {
    fetchProduct(productId)
  }
})

watchEffect(() => {
  const productId = route.params.id as string
  if (productId) {
    error.value = ''
    fetchProduct(productId)
  }
})
</script>

<template>
  <v-row no-gutters class="pa-5">
    <v-alert border="top" border-color="success" elevation="2">
      Please use following Product code for successful result: B07HGTZSZY, B08JG8J5JP, B09XYZ1234
    </v-alert>
  </v-row>
  <v-row v-if="error" no-gutters class="pa-5">
    <v-col>
      <v-alert border="top" type="warning" variant="outlined" prominent>
        {{ error }}
      </v-alert>
    </v-col>
  </v-row>
  <v-container v-if="product">
    <v-row no-gutters>
      <v-col>
        <v-container class="d-flex flex-column">
          <div>
            <p class="text-h4">{{ product?.title || 'No Title Available' }}</p>
          </div>
          <div>
            <star-rating :rating="product?.averageRating ?? 0" />
          </div>
        </v-container>
        <!-- Title / Title -->
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col sm="12" md="6">
        <product-detail :product="product" />
      </v-col>
      <v-col sm="12" md="6">
        <!-- Sales Rank -->
        <line-chart :labels="product?.salesRankChartData?.labels ?? []" :datasets="salesRank" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <!-- Avg In-stock / Buyback price -->
      <v-col>
        <v-container class="d-flex flex-column">
          <product-chart
            :buy-box-prices-data="buyBoxPricesData"
            :in-stock-rate-data="inStockRateData"
          ></product-chart>
        </v-container>
      </v-col> </v-row
  ></v-container>
</template>
