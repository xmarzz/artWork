import { data } from 'autoprefixer'
import {useSession} from 'next-auth/react'
import Link from 'next/link'

import Logout from '@/components/signOut'
import Access from '../components/signIn'
import {google} from 'googleapis'


export default function Home  () {

   const { data:session }= useSession()
  

   if(!session)
  return (
 <>
     <Access/>
     
 </>
  )

   else 
   return (
    <>
      <Logout/>

  </>
  )
}

