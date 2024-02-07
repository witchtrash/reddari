import React from 'react';

import { PrismaClient } from '@prisma/client';

import { ProductList } from '@app/components/product-list';

const Index = async () => {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    orderBy: {
      price: 'asc',
    },
    take: 12,
  });

  return <ProductList products={data} />;
};

export default Index;
