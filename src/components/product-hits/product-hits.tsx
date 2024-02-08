import React from 'react';

import { map } from 'lodash';
import { useInfiniteHits } from 'react-instantsearch-core';

import { ProductHit } from '@app/functions/typesense/hit';
import { Chip } from '@app/components/chip';

export const ProductHits = () => {
  const { hits, showMore, isLastPage } = useInfiniteHits<ProductHit>();

  return (
    <div className="flex flex-col gap-12 ">
      {hits.length === 0 ? <p>No results!</p> : null}
      {map(hits, (p) => (
        <div key={p.id} className="border-y border-y-primary p-8">
          <h2 className="mb-4 text-lg font-semibold text-primary">
            {p.productName}
            <div className="flex gap-2">
              <Chip text={p.category} />
              <Chip text={p.producer.country} />
              <Chip text={p.primaryWineVariety} />
            </div>
          </h2>
          <p>{p.price} kr</p>
          <p>{p.abv}%</p>
          <p>{p.volume} ml</p>
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
