import { SignJWT, jwtVerify, JWTPayload } from 'jose';

// Secret key used to sign the JWT (make sure to store this securely in your .env)
const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

// Function to sign a JWT (create a token)
export const signJWT = async (payload: JWTPayload): Promise<string> => {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' }) // Algorithm used to sign the JWT
    .setIssuedAt() // Set the 'issued at' claim
    .setExpirationTime('1h') // Set token expiration time (1 hour)
    .sign(SECRET_KEY); // Sign the token with the secret key
};

// Function to verify a JWT (check if it's valid)
export const verifyJWT = async (token: string): Promise<object | null> => {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return payload; // Return the decoded payload if valid
  } catch (error) {
    console.error('Invalid or expired token:', error);
    throw new Error('JWT Verification Failed');
  }
};
