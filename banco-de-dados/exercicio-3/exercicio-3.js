// 1. Criar a coleção de posts
db.createCollection("posts");

// 2. Inserir o primeiro documento
db.posts.insertOne({
  titulo: "Introdução ao MongoDB",
  autor: "Lucas Rocha",
  conteudo: "Aprendendo os conceitos básicos de bancos de dados NoSQL."
});

// 3. Inserir um documento com estrutura diferente
db.posts.insertOne({
  titulo: "Schema Flexível no MongoDB",
  autor: "Lucas Rocha",
  conteudo: "O MongoDB permite documentos com estruturas diferentes na mesma coleção.",
  tags: ["nosql", "flexivel"]
});

// 4. Consultar todos os documentos da coleção
db.posts.find();