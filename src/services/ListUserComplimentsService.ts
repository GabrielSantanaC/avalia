import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { CoursesRepositories } from "../repositories/CoursesRepositories";

class ListUserComplimentsService {
    async execute(user_id: string) {
        const coursesRepositories = getCustomRepository(CoursesRepositories);
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const course = await coursesRepositories.findOne({user_id});

        if (!course) {
            throw new Error("You don't have course!");
        }

        const compliments = await complimentsRepositories.find({
            where: {
                course_id: course.id
            }
        })

        return compliments;
    }
}

export { ListUserComplimentsService }