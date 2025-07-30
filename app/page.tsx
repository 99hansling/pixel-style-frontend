import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { MultichainSection } from "@/components/multichain-section"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { Footer } from "@/components/footer"
import { PixelTransition } from "@/components/pixel-transition"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Black Background */}
      <section className="bg-black">
        <HeroSection />
      </section>

      {/* Pixel transition from black to gray */}
      <PixelTransition fromBg="bg-black" toBg="bg-gray-900" />

      {/* Mission Section - Dark Gray Background */}
      <section className="bg-gray-900">
        <MissionSection />
      </section>

      {/* Pixel transition from gray to black */}
      <PixelTransition fromBg="bg-gray-900" toBg="bg-black" />

      {/* Multichain Section - Black Background */}
      <section className="bg-black">
        <MultichainSection />
      </section>

      {/* Pixel transition from black to gray */}
      <PixelTransition fromBg="bg-black" toBg="bg-gray-900" />

      {/* Tokenomics Section - Dark Gray Background */}
      <section className="bg-gray-900">
        <TokenomicsSection />
      </section>

      {/* Pixel transition to footer */}
      <PixelTransition fromBg="bg-gray-900" toBg="bg-[#7ED321]" />

      {/* Footer */}
      <Footer />
    </div>
  )
}
