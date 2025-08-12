import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    })
  ],
}

// @ts-expect-error NextAuth v4 compatibility issue with Next.js 15
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }