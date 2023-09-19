import {signOut} from 'next-auth/react'

export default function Logout(){
    return (
        <>

         <button onClick={(()=> signOut())}> sign out</button>
        dive out 
        </>
    )
}