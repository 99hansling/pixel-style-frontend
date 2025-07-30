"use client"

const tokenomicsData = [
  { label: "Community & Marketing", percentage: 3, color: "bg-pink-500" },
  { label: "Team", percentage: 4, color: "bg-blue-400" },
  { label: "Token sales", percentage: 11, color: "bg-gray-600" },
  { label: "Ecosystem", percentage: 30, color: "bg-[#7ED321]" },
  { label: "Liquidity Mining", percentage: 52, color: "bg-blue-500" },
]

export function TokenomicsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Pixel decorations - adjusted for pure gray background */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gray-800"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.05,
            }}
          />
        ))}
        {/* Green accent pixels */}
        {Array.from({ length: 15 }).map((_, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-mono">Tokenomics</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tokenomics List */}
          <div className="space-y-6">
            {tokenomicsData.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-4 h-4 ${item.color}`}></div>
                <div className="text-white font-mono">
                  <span className="text-xl font-bold">{item.percentage}%</span>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Circular Chart */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
              {/* Outer ring with gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7ED321] via-blue-500 to-pink-500 p-2">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  {/* Inner logo */}
                  <div className="bg-[#7ED321] text-black font-bold text-6xl w-24 h-24 rounded-full flex items-center justify-center font-mono">
                    P
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-20">
          <p className="text-white text-xl md:text-2xl max-w-4xl mx-auto font-mono leading-relaxed">
            Enabling and Empowering Users by Providing Seamless and Accessible
            <br />
            DeFi Opportunities.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
            <span className="text-black font-bold">T</span>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
            <span className="text-black font-bold">D</span>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
            <span className="text-black font-bold">M</span>
          </div>
        </div>
      </div>
    </section>
  )
}
