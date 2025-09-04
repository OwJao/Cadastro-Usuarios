import { UpdateUserUseCase } from "../use-cases/update.user.js";

export class UpdateUserController {
    async execute(req) {
        const userParams = req.body;
        const updateUserUseCase = new UpdateUserUseCase();
        const updatedUser = await updateUserUseCase.execute(req.params.id, userParams);
        return {
            statusCode: 200,
            body: updatedUser,
        };
    }
}