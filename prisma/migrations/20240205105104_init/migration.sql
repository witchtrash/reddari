-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Red', 'White', 'Rose', 'Sparkling');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "abv" DECIMAL(65,30) NOT NULL,
    "category" "Category" NOT NULL,
    "producerId" INTEGER NOT NULL,
    "sku" INTEGER NOT NULL,
    "volume" DECIMAL(65,30) NOT NULL,
    "wineBlend" TEXT[],
    "year" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producer" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "place" TEXT,
    "district" TEXT,
    "name" TEXT NOT NULL,

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "Producer_name_key" ON "Producer"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
