-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BoughtItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "boughtDate" DATETIME NOT NULL,
    "insertDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_BoughtItem" ("boughtDate", "id", "insertDate", "name", "price", "updateDate") SELECT "boughtDate", "id", "insertDate", "name", "price", "updateDate" FROM "BoughtItem";
DROP TABLE "BoughtItem";
ALTER TABLE "new_BoughtItem" RENAME TO "BoughtItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
