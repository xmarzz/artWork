import {useSession } from 'next-auth/react'
import Upload from '../components/musicUpload'
import Display from '../components/musicDisplay'
import Home from './index'

export default function Music(){
  const { data : session } = useSession() 

  return session? (
    <>
       <Upload/>
       <Display/>
    </> 
  ) : (
    <>
   <Home/>
    </>
  )
}



