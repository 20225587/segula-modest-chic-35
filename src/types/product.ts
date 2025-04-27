
export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  description: string;
  category: ProductCategory;
  tags: ProductTag[];
  images: string[];
  featured: boolean;
  new: boolean;
  inStock: boolean;
}

export type ProductCategory = 
  | 'dresses'
  | 'tops'
  | 'bottoms'
  | 'outerwear'
  | 'accessories'
  | 'activewear'
  | 'swimwear'
  | 'formal';

export type ProductTag =
  | 'eco-friendly'
  | 'organic'
  | 'recycled'
  | 'sustainable'
  | 'modest'
  | 'faith-based'
  | 'new-arrival'
  | 'bestseller';
