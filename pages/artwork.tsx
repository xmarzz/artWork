import { useSession,signOut } from "next-auth/react";
import ImageCard from "../components/imageUploadForm";
import ImageDisplay from "@/components/ImageDisplay";
import Home from ".";
import Link from 'next/link'

export default function Artwork({ images }: any) {
  const { data: session } = useSession();
  console.log('images',images)

  return session ? (
    <div className="imagedisplay">
      <div className='signOut'>
      <ul className='home-navigation_links'>
       <li> <Link href='/' legacyBehavior>Home</Link></li>
        <li><Link href='/artwork' legacyBehavior><a id='artwork'>artwork</a></Link></li>
        <li><Link href='/music' legacyBehavior><a id='music'>music</a></Link></li>
      </ul>
        <h2 className='Artwork_title'>Welcome to our artwork page, where you can discover a wide array of drawings created by talented individuals within our server</h2>
         <button onClick={(()=> signOut())}> Dive out</button>
       </div>
      <ImageCard />
      <ImageDisplay images={images}/>
    </div>
  ) : (
    <>
      <Home />
    </>
  );
}

export async function getStaticProps() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY +
            ":" +
            process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json());

  const { resources } = results;
  const images = resources.map((resource: any) => {
    return {
      id: resource.asset_id as string,
      title: resource.public_id as string,
      image: resource.secure_url as string,
    };
  });

  return {
    props: {
      images,
    },
  };
}


