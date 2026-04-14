/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Workout` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt";

-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "createdAt";
