/*
  Warnings:

  - Added the required column `updatedAt` to the `Gadgets` table without a default value. This is not possible if the table is not empty.
  - Made the column `status` on table `Gadgets` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Gadgets" ADD COLUMN     "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "decommissonedAt" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(6) NOT NULL,
ALTER COLUMN "status" SET NOT NULL;
