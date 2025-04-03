/*
  Warnings:

  - You are about to drop the column `postId` on the `comments` table. All the data in the column will be lost.
  - Added the required column `productId` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "postId_index";

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "postId",
ADD COLUMN     "productId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "productId_index" ON "comments"("productId");
