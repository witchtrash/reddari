/*
  Warnings:

  - You are about to drop the column `wineBlend` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "wineBlend",
ADD COLUMN     "primaryWineVariety" TEXT,
ADD COLUMN     "wineVarietyBlend" TEXT[];
