import { Request, Response } from "express";
import { authUserService } from "../services/authUserService";

class authUserController {
    async handle(request: Request, response: Response) {
        const { code } = request.body;
        const service = new authUserService();
        const result = await service.execute(code);

        return response.json(result);
    }
}

export { authUserController }
