import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

class CreateComplimentController {
    async handle(request: Request, response: Response) {
        const { user_id, course_id, description, rating } = request.body;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({ user_id, course_id, description, rating });

        return response.json(compliment);
    }
}

export { CreateComplimentController }