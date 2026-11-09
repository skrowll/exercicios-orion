
# Desafio Extra — Docker Compose

Aplicação desenvolvida para o desafio extra de Docker do Orion Bootcamp 2026.

O projeto utiliza Docker Compose para orquestrar uma API Node.js, um banco PostgreSQL e uma interface de administração com pgAdmin.

## Tecnologias

- Node.js
- PostgreSQL
- pgAdmin
- Docker
- Docker Compose

## Estrutura

- `api/`: aplicação Node.js e Dockerfile multi-stage.
- `docker-compose.yml`: configuração dos serviços.
- `.env.example`: modelo das variáveis de ambiente.

## Configuração

Copie o arquivo `.env.example` para `.env` e configure as credenciais do PostgreSQL e do pgAdmin.

No PowerShell:

```powershell
Copy-Item .env.example .env
```

## Execução

Inicie a aplicação:

```bash
docker compose up -d --build
```

Verifique os serviços:

```bash
docker compose ps
```

## Endpoints

### GET /

Retorna a última mensagem cadastrada no PostgreSQL.

http://localhost:3003

### GET /health

Verifica o estado da aplicação e a conexão com o banco.

http://localhost:3003/health

### POST /messages

Cadastra uma mensagem no PostgreSQL.

Exemplo de corpo da requisição:

```json
{
  "message": "Hello from Docker!"
}
```

## pgAdmin

Acesse:

http://localhost:8080

Entre utilizando as credenciais definidas no `.env`.

Para cadastrar o servidor PostgreSQL, utilize:

- Host: `db`
- Port: `5432`
- Database: valor de `DB_NAME`
- Username: valor de `DB_USER`
- Password: valor de `DB_PASS`

## Persistência

Os dados do PostgreSQL são armazenados em um volume Docker nomeado.

O pgAdmin também possui um volume próprio para preservar suas configurações.

Os volumes são mantidos após executar:

```bash
docker compose down
```

## Encerramento

Para encerrar a aplicação:

```bash
docker compose down
```
