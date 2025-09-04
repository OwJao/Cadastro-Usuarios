import { GetUsersUseCase } from "../use-cases/get-users.js";

export class GetUsersController {
    async execute() {
        const getUsersUseCase = new GetUsersUseCase();
        const users = await getUsersUseCase.execute();
        return {
            statusCode: 200,
            body: users
        };
    }
};