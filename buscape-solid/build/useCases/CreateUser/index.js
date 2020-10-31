"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const MySqlProvider_1 = require("../../repositories/implementations/MySqlProvider");
const CreateUserCase_1 = require("./CreateUserCase");
const CreateUserController_1 = require("./CreateUserController");
const mysqlProvider = new MySqlProvider_1.MysqlProvider();
const createUserCase = new CreateUserCase_1.CreateUserCase(mysqlProvider);
const createUserController = new CreateUserController_1.CreateUserController(createUserCase);
exports.createUserController = createUserController;
//# sourceMappingURL=index.js.map