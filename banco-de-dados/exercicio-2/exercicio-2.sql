-- 1. Consultar alunos e seus respectivos cursos
SELECT
    alunos.nome AS aluno,
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos
    ON alunos.curso_id = cursos.id;

-- 2. Consultar alunos matriculados em Desenvolvimento Web
SELECT
    alunos.nome AS aluno,
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos
    ON alunos.curso_id = cursos.id
WHERE cursos.nome_curso = 'Desenvolvimento Web';

-- 3. Transferir Maria Souza para Ciência de Dados
UPDATE alunos
SET curso_id = 2
WHERE id = 2;

-- 4. Verificar o curso de Maria após a atualização
SELECT
    alunos.nome AS aluno,
    cursos.nome_curso AS curso
FROM alunos
INNER JOIN cursos
    ON alunos.curso_id = cursos.id
WHERE alunos.id = 2;

-- 5. Consultar cursos sem alunos matriculados
SELECT
    cursos.id,
    cursos.nome_curso AS curso
FROM cursos
LEFT JOIN alunos
    ON cursos.id = alunos.curso_id
WHERE alunos.id IS NULL;
