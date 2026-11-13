
-- 1. Criação da tabela de cursos
CREATE TABLE cursos (
    id INTEGER PRIMARY KEY,
    nome_curso VARCHAR(100) NOT NULL
);

-- 2. Criação da tabela de alunos
CREATE TABLE alunos (
    id INTEGER PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    curso_id INTEGER,
    FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

-- 3. Inserção dos cursos
INSERT INTO cursos (id, nome_curso) VALUES
(1, 'Desenvolvimento Web'),
(2, 'Ciência de Dados'),
(3, 'Engenharia de Software');

-- 4. Inserção dos alunos
INSERT INTO alunos (id, nome, email, curso_id) VALUES
(1, 'João Silva', 'joao@email.com', 1),
(2, 'Maria Souza', 'maria@email.com', 1),
(3, 'Pedro Santos', 'pedro@email.com', 2),
(4, 'Ana Oliveira', 'ana@email.com', 2);

-- 5. Consulta dos cursos cadastrados
SELECT * FROM cursos;

-- 6. Consulta dos alunos cadastrados
SELECT * FROM alunos;

-- 7. Teste de integridade referencial
-- A inserção abaixo deve falhar porque o curso 999 não existe.
-- INSERT INTO alunos (id, nome, email, curso_id)
-- VALUES (5, 'Carlos Oliveira', 'carlos@email.com', 999);
