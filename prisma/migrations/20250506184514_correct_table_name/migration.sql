/*
  Warnings:

  - You are about to drop the `Gadgets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Gadgets";

-- CreateTable
CREATE TABLE "Gadget" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(511) NOT NULL,
    "status" "STATUS" NOT NULL DEFAULT 'Available',
    "decommissonedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "confirmationCode" INTEGER,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "Gadget_pkey" PRIMARY KEY ("id")
);
