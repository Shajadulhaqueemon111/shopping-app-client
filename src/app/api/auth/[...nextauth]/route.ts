import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],

  // session: {
  //   strategy: "jwt",
  // },

  // callbacks: {
  //   async jwt({ token, user, account }) {
  //     if (account && user) {
  //       token.accessToken = account.access_token;
  //       token.name = user.name;
  //       token.picture = user.image;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     if (session.user) {
  //       session.user.name = token.name as string;
  //       session.user.image = token.picture as string;
  //     }
  //     (session as any).accessToken = token.accessToken; // optional if needed
  //     return session;
  //   },
  // },

  secret: process.env.NEXTAUTH_SECRET, // Make sure it's set in .env.local
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
