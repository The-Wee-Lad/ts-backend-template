/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- CreateEnum
CREATE TYPE "STATUS" AS ENUM ('Available', 'Deployed', 'Destroyed', 'Decommissioned');

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "Gadgets" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(511) NOT NULL,
    "status" "STATUS" NOT NULL DEFAULT 'Available',

    CONSTRAINT "Gadgets_pkey" PRIMARY KEY ("id")
);
