import { MongoDbDeleteUserRepository } from "../repositories/delete-user.js";

export class DeleteUserUseCase {
    async execute(userId) {
        const deleteUserRepository = new MongoDbDeleteUserRepository();
        return await deleteUserRepository.execute(userId);
    }
}