import { NextResponse } from 'next/server';
import { verifyJWT } from '../../../lib/jwt'; // Utility function to verify and decode the token
import { cookies } from 'next/headers'; // Next API for retrieving cookies from client

export async function GET(request: Request) {
  const token = (await cookies()).get('auth_token')?.value;

  if (!token) { return NextResponse.json({ message: 'No token found' }, { status: 401 }); }
  try {
    // Decode the JWT to get user details
    const user = await verifyJWT(token);

    // Validate object
    if (!user || typeof user !== 'object' || !('fname' in user) || !('lname' in user)) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 403 });
    }

    return NextResponse.json({
      fname: user.fname,
      lname: user.lname,
    });
  } catch (error) {
    console.error('Error decoding token:', error);
    return NextResponse.json({ message: 'Invalid token' }, { status: 403 });
  }
}
