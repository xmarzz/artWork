import React, { useState} from 'react'
import axios from 'axios'

export default function Display(){

    const [selectedFile, setSelectedFile] = useState<File | null>(null)

    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            setSelectedFile(e.target.files[0])
        }
    }

    const handleClick=()=>{

    }


         return (
            <>
            <form>
                <input type="file" accept="audio/*" onChange={handleChange}/>
                <button onClick={handleClick}>Upload Audio</button>
            </form>
            </>
         )
}



