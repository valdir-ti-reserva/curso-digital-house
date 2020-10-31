"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = express_1.Router();
routes.get("/", () => "A definir");
routes.post("/product", () => "A definir");
routes.delete("product/:id", () => "A definir");
routes.get("/user/:id", () => "A definir");
exports.default = routes;
//# sourceMappingURL=product.js.map