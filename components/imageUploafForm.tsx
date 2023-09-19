import React, { useRef, useState } from "react";
import dotenv from "dotenv";
dotenv.config();
const userName = process.env.CLOUDINARY_NAME;

export default function ImageUploadForm() {
  const [img, setImg] = useState();
  const [uploadData, setUploadData] = useState();
  const [Loading, setLoading] = useState(false);
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "my_uploads");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dd2prj4l2/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setUploadData(data);
    console.log(uploadData);
    setImg(data.secure_url);
    console.log(setImg);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" />

        {Loading && `wait, please...`}
        <button type="submit">Upload</button>
      </form>
    </>
  );
}
