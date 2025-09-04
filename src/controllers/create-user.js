import { CreateUserUseCase } from "../use-cases/create-user.js";
import validator from "validator";

export class CreateUserController {
    async execute(httpRequest) {
        try {
            const params = httpRequest.body;

            // validar a requisição (campos obrigatórios, email e idade)

            const requiredFields = ["primeiro_nome", "ultimo_nome", "email"];

            for (const field of requiredFields) {
                if (!params[field] || params[field].trim().length == 0) {
                    return {
                        statusCode: 400,
                        body: { message: `Missing param: ${field}` },
                    };
                }
            }

            if (!validator.isEmail(params.email)) {
                return {
                    statusCode: 400,
                    body: { message: "Invalid email" },
                };
            }

            const idadeAsInt = parseInt(params.idade, 10);

            if (isNaN(idadeAsInt)) {
                return {
                    statusCode: 400,
                    body: { message: "Age must be a valid number" },
                };
            }

            const createUserUseCase = new CreateUserUseCase();
            const user = await createUserUseCase.execute({
                ...params,
                idade: idadeAsInt,
            });

            return {
                statusCode: 201,
                body: user,
            };
        } catch (error) {
            console.log(error);
            
            return {
                statusCode: 500,
                body: { message: "Internal server error" },
            };
        }
    }
}
