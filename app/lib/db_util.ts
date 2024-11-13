// Utility script for establishing connection pool with database
import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.DB_SERVER_CA ? process.env.DB_SERVER_CA.replace(/\\n/g, '\n') : undefined,
    key: process.env.DB_CLIENT_KEY ? process.env.DB_CLIENT_KEY.replace(/\\n/g, '\n') : undefined,
    cert: process.env.DB_CLIENT_CERT ? process.env.DB_CLIENT_CERT.replace(/\\n/g, '\n') : undefined
  },
  waitForConnections: true,   // Wait for available connection if the pool is full
  connectionLimit: 10,        // Max number of simultaneous connections
  queueLimit: 0               // No limit on the number of queued connection requests
});

// Export the pool (so other files can use it)
export const getConnection = async () => {
  try {
    console.log('Attempting to get a database connection...');
    const connection = await pool.getConnection();
    console.log('Database connection established successfully.');
    return connection;
  } catch (error) {
    console.error('Error establishing database connection:', error);
    throw error;
  }
};