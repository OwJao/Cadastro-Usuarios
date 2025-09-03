import { express } from "express";
const app = express();

app.use(express.json());

app.get("/usuarios", async (req, res) => {
    res.status(200).json({ message: "Usuarios" });
});
