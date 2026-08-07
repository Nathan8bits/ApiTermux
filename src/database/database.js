import initSqlJs from "sql.js";
import { access, readFile, writeFile } from "fs/promises";

const CAMINHO_BANCO = "./banco.sqlite";

let db = null;

const inicializarBanco = (db) => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      idade INTEGER NOT NULL
    );
  `);
};

const conectar = async () => {
  if (db) {
    return db;
  }

  const SQL = await initSqlJs();

  try {
    await access(CAMINHO_BANCO); // tenta acesar o arquivo

    const arquivo = await readFile(CAMINHO_BANCO); //carrega do banco para a variavel

    db = new SQL.Database(arquivo);
  } catch {
    db = new SQL.Database();
  }

  inicializarBanco(db);

  return db;
};

const salvarBanco = async () => {
  if (!db) {
    return;
  }

  const dados = db.export();

  await writeFile(CAMINHO_BANCO, dados);
};

export { conectar, salvarBanco };
