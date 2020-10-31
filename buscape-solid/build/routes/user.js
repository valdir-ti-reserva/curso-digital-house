"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateUser_1 = require("../useCases/CreateUser");
const routes = express_1.Router();
routes.post("/", CreateUser_1.createUserController.handle);
exports.default = routes;
//# sourceMappingURL=user.js.map