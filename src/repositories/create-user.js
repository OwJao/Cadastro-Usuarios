import { PrismaClient } from "./generated/prisma/index.js";
const prisma = new PrismaClient();

export class MongoDbCreateUserRepository {
    async execute(createUserParams) {
        await prisma.user.create({
            data: {
                primeiro_nome: createUserParams.primeiro_nome,
                ultimo_nome: createUserParams.ultimo_nome,
                email: createUserParams.email,
                idade: createUserParams.idade,
            },
        });
        
        return { user: createUserParams };
    }
}