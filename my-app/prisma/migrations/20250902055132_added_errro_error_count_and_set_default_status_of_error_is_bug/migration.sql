/*
  Warnings:

  - You are about to drop the column `filename` on the `Error` table. All the data in the column will be lost.
  - You are about to drop the column `linenum` on the `Error` table. All the data in the column will be lost.
  - Added the required column `colno` to the `Error` table without a default value. This is not possible if the table is not empty.
  - Added the required column `error` to the `Error` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lineno` to the `Error` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Error` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Error" DROP COLUMN "filename",
DROP COLUMN "linenum",
ADD COLUMN     "colno" INTEGER NOT NULL,
ADD COLUMN     "error" TEXT NOT NULL,
ADD COLUMN     "errorCount" INTEGER DEFAULT 1,
ADD COLUMN     "lineno" INTEGER NOT NULL,
ADD COLUMN     "source" TEXT NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Bug';
