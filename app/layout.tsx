import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Botpress from "./components/Botpress";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Red Rater",
  description: "Red Rater Professor Evaluation Tool",
  icons: {
    icon: "/DoubleT.png",
  },
};

// Fetch user data before page render
async function fetchInitialUser(headers: Headers) {
  let initialUser = null;
  // Build absolute URL
  const host = headers.get('host');
  const protocol = headers.get('x-forwarded-proto') || 'http';
  const baseUrl = `${protocol}://${host}`;

  try {
    const response = await fetch(`${baseUrl}/api/auth/user`, {
      credentials: 'include',
      headers: {
        cookie: headers.get('cookie') || '',
      },
    });
    if (response.ok) {
      initialUser = await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
  return initialUser;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headers = new Headers();
  if (typeof window === 'undefined') {
    const protocol = process.env.PROTOCOL || 'https'; // Default to 'https' for Vercel
    const host = process.env.VERCEL_URL 
      ? `${protocol}://${process.env.VERCEL_URL}`
      : `http://localhost:3000`;
  
    headers.set('host', host);
    headers.set('x-forwarded-proto', protocol);
  }

  const initialUser = await fetchInitialUser(headers);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar initialUser={initialUser} />
        {/* <AITool /> */}
        <Botpress />
        {children}
      </body>
    </html>
  );
}