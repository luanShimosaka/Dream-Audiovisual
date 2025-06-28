# Dream Audiovisual

- `backend/`: NestJS + TypeScript

## Como executar o projeto

### Backend

```bash
cd backend
npm install
npm run start:dev
```

## Endpoints

Rotas para obtenção de dados a partir da API.

- `GET /user`: Retorna um vetor com todos os usuários do banco de dados.

```json
    [
        {
            "id": 1,
            "nome": "Bernado Henrique Felix",
            "email": "barnado.felix@email.com",
            "senha": "senhadificil"
        },
        {
            "id": 2,
            "nome": "Henrique Assis Moreira",
            "email": "henrique.moreira@email.com",
            "senha": "senhamedia"
        },
        {
            "id": 3,
            "nome": "Luan Shimosaka",
            "email": "luan.shimosaka@email.com",
            "senha": "senhafacil"
        }
    ]
```

- `GET /user/{id}`: Retorna um usuário do banco de dados.

```json
    {
        "id": 2,
        "nome": "Henrique Assis Moreira",
        "email": "henrique.moreira@email.com",
        "senha": "senhamedia"
    }
```

- `POST /user`: Adiciona um novo usuário ao banco de dados.

```json
    {
        "id": 3,
        "nome": "Luan Shimosaka",
        "email": "luan.shimosaka@email.com",
        "senha": "senhafacil"
    }
```

- `PATCH /user/{id}`: Edita um usuário do banco de dados.

```json
    {
        "id": 1,
        "nome": "Bernado Henrique Felix",
        "email": "barnado.felix@email.com",
        "senha": "senhadificil"
    }
```

- `DELETE /user/{id}`: Deleta um usuário do banco de dados.

```json
    {
        "message": "Usuário com ID #4 deletado com sucesso"
    }
```

## Arquivo .env

Existe um arquivo chamado .env.example disponível para template do arquivo `.env` com os seguintes campos:

- `DB_USERNAME`= Seu usuário do banco de dados
- `DB_PASSWORD`= Sua senha do banco de dados
- `DB_NAME`= O nome do seu banco de dados
- `DB_HOST`= O host utilizado pelo banco de dados (opicional). O host padrão é o `localhost`.
- `DB_PORT`= A porta utilizada no seu banco de dados (opicional). A porta padrão é a `3306`.