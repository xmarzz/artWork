import React, { useEffect, useState } from "react";

export default function ImageDisplay({ audios }: any) {
  const urls: string[] = [];
  const [imageList, setImageList] = useState(audios);

  useEffect(() => {
    const Length = audios.length;
    console.log(audios);

    for (let i = 0; i < Length; i++) {
      urls.push(audios[i].image);
      console.log(urls);
    }
  }, [urls]);

  return (
    <div className="Audio_display">
      <div className="Audio_display-container">
        {audios.map((audio: any, index: any) => (
          <div key={index} className="Audio_display-card">
            <audio controls className="Audio_display-audio">
              <source src={audio.image} type="audio/mp3"/>
            </audio>
            <p className="Audio_display-title">{audio.title.substring(6)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}





