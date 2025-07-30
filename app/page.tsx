import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { MultichainSection } from "@/components/multichain-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { Footer } from "@/components/footer"
import { PixelDivider } from "@/components/pixel-divider"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Black Background */}
      <section className="bg-black">
        <HeroSection />
      </section>

      {/* Pixel divider from black to dark blue */}
      <div className="bg-slate-800 relative">
        <PixelDivider variant="top" />
      </div>

      {/* Mission Section - Dark Blue/Gray Background */}
      <section className="bg-slate-800">
        <MissionSection />
      </section>

      {/* Pixel divider from dark blue to black */}
      <div className="bg-black relative">
        <PixelDivider variant="top" />
      </div>

      {/* Multichain Section - Black Background */}
      <section className="bg-black">
        <MultichainSection />
      </section>

      {/* Pixel divider from black to dark blue */}
      <div className="bg-slate-800 relative">
        <PixelDivider variant="top" />
      </div>

      {/* Tokenomics Section - Dark Blue/Gray Background */}
      <section className="bg-slate-800">
        <TokenomicsSection />
      </section>

      {/* Pixel divider to footer */}
      <div className="bg-[#7ED321] relative">
        <PixelDivider variant="top" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
