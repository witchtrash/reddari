/*
  Warnings:

  - The primary key for the `Producer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_producerId_fkey";

-- AlterTable
ALTER TABLE "Producer" DROP CONSTRAINT "Producer_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Producer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Producer_id_seq";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "producerId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
