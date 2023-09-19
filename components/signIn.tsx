import {signIn} from 'next-auth/react'

export default function Access(){
    return (

        <div className=''>

       <button onClick={(()=> signIn())}>dive in</button>
       <div className='s-12'>you aren't signed in</div>
       </div> 
    );
}