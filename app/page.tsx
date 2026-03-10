import HowItWorks from "../components/HowItWorks"
import Features from "../components/Features"
import NavBar from "../components/Navbar"
import Hero from "../components/Hero"
import Background from "../components/Background"
import Pricing from "../components/pricing"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">

      {/* Animated Background */}
      <NavBar/>
	  
	  <Background />

      {/* Hero Section */}
      <Hero />
	<Features/>
	
	<HowItWorks/>
	
	<Pricing/>
	<Footer/>
	
    </main>
  )
}