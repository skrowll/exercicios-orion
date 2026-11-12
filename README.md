# Orion Bootcamp 2026 — Exercícios

Repositório dedicado às atividades práticas do **Orion Bootcamp 2026**, promovido pela **Newrizon**.

O objetivo é documentar os exercícios desenvolvidos ao longo do bootcamp, aplicando conceitos de desenvolvimento de software, boas práticas de programação, versionamento de código, bancos de dados e ferramentas utilizadas no mercado.

## 📂 Organização do repositório

Os exercícios são organizados em diretórios por área de conhecimento, com cada atividade mantendo seus próprios arquivos, configurações e evidências de execução.

```text
exercicios-orion/
├── docker/
│   ├── exercicio-1/
│   ├── exercicio-2/
│   ├── exercicio-3/
│   └── exercicio-extra/
│
├── banco-de-dados/
│   ├── exercicio-1/
│   ├── exercicio-2/
│   ├── exercicio-3/
│   └── exercicio-4/
│
└── README.md
```

## 📚 Conteúdo desenvolvido

### 🐳 Docker

Exercícios voltados à conteinerização de aplicações e à configuração de ambientes de desenvolvimento e produção.

**Conceitos abordados:**
- Criação e configuração de Dockerfiles.
- Orquestração de serviços com Docker Compose.
- Integração entre aplicações Node.js e PostgreSQL.
- Configuração de ambientes de desenvolvimento e produção.
- Live reload em ambiente de desenvolvimento.
- Builds otimizados utilizando Docker multi-stage.

### 🗄️ Banco de Dados

Exercícios práticos com bancos de dados relacionais e não relacionais, utilizando PostgreSQL e MongoDB.

| Exercício | Conteúdo |
|---|---|
| 1 — SQL Básico | Criação de tabelas, relacionamentos, chaves primárias e estrangeiras e inserção de registros. |
| 2 — JOINs e Filtros | Consultas utilizando INNER JOIN, LEFT JOIN, WHERE e atualização de registros com UPDATE. |
| 3 — MongoDB CRUD Básico | Criação de coleções, inserção e consulta de documentos e conceito de Schema Flexível. |
| 4 — MongoDB Consultas Avançadas | Atualização de documentos com updateOne, arrays de documentos aninhados e consultas filtradas por tags e autor. |

Os exercícios incluem scripts e evidências das operações executadas.

## 🌿 Estratégia de branches

O projeto utiliza um fluxo de trabalho baseado em **GitFlow**, separando desenvolvimento, validação e entrega.

| Branch | Finalidade |
|---|---|
| `main` | Contém as entregas aprovadas. |
| `stage` | Ambiente de homologação e validação. |
| `develop` | Integração das funcionalidades desenvolvidas. |
| `feature/*` | Desenvolvimento individual de cada exercício. |

**Fluxo de integração:**

`feature/*` → `develop` → `stage` → `main`

As alterações são organizadas em Pull Requests, permitindo revisão e rastreabilidade antes da integração.

## 🛠️ Tecnologias utilizadas

- **Linguagens:** JavaScript e SQL.
- **Runtime:** Node.js.
- **Bancos de dados:** PostgreSQL e MongoDB.
- **Conteinerização:** Docker e Docker Compose.
- **Ferramentas:** pgAdmin, mongosh e Git.
- **Versionamento:** Git e GitHub.

---

*Este repositório será atualizado conforme o desenvolvimento de novas atividades.*
