-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "targetUrl" TEXT NOT NULL,
    "vanity" TEXT NOT NULL,
    "vanityUrl" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "expiration" DATETIME,
    "note" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_vanity_key" ON "Link"("vanity");
