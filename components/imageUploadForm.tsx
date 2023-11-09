import React, { useRef, useState } from "react";
const userName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME;
import { useSession } from 'next-auth/react'
import Artwork1 from '../public/artwork2.png'
import Image from "next/image";

export default function ImageUploadForm() {

  const  { data : session } = useSession()
  const name: string= session.user.name || '';
  
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
    
    formData.append("upload_preset", "my_uploads");

    const data = await fetch(
      `https://api.cloudinary.com/v1_1/${userName}/upload`,
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json()).then(()=>console.log('upload successful'));

  };

  return (
    <div className="Artwork_upload">
      <form onSubmit={handleSubmit} className="Artwork_upload-form">
        <input type="file" name="file" multiple className="Artwork_upload-input"/>
        <button type="submit" className="Artwork_upload-btn">Upload</button>
      </form>
      <div className="Artwork_upload-img">
        <Image src={Artwork1} width={100} height={100} alt="Artwork1" className="Artwork_upload-img1"/>
      </div>
    </div>
  );
}


