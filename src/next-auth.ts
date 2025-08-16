import * as NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions: NextAuth.AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const getSession = (): Promise<
  (NextAuth.Session & { accessToken: string }) | null
> => NextAuth.getServerSession(authOptions);

export { authOptions, getSession };
