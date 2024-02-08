import { Prisma } from '@prisma/client';
import { CollectionCreateSchema } from 'typesense/lib/Typesense/Collections';

const Fields = {
  ...Prisma.ProductScalarFieldEnum,
  ...Prisma.ProducerScalarFieldEnum,
};

export const ProductCollection: CollectionCreateSchema = {
  name: 'products',
  fields: [
    {
      name: Fields.productName,
      type: 'string',
    },
    {
      name: Fields.abv,
      type: 'float',
    },
    {
      name: Fields.primaryWineVariety,
      type: 'string',
      facet: true,
    },
    {
      name: Fields.category,
      type: 'string',
      facet: true,
    },
  ],
};
