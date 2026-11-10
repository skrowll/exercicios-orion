
# Exercício 3 — Docker: Ambientes Dev e Prod

Implementação de uma API Node.js com PostgreSQL utilizando Docker Compose e Dockerfile multi-stage.

## Desenvolvimento

Para iniciar o ambiente de desenvolvimento:

```bash
docker compose -f docker-compose.dev.yml up --build -d
```

Acesse: http://localhost:3001

O ambiente utiliza Nodemon para reiniciar automaticamente a aplicação quando o código-fonte é alterado.

## Produção

Para iniciar o ambiente de produção:

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

Acesse: http://localhost:3002

O ambiente utiliza uma imagem otimizada, sem dependências de desenvolvimento e sem montagem do código-fonte como volume.

## Configuração

Antes de executar, copie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente do PostgreSQL.

## Encerramento

Para encerrar o ambiente de desenvolvimento:

```bash
docker compose -f docker-compose.dev.yml down
```

Para encerrar o ambiente de produção:

```bash
docker compose -f docker-compose.prod.yml down
```
