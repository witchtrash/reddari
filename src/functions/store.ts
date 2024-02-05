import { Prisma, PrismaClient } from '@prisma/client';
import { ProductCollection } from '@app/schemas';
import { each } from 'lodash';

interface StoreArgs {
  data: ProductCollection;
}
export const store = async ({ data }: StoreArgs) => {
  const prisma = new PrismaClient();

  each(data, async (p) => {
    await prisma.product.upsert({
      create: {
        sku: p.ProductID,
        productName: p.ProductName,
        category: p.ProductCategory.name,
        price: new Prisma.Decimal(p.ProductPrice),
        volume: new Prisma.Decimal(p.ProductBottledVolume),
        abv: new Prisma.Decimal(p.ProductAlchoholVolume),
        wineVarietyBlend: p.ProductWine,
        primaryWineVariety: p.ProductSearchGrape,
        year: p.ProductYear,
        producer: {
          connectOrCreate: {
            create: {
              name: p.ProductProducer,
              country: p.ProductCountryOfOrigin,
              district: p.ProductDistrictOfOrigin,
              place: p.ProductPlaceOfOrigin,
            },
            where: {
              name: p.ProductProducer,
            },
          },
        },
      },
      update: {
        // sku and productName are not updated
        category: p.ProductCategory.name,
        price: new Prisma.Decimal(p.ProductPrice),
        volume: new Prisma.Decimal(p.ProductBottledVolume),
        abv: new Prisma.Decimal(p.ProductAlchoholVolume),
        wineVarietyBlend: p.ProductWine,
        primaryWineVariety: p.ProductSearchGrape,
        year: p.ProductYear,
        producer: {
          connectOrCreate: {
            create: {
              name: p.ProductProducer,
              country: p.ProductCountryOfOrigin,
              district: p.ProductDistrictOfOrigin,
              place: p.ProductPlaceOfOrigin,
            },
            where: {
              name: p.ProductProducer,
            },
          },
        },
      },
      where: {
        sku: p.ProductID,
      },
    });
  });
};
