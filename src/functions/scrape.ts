import {
  ProductCollection,
  ProductSchema,
  ProductType,
} from '@reddari/schemas';
import ky from 'ky';
import { each, get } from 'lodash';
import { z } from 'zod';

const client = ky.extend({
  headers: {
    'User-Agent': 'reddari/0.1',
    Accept: 'application/json',
    'Accept-Language': 'en-GB,en;q=0.5',
    'Content-Type': 'application/json; charset=utf-8',
  },
});

const searchUrl =
  'https://www.vinbudin.is/addons/origo/module/ajaxwebservices/search.asmx/DoSearch';

interface ResponseData {
  // For some reason this is a string of JSON data, not actually JSON
  d: string;
}

const ParsedResponseDataSchema = z.object({
  total: z.number(),
  data: z.unknown().array(),
});

interface ScrapeArgs {
  type: ProductType;
}
export const scrape = async ({ type }: ScrapeArgs) => {
  const searchParams = new URLSearchParams({
    category: type,
    skip: '0',
    count: '1',
    orderBy: 'name asc',
  });

  // Request a single product to get the total amount of products available
  const count = await client
    .get(searchUrl, {
      searchParams,
    })
    .json<ResponseData>();

  const { total } = ParsedResponseDataSchema.parse(JSON.parse(count.d));

  searchParams.set('count', `${total}`);

  // Feed the count from the first request into this one to fetch everything
  const actual = await client
    .get(searchUrl, {
      searchParams,
    })
    .json<ResponseData>();

  const { data } = ParsedResponseDataSchema.parse(JSON.parse(actual.d));

  const collection: ProductCollection = [];

  each(data, (d) => {
    try {
      const parsed = ProductSchema.parse(d);
      collection.push(parsed);
    } catch {
      const sku = get(d, 'ProductID') ?? 'Unknown';
      const name = get(d, 'ProductName') ?? 'Unknown';

      console.error('Product did not pass schema validation');
      console.error(` · [SKU]: ${sku}`);
      console.error(` · [Name]: ${name}`);
    }
  });

  return collection;
};
