import { CreateUserController } from "./src/controllers/create-user.js";
import { GetUsersController } from "./src/controllers/get-users.js";

import express from "express";
const app = express();
app.use(express.json());

app.post("/usuarios", async (req, res) => {
    const createUserController = new CreateUserController();
    const user = await createUserController.execute(req);
    res.status(user.statusCode).json(user.body);
});

app.get("/usuarios", async (req, res) => {
    const getUsersController = new GetUsersController();
    const users = await getUsersController.execute();
    res.status(users.statusCode).json(users.body);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
