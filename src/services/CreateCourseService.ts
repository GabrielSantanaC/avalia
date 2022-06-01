import { getCustomRepository } from "typeorm";
import { CoursesRepositories } from "../repositories/CoursesRepositories";


interface ICourseRequest {
    name: string;
    user_id: string;
}

class CreateCourseService {

    async execute({ name, user_id }: ICourseRequest) {

        const coursesRepositories = getCustomRepository(CoursesRepositories);

        if (!name || !user_id) {
            throw new Error("Incorrect name or user_id!");
        }

        const coursAlreadyExist = await coursesRepositories.findOne({ name });

        if (coursAlreadyExist) {
            throw new Error("Course already exists!");
        }

        const course = coursesRepositories.create({ name, user_id });

        await coursesRepositories.save(course);

        return course;
    }

}

export { CreateCourseService }
