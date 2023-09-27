import HomeHeader from "@/components/HomeHeader";

const API_KEY = process.env.API_KEY

export default async function Home() {
  return (
    <main>
      <HomeHeader />
    </main>
  )
}
