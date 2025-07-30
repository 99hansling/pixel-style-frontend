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

      {/* Pixel divider from black to gray */}
      <div className="bg-gray-900 relative">
        <PixelDivider variant="top" />
      </div>

      {/* Mission Section - Pure Gray Background */}
      <section className="bg-gray-900">
        <MissionSection />
      </section>

      {/* Pixel divider from gray to black */}
      <div className="bg-black relative">
        <PixelDivider variant="top" />
      </div>

      {/* Multichain Section - Black Background */}
      <section className="bg-black">
        <MultichainSection />
      </section>

      {/* Pixel divider from black to gray */}
      <div className="bg-gray-900 relative">
        <PixelDivider variant="top" />
      </div>

      {/* Tokenomics Section - Pure Gray Background */}
      <section className="bg-gray-900">
        <TokenomicsSection />
      </section>

      {/* Pixel divider from gray to green footer */}
      <div className="bg-[#7ED321] relative">
        <PixelDivider variant="top" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
