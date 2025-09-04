import { MongoDbGetUsersRepository } from "../repositories/get-users.js";

export class GetUsersUseCase {
    async execute() {
        const repository = new MongoDbGetUsersRepository();
        return await repository.execute();
    }
};