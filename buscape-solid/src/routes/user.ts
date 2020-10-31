import { Router } from "express";

import { createUserController } from "../useCases/CreateUser";
import { editUserController } from "../useCases/EditUser";

const routes = Router();

routes.post("/", createUserController.handle);
routes.put("/:id", editUserController.handle);

export default routes;
