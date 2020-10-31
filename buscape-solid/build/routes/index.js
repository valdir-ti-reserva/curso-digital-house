"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const IndexController_1 = __importDefault(require("../controllers/IndexController"));
const routes = express_1.Router();
routes.get("/", IndexController_1.default.index);
exports.default = routes;
//# sourceMappingURL=index.js.map