"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database1604022653932 = void 0;
class Database1604022653932 {
    constructor() {
        this.name = "Database1604022653932";
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(196) NOT NULL, `password` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `price` varchar(255) NOT NULL, `link` varchar(255) NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_329b8ae12068b23da547d3b4798` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_329b8ae12068b23da547d3b4798`");
        await queryRunner.query("DROP TABLE `product`");
        await queryRunner.query("DROP TABLE `user`");
    }
}
exports.Database1604022653932 = Database1604022653932;
//# sourceMappingURL=1604022653932-Database.js.map