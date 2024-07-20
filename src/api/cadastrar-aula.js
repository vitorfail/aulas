async function inserirDados(aula_, horarios_, dias_) {
    // Dados a serem inseridos
    const dados = {
      aula: aula_,
      horarios: horarios_,
      dias: dias_
    };
  
    // Inserir dados em uma coleção chamada "usuarios"
    try {
      const docRef = await db.collection('alunos').add(dados);
      console.log('Documento inserido com ID: ', docRef.id);
    } catch (error) {
      console.error('Erro ao inserir documento: ', error);
    }
  }
  