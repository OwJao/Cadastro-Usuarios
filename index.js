import { CreateUserController } from "./src/controllers/create-user.js";
import { GetUsersController } from "./src/controllers/get-users.js";
import { UpdateUserController } from "./src/controllers/update.user.js";
import { DeleteUserController } from "./src/controllers/delete-user.js";

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

app.put("/usuarios/:id", async (req, res) => {
    const updateUserController = new UpdateUserController();
    const updatedUser = await updateUserController.execute(req);
    res.status(updatedUser.statusCode).json(updatedUser.body);
})

app.delete("/usuarios/:id", async (req, res) => {
    const deleteUserController = new DeleteUserController();
    const result = await deleteUserController.execute(req);
    res.status(result.statusCode).json(result.body);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
