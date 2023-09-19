import Access from "@/components/signIn";
import Logout from "@/components/signOut";
import { useSession } from "next-auth/react";
import ImageCard from '../components/imageUploafForm'

export default function Artwork() {
  const { data: session } = useSession();
  return session ? (
    <>
      <Logout />
      <ImageCard/>
    </>
  ) : (
    <>
      <Access />
    </>
  );
}
