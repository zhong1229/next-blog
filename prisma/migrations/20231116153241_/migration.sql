-- DropIndex
DROP INDEX `Comment_userEmail_fkey` ON `Comment`;

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
