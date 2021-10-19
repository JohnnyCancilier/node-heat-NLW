import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string
}

export function ensureAuth(request: Request, response: Response, next: NextFunction) {
    const authtoken = request.headers.authorization;

    if (!authtoken) {
        return response.status(401).json({ errorCode: "token.invalid", });
    }

    const [, token] = authtoken.split(" ");

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload

        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).json({ errorCode: "token.expired" });
    }
}