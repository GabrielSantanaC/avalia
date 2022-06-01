import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {

        const userRespositories = getCustomRepository(UsersRepositories)

        const user = await userRespositories.findOne({ email })

        if (!user) {
            throw new Error("Email/Password incorrect!")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect!")
        }

        const token = sign(
            { email: user.email },
            "674bf7dbdd20d59be15aa5838df231fd",
            {
                subject: user.id,
                expiresIn: "1d"
            });

        return token;
    }
}

export { AuthenticateUserService }

