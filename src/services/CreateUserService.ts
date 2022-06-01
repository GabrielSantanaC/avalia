import { getCustomRepository} from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    password: string;
    phone_number?: string;
    admin?: boolean;
}

class CreateUserService {
    async execute({ name, email, password, phone_number, admin = false }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error("Email incorrect");

        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User Already Exists");
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: passwordHash,
            phone_number,
            admin
        });

        await usersRepository.save(user);

        return user;

    }
}

export { CreateUserService }