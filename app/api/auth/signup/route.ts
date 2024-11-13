import { NextResponse } from 'next/server';
import { createUser } from '../../../lib/authentication'; // Adjust path if needed

// Named export for POST method
export async function POST(req: Request) {
    const { fname, lname, email, password } = await req.json();
    try {
        await createUser(fname, lname, email, password);
        return NextResponse.json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
    }
}
