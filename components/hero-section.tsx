"use client"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Pixel decorations */}
      <div className="absolute inset-0">
        {/* Scattered pixel squares */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gray-800"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
        {/* Green accent pixels */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`green-${i}`}
            className="absolute w-3 h-3 bg-[#7ED321]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Large Pixel Text */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-mono leading-none">
            <span className="text-[#7ED321] block">PIXEL</span>
            <span className="text-gray-400 block">SWAP</span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-mono leading-relaxed">
          Is a efficient and interconnected
          <br />
          decentralized exchange that accommodates
          <br />
          various blockchain networks seamlessly.
        </p>

        {/* Statistics Bar */}
        <div className="bg-[#7ED321] text-black p-6 rounded-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-mono">$200k+</div>
              <div className="text-sm font-mono">Trade Volume</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-mono">1.3M+</div>
              <div className="text-sm font-mono">All Time Trade</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-mono">15+</div>
              <div className="text-sm font-mono">Integration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-mono">10k+</div>
              <div className="text-sm font-mono">Community Delegates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
