import {useSession, signOut} from 'next-auth/react'
import Access from '../components/signIn'
import Link from 'next/link'

export default function Home  () {
   const { data:session }= useSession()
   if(!session)
  return (
 <div className='home_login'>
     <Access/>
 </div>
  )
  
   else 
   return (
    <div className='home_logout'>
      <div className='signOut'>
      <ul className='home-navigation_links'>
       <li> <Link href='/' legacyBehavior>Home</Link></li>
        <li><Link href='/artwork' legacyBehavior><a id='artwork'>artwork</a></Link></li>
        <li><Link href='/music' legacyBehavior><a id='music'>music</a></Link></li>
      </ul>
        <h2 className='home_title'>Welcome to our artwork page, where you can discover a wide array of drawings and Audio recordings of music created by talented individuals within our server</h2>
         <button onClick={(()=> signOut())}> Dive out</button>
        </div>
    </div>
  )
}


