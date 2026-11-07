# Orion Bootcamp 2026 — Exercícios

Repositório dedicado às atividades práticas do **Orion Bootcamp 2026**, promovido pela **Newrizon**.

O objetivo é registrar os exercícios desenvolvidos durante o bootcamp, aplicando conceitos de desenvolvimento de software, boas práticas de programação, versionamento de código e ferramentas utilizadas no mercado.

## 📂 Organização

Os exercícios são organizados em diretórios de acordo com o conteúdo abordado.

```text
exercicios-orion/
└── docker/
    ├── exercicio-1/
    ├── exercicio-2/
    ├── exercicio-3/
    └── exercicio-extra/
```

Cada exercício possui suas próprias configurações e instruções de execução.

## 🌿 Estratégia de branches

O projeto utiliza um fluxo de trabalho baseado em GitFlow:

- **main:** contém as entregas aprovadas.
- **stage:** ambiente de homologação, destinado à validação das alterações antes da entrega.
- **develop:** concentra as funcionalidades desenvolvidas e integradas.
- **feature/\*:** branches destinadas ao desenvolvimento de cada exercício.

As alterações são integradas por meio de Pull Requests, seguindo o fluxo:

`feature/*` → `develop` → `stage` → `main`
