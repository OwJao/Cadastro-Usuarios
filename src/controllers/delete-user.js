import { DeleteUserUseCase } from "../use-cases/delete-user.js";

export class DeleteUserController {
    async execute(req) {
        const deleteUserUseCase = new DeleteUserUseCase();
        try {
            await deleteUserUseCase.execute(req.params.id);
            return {
                statusCode: 200,
                body: {
                    message: "User deleted successfully."
                },
            };
        } catch (error) {
            return {
                statusCode: 404,
                body: { message: "User not found." },
            };
        }
    }        
}