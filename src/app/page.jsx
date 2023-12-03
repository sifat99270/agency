
import Navbar from "@/components/Navbar/navbar";
import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats/Stats";
import Footer from "@/components/Footer/footer";
import Subscribe from "@/components/Subscribe/subscribe";
import Feature from "@/components/Feature/Feature";
import WorkList from "@/components/WorkList/WorkList";

export default function Home() {
  return (
      <>
    <main style={{backgroundColor:"#F0FDF4"}}  >
      <Hero  />
      <WorkList />
      <Stats />
      <Feature />
    </main>
      </>
  )
}
