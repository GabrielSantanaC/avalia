import { Request, Response } from "express";
import { ListCoursesService } from "../services/ListCoursesService";


class ListCoursesController {
    async handle(request: Request, response: Response) {
        const listCoursesService = new ListCoursesService();

        const courses = await listCoursesService.execute();

        return response.json(courses);
    }
}

export { ListCoursesController }