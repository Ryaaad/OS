import https from 'https';
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider  from "next-auth/providers/credentials"
export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
   // ...add more providers here
   CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      console.log("Authorizing user...");
      const { username, password } = credentials as any;
      try {
        const fetchOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
          agent: new https.Agent({
            rejectUnauthorized: false,
          }),
        };
        
        const res = await fetch('https://localhost:7002/api/v1/Auth/login', fetchOptions);
        
        console.log("Response:", await res.json());
        if (res.ok) {
          const user = await res.json();
          console.log("Authorized user", user);
          return user;
        } else {
          const error = await res.text();
          console.error("Authorization error", error);
          return null;
        }
      } catch (error) {
        console.error("Authorization error", error);
        return null;
      }
    }
    
    
  })
  ],
  session:{
    strategy:"jwt"
  },
  pages:{
    signIn:"../../login.tsx"
  }
}

export default NextAuth(authOptions)