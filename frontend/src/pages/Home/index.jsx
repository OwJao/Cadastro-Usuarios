import "./style.css";
import Trash from "../../assets/red-trash.svg";

function Home() {
    const users = [
        {
            id: 1,
            nome: "João",
            sobrenome: "Silva",
            email: "joao@gmail.com",
            idade: 30,
        },
        {
            id: 2,
            nome: "Maria",
            sobrenome: "Oliveira",
            email: "teste@g.com",
            idade: 25,
        },
    ];

    return (
        <div className="container">
            <form>
                <h1>Cadastro de Usuários</h1>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Sobrenome" />
                <input type="email" placeholder="Email" />
                <input type="number" max={100} min={1} placeholder="Idade" />
                <button type="button">Cadastrar</button>
            </form>

            {users.map((user) => (
                <div className="user" key={user.id}>
                    <div>
                        <p>Nome: {user.nome}</p>
                        <p>Sobrenome: {user.sobrenome}</p>
                        <p>Email: {user.email}</p>
                        <p>Idade: {user.idade}</p>
                    </div>
                    <div>
                        <img src={Trash} alt="Excluir" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
