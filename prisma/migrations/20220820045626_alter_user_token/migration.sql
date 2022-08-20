/*
  Warnings:

  - You are about to drop the column `token` on the `user` table. All the data in the column will be lost.
  - Added the required column `access_token` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `token`,
    ADD COLUMN `access_token` TEXT NOT NULL;
