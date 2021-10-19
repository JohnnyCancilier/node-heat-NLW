import { Router } from "express";
import { authUserController } from "./controllers/authUserController";
import { createMessageController } from "./controllers/createMessageController";
import { ensureAuth } from "./middleware/ensureAuth";

const router = Router();

router.post("/authenticate", new authUserController().handle);

router.post("/messages", ensureAuth, new createMessageController().handle);

export { router }