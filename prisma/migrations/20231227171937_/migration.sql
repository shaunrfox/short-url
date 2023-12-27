-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "targetUrl" TEXT NOT NULL,
    "vanity" TEXT NOT NULL,
    "vanityUrl" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "author" TEXT NOT NULL DEFAULT 'Mr. Potato Head',
    "expiration" DATETIME,
    "note" TEXT
);
INSERT INTO "new_Link" ("active", "clicks", "createdAt", "expiration", "id", "note", "targetUrl", "updatedAt", "vanity", "vanityUrl") SELECT "active", "clicks", "createdAt", "expiration", "id", "note", "targetUrl", "updatedAt", "vanity", "vanityUrl" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
CREATE UNIQUE INDEX "Link_vanity_key" ON "Link"("vanity");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
