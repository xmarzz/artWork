import Access from "@/components/signIn";
import Logout from "@/components/signOut";
import { useSession } from "next-auth/react";
import ImageCard from "../components/imageUploafForm";
import ImageDisplay from "@/components/ImageDisplay";
import Home from ".";

export default function Artwork({ images }: any) {
  const { data: session } = useSession();
  console.log('images',images)

  return session ? (
    <>
      <Logout />
      <ImageCard />
      <ImageDisplay images={images}/>
    </>
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



