import { getCustomRepository } from "typeorm"
import { CoursesRepositories } from "../repositories/CoursesRepositories"


class ListCoursesService {
    async execute() {
        const coursesRepositories = getCustomRepository(CoursesRepositories);

        const courses = await coursesRepositories.find();

        return courses;
    }
}

export { ListCoursesService }