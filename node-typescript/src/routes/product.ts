import { Router } from "express";

import ProductController from "../controllers/ProductController";

const routes = Router();

routes.get("/", ProductController.index);
routes.post("/", ProductController.store);
routes.delete("/:id", ProductController.delete);
routes.get("/user/:id", ProductController.listProductByIdUser);

export default routes;
