import React, { useState, FormEvent } from "react";
import {useSession} from 'next-auth/react'
import AudioArtwork from '../public/Audio-art.png'
import Image from "next/image";

export default function UploadComponent() {
  const userName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME
  const [audio, setAudio] = useState<File | null>(null);
  const {data:session} = useSession()
  const name: string = session.user.name || '';

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget; 
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const formData = new FormData();
  
    for (const file of fileInput.files) {
      formData.append("file", file);
      formData.append('public_id',name) 
    }
   
    formData.append("upload_preset","audios") 

    const data2 = await fetch(`https://api.cloudinary.com/v1_1/${userName}/upload`,{
      method:"POST",
      body: formData,
    }).then((r)=>r.json())
  };

  return (
    <div className="Audio_upload">
      <form onSubmit={handleSubmit} className="Audio_upload-form">
        <input type="file" name="file" multiple className="Audio_upload-input"/>
        <button type="submit" className="Audio_upload-btn">Upload</button>
      </form>
      <Image src={AudioArtwork} alt='AudioImage' className="Audio_upload-img"/>
    </div>
  );
}



