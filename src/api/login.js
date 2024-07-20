import React, { useEffect, useState } from 'react';
import initSqlJs from 'sql.js';
export default Autentic = async (user, senha)=>{
    // Configuração do caminho do arquivo wasm
    const SQL = await initSqlJs({
        locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.1/${file}`
      });

      // Carregar banco de dados da pasta public
      const response = await fetch('/alunos.sql');
      const arrayBuffer = await response.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const db = new SQL.Database(uint8Array);

      // Executar uma query para selecionar os dados
      const res = db.exec("SELECT * FROM alunos WHERE user= "+user+" AND senha= "+senha);
      return res;
    };