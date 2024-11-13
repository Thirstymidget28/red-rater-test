// Utility script for establishing connection pool with database

import mysql from 'mysql2/promise';

interface DBConnection {
  execute: <T>(query: string, values?: any[]) => Promise<[T, mysql.FieldPacket[]]>;
}

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,   // Wait for available connection if the pool is full
  connectionLimit: 10,        // Max number of simultaneous connections
  queueLimit: 0               // No limit on the number of queued connection requests
});

// Export the pool (so other files can use it)
export const getConnection = async () => await pool.getConnection();
