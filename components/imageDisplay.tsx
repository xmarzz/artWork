import React, { useEffect, useState } from "react";

export default function ImageDisplay({ images }: any) {
  const urls: string[] = [];
  const [imageList, setImageList] = useState(images);

  useEffect(() => {
    const Length = images.length;

    for (let i = 0; i < Length; i++) {
      urls.push(images[i].image);
    }
  }, [urls]);

  return (
    <div className="imagedisplay">
      <div>hello</div>
      <div>
        {urls.map((url, index) => (
          <img key={index} src={url} alt="" width={200} height={200} />
        ))}
      </div>
      <div></div>
      <div>
        {images.map((image: any) => (
          <img
            key={image.id}
            src={image.image}
            alt={image.title}
            width={200}
            height={200}
          />
        ))}
      </div>
    </div>
  );
}
