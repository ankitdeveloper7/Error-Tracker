-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('Bug', 'InProcess', 'Fixed');

-- CreateTable
CREATE TABLE "public"."Admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "techstack" TEXT NOT NULL,
    "adminId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "public"."Error" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "linenum" INTEGER NOT NULL,
    "status" "public"."Status" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_id_key" ON "public"."Admin"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "public"."Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Error_id_key" ON "public"."Error"("id");

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "public"."Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Error" ADD CONSTRAINT "Error_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
