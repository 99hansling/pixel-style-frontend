"use client"

export function MissionSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Pixel decorations - adjusted for darker background */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-slate-700"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        ))}
        {/* Add some green accent pixels */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`green-${i}`}
            className="absolute w-4 h-4 bg-[#7ED321]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pixel Art Side - Enhanced to match original */}
          <div className="relative">
            <div className="grid grid-cols-8 gap-1 max-w-md mx-auto">
              {/* Create pixel art pattern matching the original */}
              {Array.from({ length: 64 }).map((_, i) => {
                const row = Math.floor(i / 8)
                const col = i % 8

                // Create a more complex pixel pattern
                let pixelClass = "bg-slate-700"

                // Green pixels (forming a pattern)
                if (row >= 2 && row <= 5 && col >= 2 && col <= 3) {
                  pixelClass = "bg-[#7ED321]"
                }
                // White pixels (forming a pattern)
                else if (row >= 2 && row <= 5 && col >= 4 && col <= 5) {
                  pixelClass = "bg-white"
                }
                // Some random accent pixels
                else if (Math.random() > 0.85) {
                  pixelClass = "bg-slate-600"
                }

                return <div key={i} className={`w-8 h-8 ${pixelClass}`} />
              })}
            </div>
          </div>

          {/* Mission Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#7ED321] mb-6 font-mono">Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 font-mono">
              This is to simplify DeFi, extend the benefits of Ethereum to a broader audience, and promote mass adoption
              of zero-knowledge technologies, Ethereum and Web3.
            </p>
            <button className="text-[#7ED321] hover:text-white underline font-mono">Read more</button>
          </div>
        </div>
      </div>
    </section>
  )
}
