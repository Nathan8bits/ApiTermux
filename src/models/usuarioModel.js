import { conectar, salvarBanco } from "../database/database.js";

const criarUsuario = async (nome, idade) => {
  const db = await conectar();

  db.run(
    `
      INSERT INTO usuarios (nome, idade)
      VALUES (?, ?);
    `,
    [nome, idade],
  );
  await salvarBanco();
};

const listarUsuarios = async () => {
  const db = await conectar();

  const resultado = db.exec(`
    SELECT *
    FROM usuarios;
  `);
//o SQL retorna os resultados em um formato proprio
// [
//   {
//     columns: ["id", "nome", "idade"],
//     values: [
//       [1, "Natan", 20],
//       [2, "Maria", 25]
//     ]
//   }
// ]
//por isso a funcao abaixo converte para formato do json
// [ { id: 1, nome: "Natan", idade: 20 }, { id: 2, nome: "Maria", idade: 25 }]

  if (resultado.length === 0) {
    return [];
  }

  const { columns, values } = resultado[0];

  const usuarios = values.map((linha) => {
    const usuario = {};

    columns.forEach((coluna, indice) => {
      usuario[coluna] = linha[indice];
    });

    return usuario;
  });

  return resultado;
};

export default {
  criarUsuario,
  listarUsuarios,
};
