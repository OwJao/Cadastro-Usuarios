import { PrismaClient } from "./generated/prisma/index.js";
import express from "express";
const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post("/usuarios", async (req, res) => {
    await prisma.user.create({
        data: {
            primeiro_nome: req.body.primeiro_nome,
            ultimo_nome: req.body.ultimo_nome,
            email: req.body.email,
            idade: req.body.idade,
        },
    });
    res.status(201).json({ user: req.body });
});

app.put("/usuarios/:id", async (req, res) => {
    await prisma.user.update({
        where: { id: req.params.id },
        data: {
            primeiro_nome: req.body.primeiro_nome,
            ultimo_nome: req.body.ultimo_nome,
            email: req.body.email,
            idade: req.body.idade,
        },
    });
    res.status(200).json({ user: req.body });
});

app.delete("/usuarios/:id", async (req, res) => {
    await prisma.user.delete({
        where: { id: req.params.id },
    });
    res.status(204).send("Usuário deletado com sucesso!");
});

app.get("/usuarios", async (req, res) => {
    const usuarios = await prisma.user.findMany();
    res.json(usuarios);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
