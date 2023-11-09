import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ImageDisplay({ images }: any) {
  const router = useRouter();
  const urls: string[] = [];
  const [imageList, setImageList] = useState(images);
  const names: string[] = [];

  useEffect(() => {
    const Length = images.length;

    for (let i = 0; i < Length; i++) {
      urls.push(images[i].image);
    }
  }, [urls]);

  return (
    <div className="Artwork_display">
      <div className="Artwork_display-container">
        {images.map((image: any, index: any) => (
          <div key={index} className="Artwork_display-card">
            <img
              src={image.image}
              alt={image.title}
              width={200}
              height={200}
              className="Artwork_display-img"
            />
            <p className="Artwork_display-title">{image.title.substring(9)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



