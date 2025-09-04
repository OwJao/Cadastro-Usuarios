import "./style.css";

function Home() {
    return (
        <div className="container">
            <form>
                <h1>Cadastro de Usuários</h1>
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder="Sobrenome" />
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Idade" />
                <button type="button">Cadastrar</button>
            </form>

            <div className="users">
                <div>
                    <p>Nome: </p>
                    <p>Sobrenome: </p>
                    <p>Email: </p>
                    <p>Idade: </p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
