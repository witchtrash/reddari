import { Product } from '@prisma/client';
import { map } from 'lodash';

interface ProductListProps {
  products: Product[];
}
export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="">
      <div className="p-4 uppercase text-sm font-semibold font-sans text-gray-700">
        <p>filters</p>
      </div>
      <div className="container grid grid-cols-3 p-4 gap-8 mx-auto">
        {map(products, (product) => (
          <div key={product.id} className="h-48 bg-surface">
            <h2 className="text-2xl font-bold">{product.productName}</h2>
            <p>{product.price.toString()} ISK</p>
          </div>
        ))}
      </div>
    </div>
  );
};
