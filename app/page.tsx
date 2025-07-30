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
      <div className="relative bg-black">
        <HeroSection />
        <PixelDivider variant="bottom" />
      </div>

      {/* Mission Section - Dark Gray Background */}
      <div className="relative bg-gray-900">
        <PixelDivider variant="top" />
        <MissionSection />
        <PixelDivider variant="bottom" />
      </div>

      {/* Multichain Section - Black Background */}
      <div className="relative bg-black">
        <PixelDivider variant="top" />
        <MultichainSection />
        <PixelDivider variant="bottom" />
      </div>

      {/* Tokenomics Section - Dark Gray Background */}
      <div className="relative bg-gray-900">
        <PixelDivider variant="top" />
        <TokenomicsSection />
        <PixelDivider variant="bottom" />
      </div>

      {/* Footer */}
      <div className="relative">
        <PixelDivider variant="top" />
        <Footer />
      </div>
    </div>
  )
}
