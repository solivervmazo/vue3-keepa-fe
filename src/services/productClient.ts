import axios from 'axios'
import { type Product } from '@/types/types'
const apiClient = axios.create({
  baseURL: 'https://vue3-keepa-express.onrender.com/api' // Replace with your backend API URL
})

export const fetchProductData = async (
  productId: string
): Promise<{
  data?: Product
  statusCode: number
  statusText: string
}> => {
  try {
    const response = await apiClient.get<Product>(`/product/${productId}`)
    return {
      data: response.data,
      statusCode: response.status,
      statusText: response.statusText
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return {
          statusCode: error.response.status,
          statusText: error.response.data.error || 'Unknown error occurred'
        }
      } else {
        return {
          statusCode: 500,
          statusText: 'Internal Server Error: Unable to communicate with the server'
        }
      }
    } else {
      return {
        statusCode: 500,
        statusText: 'Internal Server Error: Unexpected error occurred'
      }
    }
  }
}
