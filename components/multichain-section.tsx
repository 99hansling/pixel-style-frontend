"use client"

import { Button } from "@/components/ui/button"

const blockchains = [
  { name: "Arbitrum", icon: "🔷", color: "bg-blue-500" },
  { name: "Avalanche", icon: "🔺", color: "bg-red-500" },
  { name: "Bitcoin", icon: "₿", color: "bg-orange-500" },
  { name: "Ethereum", icon: "Ξ", color: "bg-gray-400" },
  { name: "Linea", icon: "⟡", color: "bg-gray-600" },
  { name: "Solana", icon: "◎", color: "bg-purple-500" },
  { name: "Sui", icon: "💧", color: "bg-blue-400" },
  { name: "Sei", icon: "🌊", color: "bg-red-400" },
  { name: "Aptos", icon: "⬢", color: "bg-gray-500" },
  { name: "Zetachain", icon: "Z", color: "bg-green-400" },
]

export function MultichainSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Pixel decorations */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gray-800"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">Multi-chain support at Pixelswap</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-3xl mx-auto font-mono leading-relaxed">
          Pixelswap serves as a multi-chain DeFi hub, delivering
          <br />
          an inclusive, transparent, and safeguarded platform
          <br />
          accessible to all users.
        </p>

        {/* Blockchain Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 max-w-4xl mx-auto">
          {blockchains.map((blockchain, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg p-3 hover:border-[#7ED321] transition-colors"
            >
              <div
                className={`w-6 h-6 ${blockchain.color} rounded-full flex items-center justify-center text-white font-bold text-xs mb-2 mx-auto`}
              >
                {blockchain.icon}
              </div>
              <div className="text-white text-xs font-mono">{blockchain.name}</div>
            </div>
          ))}
        </div>

        {/* Future Vision Section */}
        <div className="border border-gray-700 rounded-lg p-8 max-w-4xl mx-auto relative">
          {/* Animated Pixel Eye */}
          <div className="absolute right-8 top-8">
            <div className="grid grid-cols-8 grid-rows-6 gap-1 w-16 h-12">
              {Array.from({ length: 48 }).map((_, i) => {
                const row = Math.floor(i / 8)
                const col = i % 8

                // Define eye pattern
                const stage1Pattern = [
                  row === 1 && col >= 1 && col <= 6,
                  row === 4 && col >= 1 && col <= 6,
                  row === 2 && (col === 0 || col === 7),
                  row === 3 && (col === 0 || col === 7),
                ].some(Boolean)

                const stage2Pattern = [row === 2 && col >= 1 && col <= 6, row === 3 && col >= 1 && col <= 6].some(
                  Boolean,
                )

                const stage3Pattern = [row === 2 && col >= 3 && col <= 4, row === 3 && col >= 3 && col <= 4].some(
                  Boolean,
                )

                let animationDelay = "0s"
                let shouldShow = false
                let pixelColor = "bg-[#7ED321]"

                if (stage1Pattern) {
                  animationDelay = "0s"
                  shouldShow = true
                  pixelColor = "bg-[#7ED321]"
                } else if (stage2Pattern) {
                  animationDelay = "1s"
                  shouldShow = true
                  pixelColor = "bg-green-300"
                } else if (stage3Pattern) {
                  animationDelay = "2s"
                  shouldShow = true
                  pixelColor = "bg-gray-900"
                }

                if (!shouldShow) return <div key={i} className="w-2 h-2" />

                return (
                  <div
                    key={i}
                    className={`w-2 h-2 ${pixelColor} opacity-0 animate-pulse`}
                    style={{
                      animation: `pixelFadeIn 0.8s ease-in-out ${animationDelay} forwards`,
                    }}
                  />
                )
              })}
            </div>
          </div>

          <div className="text-left max-w-2xl">
            <h3 className="text-3xl font-bold text-white mb-6 font-mono">Future Vision</h3>
            <p className="text-gray-400 text-lg mb-8 font-mono leading-relaxed">
              Is to create a comprehensive and intuitive DeFi hub, enhanced accessibility and user-friendliness through
              the extensible Ethereum network, catering to a diverse user base.
            </p>
            <div className="flex gap-4">
              <Button className="bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 font-mono">
                Enter app →
              </Button>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white font-mono bg-transparent"
              >
                Docs →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
