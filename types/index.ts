// Global type definitions for the Makkar Bakers app

export interface User {
  id: string
  email: string
  name: string | null
  image: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: ProductCategory
  isAvailable: boolean
  allergens: string[]
  createdAt: Date
  updatedAt: Date
}

export enum ProductCategory {
  CAKES = 'CAKES',
  CUPCAKES = 'CUPCAKES',
  PASTRIES = 'PASTRIES',
  SEASONAL = 'SEASONAL',
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: OrderStatus
  deliveryDate: Date
  deliveryAddress: Address
  specialInstructions?: string
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  id: string
  productId: string
  quantity: number
  unitPrice: number
  customizations?: Record<string, string>
}

export enum OrderStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  READY = 'READY',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form types
export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
  subject: string
}

export interface OrderForm {
  deliveryDate: string
  deliveryAddress: Address
  specialInstructions?: string
  items: {
    productId: string
    quantity: number
    customizations?: Record<string, string>
  }[]
}

// Environment variables
export interface EnvironmentVariables {
  DATABASE_URL: string
  NEXTAUTH_SECRET: string
  NEXTAUTH_URL: string
  GOOGLE_CLIENT_ID: string
  GOOGLE_CLIENT_SECRET: string
  GITHUB_CLIENT_ID: string
  GITHUB_CLIENT_SECRET: string
  STRIPE_PUBLISHABLE_KEY: string
  STRIPE_SECRET_KEY: string
  GOOGLE_CLOUD_PROJECT_ID: string
  GOOGLE_CLOUD_STORAGE_BUCKET: string
}
