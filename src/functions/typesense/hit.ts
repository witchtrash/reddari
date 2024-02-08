import { Producer, Product, Category } from '@prisma/client';

type BaseHit = {
  [x: string]: unknown;
};
export interface ProductHit
  extends BaseHit,
    Omit<Product, 'volume' | 'price' | 'abv' | 'category'> {
  // volume, price and abv  are stored as decimals and indexed as floats
  volume: number;
  price: number;
  abv: number;
  producer: Producer;
  category: Category;
}
