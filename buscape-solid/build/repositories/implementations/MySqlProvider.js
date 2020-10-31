"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlProvider = void 0;
const User_1 = require("../../entity/User");
const typeorm_1 = require("typeorm");
class MysqlProvider {
    findAll() {
        const db = typeorm_1.getRepository(User_1.User);
        return db.find();
    }
    save(user) {
        const db = typeorm_1.getRepository(User_1.User);
        return db.save(user);
    }
    async edit(id, user) {
        const db = typeorm_1.getRepository(User_1.User);
        let userExits = await db.findOne(id);
        userExits = Object.assign(Object.assign({}, userExits), user);
        return db.save(userExits);
    }
}
exports.MysqlProvider = MysqlProvider;
//# sourceMappingURL=MySqlProvider.js.map