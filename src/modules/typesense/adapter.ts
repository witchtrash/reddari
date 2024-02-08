import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

import { getSearchClientConfig } from './config';

const server = getSearchClientConfig();
export const typesenseAdapter = new TypesenseInstantSearchAdapter({
  server,
  additionalSearchParameters: {
    query_by: 'productName,primaryWineVariety,category',
    num_typos: 1,
    typo_tokens_threshold: 1,
  },
});
