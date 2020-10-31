"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const routes_1 = __importDefault(require("./routes"));
const user_1 = __importDefault(require("./routes/user"));
const product_1 = __importDefault(require("./routes/product"));
const auth_1 = __importDefault(require("./routes/auth"));
const connection_1 = __importDefault(require("./config/connection"));
typeorm_1.createConnection(connection_1.default).then((connection) => {
    const app = express_1.default();
    app.use(express_1.default.json());
    app.use(routes_1.default);
    app.use(auth_1.default);
    app.use("/user", user_1.default);
    app.use("/product", product_1.default);
    app.listen(3000, () => console.log("Servidor rodando"));
});
//# sourceMappingURL=index.js.map