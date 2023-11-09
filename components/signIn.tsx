import {signIn} from 'next-auth/react'

export default function Access(){
    return (

        <div className='signIn'>

       <button onClick={(()=> signIn())}>Dive in</button>
       <div className='s-12'>To fully appreciate the wonderful artworks and music created by our community, you need to Sign in</div>
       </div> 
    );
}

