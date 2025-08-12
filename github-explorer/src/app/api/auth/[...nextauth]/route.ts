import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
      authorization: {
        params: {
          scope: 'read:user user:email public_repo'
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      
      return token
    },
    async session({ session, token }: { session: any; token: any }) {
      // Send properties to the client
      session.accessToken = token.accessToken as string
      
      return session
    },
  },
}

// @ts-expect-error NextAuth v4 compatibility issue with Next.js 15
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }