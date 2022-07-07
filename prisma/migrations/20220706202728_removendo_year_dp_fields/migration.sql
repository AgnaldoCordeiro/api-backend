/*
  Warnings:

  - A unique constraint covering the columns `[id,name,price]` on the table `Vehicle` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Vehicle_id_name_price_year_key";

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_id_name_price_key" ON "Vehicle"("id", "name", "price");
