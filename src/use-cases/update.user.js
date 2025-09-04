import { MongoDbUpdateUserRepository } from "../repositories/update.user.js";

export class UpdateUserUseCase {
    async execute(userId, userParams) {
        const updateUserRepository = new MongoDbUpdateUserRepository();
        return await updateUserRepository.execute(userId, userParams);
    }
}
