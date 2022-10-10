/*
  Warnings:

  - You are about to drop the column `category` on the `BoughtItem` table. All the data in the column will be lost.
  - Added the required column `boughtDate` to the `BoughtItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `insertDate` to the `BoughtItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateDate` to the `BoughtItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BoughtItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "boughtDate" DATETIME NOT NULL,
    "insertDate" DATETIME NOT NULL,
    "updateDate" DATETIME NOT NULL
);
INSERT INTO "new_BoughtItem" ("id", "name", "price") SELECT "id", "name", "price" FROM "BoughtItem";
DROP TABLE "BoughtItem";
ALTER TABLE "new_BoughtItem" RENAME TO "BoughtItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
