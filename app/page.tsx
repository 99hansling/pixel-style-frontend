import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { MultichainSection } from "@/components/multichain-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <MissionSection />
        <MultichainSection />
        <TokenomicsSection />
      </main>
      <Footer />
    </div>
  )
}
