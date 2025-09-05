# 🚀 Cadastro de Usuários - Full-Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)
![Husky](https://img.shields.io/badge/Husky-white?style=for-the-badge&logo=husky&logoColor=black)

<br>

## 📖 Sobre o Projeto

Este é um projeto full-stack de um sistema de Cadastro de Usuários. A aplicação permite <strong>cadastrar</strong>, <strong>visualizar</strong> e <strong>deletar</strong> usuários de forma simples e intuitiva.

O objetivo foi construir uma aplicação moderna e robusta, com um frontend reativo desenvolvido em **React** e um backend sólido em **Node.js**, utilizando **Prisma** como ORM (Mapeamento Objeto-Relacional) para a comunicação com o banco de dados. O projeto demonstra a aplicação de boas práticas de desenvolvimento, como a separação de responsabilidades no backend em uma arquitetura limpa.

<br>

## ✨ Funcionalidades

-   **➕ Cadastrar novos usuários:** Adicionar usuários através de um formulário simples.
-   **📄 Listar usuários:** Visualizar todos os usuários cadastrados em tempo real.
-   **❌ Excluir usuários:** Remover um usuário do banco de dados.

<br>

## 🛠️ Tecnologias Utilizadas

O projeto foi dividido em duas partes principais:

### **Frontend:**

-   **[React](https://react.dev/)**: Biblioteca para a construção da interface de usuário.
-   **[Vite](https://vitejs.dev/)**: Ferramenta de build para um ambiente de desenvolvimento rápido e otimizado.
-   **CSS Puro**: Para estilização e design da aplicação.

### **Backend:**

-   **[Node.js](https://nodejs.org/)**: Ambiente de execução para o JavaScript no servidor.
-   **[Prisma](https://www.prisma.io/)**: ORM (Mapeamento Objeto-Relacional) para facilitar a interação com o banco de dados.
-   **[Express.js](https://expressjs.com/)** (ou similar): Framework para a criação da API.

### **Ferramentas (Qualidade):**

-   **ESLint**: Para garantir a consistência e a qualidade do código.
-   **Prettier**: Ferramenta para formatação automática do código.
-   **Husky & Lint-Staged**: Para executar checagens de lint e formatação antes de cada commit.

<br>

## 📂 Estrutura do Projeto

O backend foi estruturado em camadas, seguindo princípios de arquitetura limpa para garantir a separação de responsabilidades, testabilidade e manutenibilidade do código.

-   **`controllers`**: Responsáveis por receber as requisições HTTP e retornar as respostas.
-   **`use-cases`**: Contêm as regras de negócio da aplicação, orquestrando as ações.
-   **`repositories`**: Camada de abstração para o acesso aos dados, lidando diretamente com o Prisma.

<br>

## 🚀 Como Executar

Siga os passos abaixo para rodar o projeto em seu ambiente local.

**Pré-requisitos:**
-   [Node.js](https://nodejs.org/en) (versão 18 ou superior)
-   [Git](https://git-scm.com/)

**1. Clone o repositório:**
```bash
git clone https://github.com/OwJao/Cadastro-Usuarios.git
```
**2. Configure do Backend:**
```bash
# Instale as dependências
npm install

# Crie um arquivo .env na raiz do backend com a sua connection string do banco de dados
# Substitua os valores abaixo pelos seus dados reais do MongoDB Atlas
# Mantenha este arquivo seguro e NUNCA o envie para o GitHub!
DATABASE_URL="mongodb+srv://SEU_USUARIO:SUA_SENHA@SEU_CLUSTER_HOST/NOME_DO_BANCO?retryWrites=true&w=majority&appName=NOME_DO_SEU_APP"

# Execute as migrações do Prisma para criar as tabelas no banco
npx prisma migrate dev

# Executar comando para gerar o cliente Prisma em seu projeto
npx prisma generate

# Inicie o servidor backend
npm run start:dev
```
**3. Configure do Frontend:**
```bash
# Em um novo terminal, navegue para a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação React
npm run dev
```
