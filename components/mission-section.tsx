"use client"

export function MissionSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Pixel decorations */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-gray-800"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pixel Art Side */}
          <div className="relative">
            <div className="grid grid-cols-8 gap-2 max-w-md mx-auto">
              {/* Create pixel art pattern */}
              {Array.from({ length: 64 }).map((_, i) => {
                const isGreen = [18, 19, 26, 27, 34, 35, 42, 43].includes(i)
                const isWhite = [20, 21, 28, 29, 36, 37, 44, 45].includes(i)
                return (
                  <div
                    key={i}
                    className={`w-8 h-8 ${isGreen ? "bg-[#7ED321]" : isWhite ? "bg-white" : "bg-gray-800"}`}
                  />
                )
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
