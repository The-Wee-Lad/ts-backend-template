/*
  Warnings:

  - Added the required column `confirmationCode` to the `Gadgets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiresAt` to the `Gadgets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gadgets" ADD COLUMN     "confirmationCode" INTEGER NOT NULL,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL;
