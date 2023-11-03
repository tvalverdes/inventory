import { Product } from '../types'
import productsData from './products.json'

const products: Product[] = productsData as Product[]
export const getProducts = (): Product[] => products

export const addProduct = (): null => null
