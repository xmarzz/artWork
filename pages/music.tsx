import { useSession } from "next-auth/react";
import Upload from "../components/musicUpload";
import Display from "../components/musicDisplay";
import Home from "./index";
import {signOut} from 'next-auth/react'
import Link from 'next/link'

export default function Music({audios} : any) {
  const { data: session } = useSession();

  return session ? (
    <>
      <div className='signOut'>
      <ul className='home-navigation_links'>
       <li> <Link href='/' legacyBehavior>Home</Link></li>
        <li><Link href='/artwork' legacyBehavior><a id='artwork'>artwork</a></Link></li>
        <li><Link href='/music' legacyBehavior><a id='music'>music</a></Link></li>
      </ul>
        <h2 className='music_title'>Explore our Music page, showcasing a variety of songs crafted by talented individuals within our server</h2>
         <button onClick={(()=> signOut())}> Dive out</button>
        </div>
      <Upload />
      <Display audios={audios}/>
    </>
  ) : (
    <>
      <Home />
    </>
  );
}

export async function getStaticProps() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/resources/video`,
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
  const audios = resources.map((resource: any) => {
    return {
      id: resource.asset_id as string,
      title: resource.public_id as string,
      image: resource.secure_url as string,
    };
  });

  return {
    props: {
      audios,
    },
  };
}


