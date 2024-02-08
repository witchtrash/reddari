'use client';

import React from 'react';

import { InstantSearch } from 'react-instantsearch-core';

import { ProductHits } from '@app/components/product-hits';
import { typesenseAdapter } from '@app/modules/typesense';
import { Search } from '@app/components/search/search';

export const ProductList = () => {
  return (
    <InstantSearch
      indexName="products"
      searchClient={typesenseAdapter.searchClient}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-4 p-4">
          <p>filters</p>
          <Search />
        </div>
        <div className="col-span-8 p-4">
          <ProductHits />
        </div>
      </div>
    </InstantSearch>
  );
};
