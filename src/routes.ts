import { Router } from "express";
import { authUserController } from "./controllers/authUserController";

const router = Router();

router.post("/authenticate", new authUserController().handle);

export { router }