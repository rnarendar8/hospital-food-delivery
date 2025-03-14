/*
  Warnings:

  - Added the required column `updatedAt` to the `DietChart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allergies` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedNumber` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diseases` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emergencyContact` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `floorNumber` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DietChart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patientId" INTEGER NOT NULL,
    "morningMeal" TEXT NOT NULL,
    "afternoonMeal" TEXT NOT NULL,
    "nightMeal" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "specialInstructions" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "DietChart_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DietChart" ("afternoonMeal", "id", "ingredients", "morningMeal", "nightMeal", "patientId", "specialInstructions") SELECT "afternoonMeal", "id", "ingredients", "morningMeal", "nightMeal", "patientId", "specialInstructions" FROM "DietChart";
DROP TABLE "DietChart";
ALTER TABLE "new_DietChart" RENAME TO "DietChart";
CREATE TABLE "new_Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "diseases" TEXT NOT NULL,
    "allergies" TEXT NOT NULL,
    "roomNumber" TEXT NOT NULL,
    "bedNumber" TEXT NOT NULL,
    "floorNumber" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "emergencyContact" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Patient" ("age", "contact", "gender", "id", "name", "roomNumber") SELECT "age", "contact", "gender", "id", "name", "roomNumber" FROM "Patient";
DROP TABLE "Patient";
ALTER TABLE "new_Patient" RENAME TO "Patient";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
