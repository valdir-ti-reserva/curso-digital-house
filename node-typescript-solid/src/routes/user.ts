import { Router } from "express";

import { createUserController } from "../useCases/CreateUser";

const routes = Router();

routes.post("/", createUserController.handle);
// routes.put("/:id", createUserController.handleEdit);

export default routes;
