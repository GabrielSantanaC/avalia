import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { CoursesRepositories } from "../repositories/CoursesRepositories";


interface IComplimentRequest {
    user_id: string;
    course_id: string;
    description: string;
    rating: number;
}

class CreateComplimentService {
    async execute({ user_id, course_id, description, rating }: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const coursesRepositories = getCustomRepository(CoursesRepositories);

        console.log("curso", course_id);

        const course = await coursesRepositories.findOne(course_id);

        if(!course) {
            throw new Error("Course does not exists!");
        }

        console.log("curso", course);
        

        const compliment = complimentsRepositories.create({
            user_id,
            course_id,
            description,
            rating
        })

        await complimentsRepositories.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService }

