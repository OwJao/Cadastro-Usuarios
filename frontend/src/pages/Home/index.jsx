import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/red-trash.svg";
import Edit from "../../assets/edit.svg";
import api from "../../services/api.js";

function Home() {
    const [users, setUsers] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

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
            idade: parseInt(inputIdade.current.value),
        });
        getUsers();
    };

    const deleteUser = async (id) => {
        await api.delete(`/usuarios/${id}`);
        getUsers();
    };

    const editUser = async (id) => {
        await api.put(`/usuarios/${selectedUser.id}`, {
            primeiro_nome: inputPrimeiroNome.current.value,
            ultimo_nome: inputSobrenome.current.value,
            email: inputEmail.current.value,
            idade: parseInt(inputIdade.current.value),
        });
        setIsEditing(false);
        setSelectedUser(null);
        getUsers();
    };

    useEffect(() => {
        getUsers();
    }, []);

    const editPopUp = (user) => {
        setIsEditing(true);
        setSelectedUser(user);
    };

    return (
        <div className="container">
            <form>
                <h1>Cadastro de Usuários</h1>
                <input type="text" placeholder="Nome" ref={inputPrimeiroNome} />
                <input
                    type="text"
                    placeholder="Sobrenome"
                    ref={inputSobrenome}
                />
                <input type="email" placeholder="Email" ref={inputEmail} />
                <input
                    type="number"
                    max={100}
                    min={1}
                    placeholder="Idade"
                    ref={inputIdade}
                />
                <button type="button" onClick={createUsers}>
                    Cadastrar
                </button>
            </form>

            {users.map((user) => (
                <div className="user" key={user.id}>
                    <div>
                        <p>Nome: {user.primeiro_nome}</p>
                        <p>Sobrenome: {user.ultimo_nome}</p>
                        <p>Email: {user.email}</p>
                        <p>Idade: {user.idade}</p>
                    </div>
                    <div className="buttons">
                        <button onClick={() => editPopUp(user)}>
                            <img src={Edit} alt="Editar" />
                        </button>
                        <button onClick={() => deleteUser(user.id)}>
                            <img src={Trash} alt="Excluir" />
                        </button>
                    </div>
                </div>
            ))}

            {isEditing && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Editar Usuário</h2>
                        <input
                            type="text"
                            defaultValue={selectedUser?.primeiro_nome}
                            ref={inputPrimeiroNome}
                        />
                        <input
                            type="text"
                            defaultValue={selectedUser?.ultimo_nome}
                            ref={inputSobrenome}
                        />
                        <input
                            type="email"
                            defaultValue={selectedUser?.email}
                            ref={inputEmail}
                        />
                        <input
                            type="number"
                            defaultValue={selectedUser?.idade}
                            ref={inputIdade}
                        />
                        <div className="popup-buttons">
                            <button onClick={editUser} className="salvar">Salvar</button>
                            <button onClick={() => setIsEditing(false)} className="cancelar">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
