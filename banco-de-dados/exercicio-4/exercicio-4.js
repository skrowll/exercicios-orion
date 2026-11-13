// 1. Adicionar comentários ao primeiro post
db.posts.updateOne(
  { titulo: "Introdução ao MongoDB" },
  {
    $set: {
      comentarios: [
        {
          autor: "Maria",
          texto: "Muito bom esse conteúdo!"
        },
        {
          autor: "João",
          texto: "Ótima introdução ao MongoDB."
        }
      ]
    }
  }
);

// 2. Consultar o post para validar os comentários adicionados
db.posts.find({
  titulo: "Introdução ao MongoDB"
});

// 3. Consultar posts que possuem a tag "nosql"
db.posts.find({
  tags: "nosql"
});

// 4. Consultar posts de um autor específico
db.posts.find({
  autor: "Lucas Rocha"
});
