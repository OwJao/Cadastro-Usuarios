import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export class MongoDbUpdateUserRepository {
    async execute(userId, userParams) {
        return await prisma.user.update({
            where: { id: userId },
            data: {
                primeiro_nome: userParams.primeiro_nome,
                ultimo_nome: userParams.ultimo_nome,
                email: userParams.email,
                idade: userParams.idade,
            },
        });
    };
}
