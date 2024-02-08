import React from 'react';

import { map } from 'lodash';
import { useInfiniteHits } from 'react-instantsearch-core';

import { ProductHit } from '@app/functions/typesense/hit';

export const ProductHits = () => {
  const { hits, showMore, isLastPage } = useInfiniteHits<ProductHit>();

  return (
    <div className="flex flex-col gap-12 ">
      {hits.length === 0 ? <p>No results!</p> : null}
      {map(hits, (p) => (
        <div key={p.id} className="border-y border-y-primary p-8">
          <h2 className="text-lg font-semibold text-primary">
            {p.productName} - {p.sku}
          </h2>
          <p>
            {p.category} - {p.primaryWineVariety}
          </p>
          <p>{p.producer.name}</p>
          <p>{p.price} kr</p>
        </div>
      ))}
      {!isLastPage ? (
        <button type="button" onClick={showMore}>
          more!
        </button>
      ) : null}
    </div>
  );
};
