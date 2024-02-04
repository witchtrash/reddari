import { z } from 'zod';

export const ProductTypeSchema = z.enum(['red', 'white', 'rose', 'bubbly']);

export const ProductSchema = z.object({
  /**
   * Product ID in ATVR
   */
  ProductID: z.number(),
  /**
   * The name of the product
   */
  ProductName: z.string().min(1),
  /**
   * Bottled volume in milliliters
   */
  ProductBottledVolume: z.number(),
  /**
   * The ABV percentile
   */
  ProductAlchoholVolume: z.number(),
  /**
   * The price in ATVR
   */
  ProductPrice: z.number(),
  /**
   * Food pairings, each letter in the string indicates a particular food pairing
   * Weird format
   */
  ProductFoodCategories: z.string(),
  /**
   * ProductCategory mostly contains useless information, but the type of wine is in here
   */
  ProductCategory: z.object({
    name: ProductTypeSchema,
  }),
  /**
   * The country of origin, in Icelandic
   */
  ProductCountryOfOrigin: z.string().min(1),
  /**
   * Indicates the container type the wine is in
   * Weird format!
   */
  ProductContainerType: z.string(),
  /**
   * The place of origin, sometimes in Icelandic
   */
  ProductPlaceOfOrigin: z.string(),
  /**
   * The district of origin, sometimes in Icelandic, usually the same as place of origin
   */
  ProductDistrictOfOrigin: z.string(),
  /**
   * Which blends of wine this is, if it's a blend, in a comma separated list
   */
  ProductWine: z.string(),
  /**
   * The vintage
   */
  ProductYear: z.string().transform((y) => Number(y)),
  /**
   * The flavor profile of the wine, robust, light, etc
   * Also in a weird format
   */
  ProductTasteGroup: z.string(),
  /**
   * What kind of stopper it has, a cork, screw cap, etc
   * Weird format alert
   */
  ProductPackagingClosing: z.string(),
  /**
   * What kind of container the wine is in
   * Ding ding ding, it's in a weird format
   */
  ProductPackagingContainer: z.string(),
  /**
   * The wine producer
   */
  ProductProducer: z.string(),
  /**
   * Which grape variety the wine mostly contains, used for filtering
   */
  ProductSearchGrape: z.string(),
});

export const ProductCollectionSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;
export type ProductType = z.infer<typeof ProductTypeSchema>;
export type ProductCollection = z.infer<typeof ProductCollectionSchema>;
