import { Request, Response } from "express";
import { ListUserComplimentsService } from "../services/ListUserComplimentsService";


class ListUserComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const listUserComplimentsService = new ListUserComplimentsService()

        const compliments = await listUserComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}

export { ListUserComplimentsController }

