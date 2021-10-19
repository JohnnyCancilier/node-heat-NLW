import { Request, Response } from "express";
import { getLast3MessagesService } from "../services/getLast3MessagesService";


class getLast3MessageController {
    async handle(request: Request, response: Response) {
        const service = new getLast3MessagesService();

        const result = await service.execute();

        response.json(result);
    }
}

export { getLast3MessageController }
