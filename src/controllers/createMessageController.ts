import { Request, Response } from "express";
import { createMessageServices } from "../services/createMessageService";

class createMessageController {
    async handle(request: Request, response: Response) {
        const { message } = request.body;
        const { user_id } = request;

        const service = new createMessageServices();

        const result = await service.execute(message, user_id);

        return response.json(result);
    }
}

export { createMessageController }
