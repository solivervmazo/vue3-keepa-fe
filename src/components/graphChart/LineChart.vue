<script lang="ts" setup>
import { defineProps } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

interface ChartProps {
  labels: string[]
  datasets: {
    label: string
    backgroundColor?: string
    data: number[]
  }[]
}

const props = defineProps<ChartProps>()

const chartData = {
  labels: props.labels,
  datasets: props.datasets
}
</script>

<template>
  <Line :data="chartData" />
</template>
