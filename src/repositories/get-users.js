import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export class MongoDbGetUsersRepository {
    async execute() {
        return await prisma.user.findMany();
    }
};