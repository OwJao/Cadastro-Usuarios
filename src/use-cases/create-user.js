import { MongoDbCreateUserRepository } from "../repositories/create-user.js";

export class CreateUserUseCase {
    async execute(createUserParams) {
        const mongoDbCreateUserRepository = new MongoDbCreateUserRepository();
        const user = await mongoDbCreateUserRepository.execute(createUserParams);

        return user;
    }
}