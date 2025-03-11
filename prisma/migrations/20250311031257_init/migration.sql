-- CreateTable
CREATE TABLE "Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "roomNumber" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DietChart" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patientId" INTEGER NOT NULL,
    "morningMeal" TEXT NOT NULL,
    "afternoonMeal" TEXT NOT NULL,
    "nightMeal" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "specialInstructions" TEXT NOT NULL,
    CONSTRAINT "DietChart_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
