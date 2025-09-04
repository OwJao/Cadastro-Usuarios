import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/red-trash.svg";
import api from "../../services/api.js";

function Home() {
    const [users, setUsers] = useState([]);

    const inputPrimeiroNome = useRef();
    const inputSobrenome = useRef();
    const inputEmail = useRef();
    const inputIdade = useRef();

    const getUsers = async () => {
        const usersFromAPI = await api.get("/usuarios");
        setUsers(usersFromAPI.data);
    };

    const createUsers = async () => {
        await api.post("/usuarios", {
            primeiro_nome: inputPrimeiroNome.current.value,
            ultimo_nome: inputSobrenome.current.value,
            email: inputEmail.current.value,
            idade: parseInt(inputIdade.current.value)
        });
        getUsers();
    };

    const deleteUser = async (id) => {
        await api.delete(`/usuarios/${id}`);
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            <form>
                <h1>Cadastro de Usuários</h1>
                <input type="text" placeholder="Nome" ref={inputPrimeiroNome}/>
                <input type="text" placeholder="Sobrenome" ref={inputSobrenome}/>
                <input type="email" placeholder="Email" ref={inputEmail}/>
                <input type="number" max={100} min={1} placeholder="Idade" ref={inputIdade}/>
                <button type="button" onClick={createUsers}>Cadastrar</button>
            </form>

            {users.map((user) => (
                <div className="user" key={user.id}>
                    <div>
                        <p>Nome: {user.primeiro_nome}</p>
                        <p>Sobrenome: {user.ultimo_nome}</p>
                        <p>Email: {user.email}</p>
                        <p>Idade: {user.idade}</p>
                    </div>
                    <button onClick={() => deleteUser(user.id)}>
                        <img src={Trash} alt="Excluir" />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Home;
