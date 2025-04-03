/*
  Warnings:

  - Added the required column `postId` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "postId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "postId_index" ON "comments"("postId");
