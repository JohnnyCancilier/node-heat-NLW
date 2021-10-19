import { Router } from "express";
import { authUserController } from "./controllers/authUserController";
import { createMessageController } from "./controllers/createMessageController";
import { getLast3MessageController } from "./controllers/getLast3MessagesController";
import { profileUserController } from "./controllers/profileUserController";
import { ensureAuth } from "./middleware/ensureAuth";

const router = Router();

router.post("/authenticate", new authUserController().handle);

router.post("/messages", ensureAuth, new createMessageController().handle);

router.get("/messages/last3", new getLast3MessageController().handle);

router.get("/profile", ensureAuth, new profileUserController().handle);

export { router }