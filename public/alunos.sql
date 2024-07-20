CREATE TABLE IF NOT EXISTS alunos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user VARCHAR(255),
        senha VARCHAR(255),
        turma VARCHAR(255),
        imagem VARCHAR(255)
    );