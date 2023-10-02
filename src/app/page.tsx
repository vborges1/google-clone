import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image src={`/google-logo.png`} width={300} height={100} alt={""} />
        <HomeSearch />
      </div>
    </main>
  )
}
