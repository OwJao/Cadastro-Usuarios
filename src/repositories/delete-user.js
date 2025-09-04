import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export class MongoDbDeleteUserRepository {
    async execute(userId) {
        return await prisma.user.delete({
            where: { id: userId },
        });
    }
};