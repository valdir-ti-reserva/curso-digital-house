import { Router } from "express";

import { createUserController } from "../useCases/CreateUser";

const routes = Router();

routes.post("/", createUserController.handle);

export default routes;
