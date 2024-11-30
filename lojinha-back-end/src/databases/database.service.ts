import { Injectable } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private pool: Pool;

  constructor() {
    // Debug: Log das variáveis de ambiente
    console.log('DB_USER:', process.env.DB_USER);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
    console.log('DB_DATABASE:', process.env.DB_DATABASE);

    // Configuração da conexão
    this.pool = createPool({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      waitForConnections: true, // Aguarda conexões disponíveis
      connectionLimit: 10, // Limite máximo de conexões
      queueLimit: 0, // Sem limite para enfileiramento
    });
  }

  /**
   * Obtém a pool de conexões para uso direto.
   */
  getConnection(): Pool {
    return this.pool;
  }

  /**
   * Executa uma query SQL com parâmetros.
   * @param query A string da query SQL.
   * @param params Os parâmetros para a query.
   * @returns O resultado da execução da query.
   */
  async execute(query: string, params: any[] = []): Promise<any> {
    try {
      const [results] = await this.pool.execute(query, params);
      return results;
    } catch (error) {
      console.error('Erro ao executar a query:', error.message);
      throw new Error('Erro ao executar a query no banco de dados.');
    }
  }
}
