import NextAuth, { NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import dotenv from 'dotenv'
dotenv.config()

export const authOptions : NextAuthOptions = {
    providers : [
            GoogleProvider({
                clientId : process.env.CLIENT_ID as string,
                clientSecret : process.env.CLIENT_SECRET as string,
            }),
    
        ]
}

export default NextAuth(authOptions)






        





