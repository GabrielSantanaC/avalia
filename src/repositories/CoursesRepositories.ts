import { EntityRepository, Repository } from "typeorm";
import { Course } from "../entities/Course";

@EntityRepository(Course)
class CoursesRepositories extends Repository<Course> { }

export { CoursesRepositories }