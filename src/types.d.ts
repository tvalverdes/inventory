export type Category = 'Fruits' | 'Vegetables' | 'Beverages'

export interface Product {
  id: number
  name: string
  category: Category
  count: number
}
