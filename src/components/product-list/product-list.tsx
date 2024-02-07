import React from 'react';

import { Product as ProductModel } from '@prisma/client';
import { map } from 'lodash';

import { Product } from '@app/components/product';

interface ProductListProps {
  products: ProductModel[];
}
export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 p-4">
        <p>filters</p>
      </div>
      <div className="col-span-8 p-4">
        <div className="divide flex flex-col gap-4 divide-black ">
          {map(products, (product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
