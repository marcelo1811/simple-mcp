import { Pool, QueryResult, QueryResultRow } from "pg";

// Configuração do pool de conexões PostgreSQL
// As variáveis de ambiente devem ser configuradas: DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD
let pool: Pool | null = null;

/**
 * Obtém ou cria o pool de conexões PostgreSQL
 */
function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      host: process.env.DB_HOST || "localhost",
      port: parseInt(process.env.DB_PORT || "5432"),
      database: process.env.DB_NAME || "postgres",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "",
    });
  }
  return pool;
}

/**
 * Executa uma query SQL no banco de dados PostgreSQL
 * @param query - A query SQL a ser executada
 * @param params - Parâmetros opcionais para a query (para queries parametrizadas)
 * @returns O resultado da query
 */
export async function executeQuery<T = any>(
  query: string,
  params?: any[]
): Promise<QueryResult<QueryResultRow>> {
  const pool = getPool();
  return await pool.query<QueryResultRow, any[]>(query, params);
}

/**
 * Fecha o pool de conexões
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
