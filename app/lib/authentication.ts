import argon2 from 'argon2';
import { getConnection } from './db_util';

export async function createUser(fname: string, lname: string, email: string, password: string) {
    // Hash the password using Argon2
    const passwordHash = await argon2.hash(password);

    // Establish connection to database
    const connection = await getConnection();
    try {
        // Insert new user credentials into database
        await connection.execute(
            'INSERT INTO users (fname, lname, email, password_hash) VALUES (?, ?, ?, ?)',
            [fname, lname, email, passwordHash]
        );
        
    } catch (error) {
        console.error('Error creating user:', error);
    } finally {
        connection.release();
    }
}