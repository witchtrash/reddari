import React from 'react';

import { Product as ProductModel } from '@prisma/client';

interface ProductProps {
  product: ProductModel;
}
export const Product = ({ product }: ProductProps) => {
  return (
    <div className="h-48 bg-surface">
      <h2 className="text-2xl font-bold">{product.productName}</h2>
      <p>{product.price.toString()} ISK</p>
    </div>
  );
};
