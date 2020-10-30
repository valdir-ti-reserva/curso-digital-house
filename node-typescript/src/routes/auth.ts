import { Router } from "express";

import AuthController from "../controllers/AuthController";

const routes = Router();

routes.post("/login", AuthController.login);
routes.post("/logout", AuthController.logout);
routes.post("/reset-password", AuthController.reset);

export default routes;
