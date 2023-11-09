import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider} from 'next-auth/react'
import { Session } from 'next-auth'
import '@/styles/background.css'


export default function App({ Component, pageProps : {session, ...pageProps} }: AppProps<{ session : Session}> ) {

  return (

    <SessionProvider session={session}>
         <Component {...pageProps} />
   </SessionProvider>
  )
  
}


