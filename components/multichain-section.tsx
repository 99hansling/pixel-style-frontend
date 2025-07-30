"use client"

import { Button } from "@/components/ui/button"

// Pixel art components for blockchains
function PixelAvalanche() {
  return (
    <div className="w-8 h-8 bg-gray-900 relative">
      <div className="grid grid-cols-4 grid-rows-4 gap-0 w-full h-full">
        {Array.from({ length: 16 }).map((_, i) => {
          const row = Math.floor(i / 4)
          const col = i % 4
          const isTriangle =
            (row === 0 && col >= 1 && col <= 2) ||
            (row === 1 && col >= 1 && col <= 2) ||
            (row === 2 && col >= 0 && col <= 3) ||
            (row === 3 && col >= 0 && col <= 3)
          return <div key={i} className={`w-full h-full ${isTriangle ? "bg-red-500" : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}

function PixelBitcoin() {
  return (
    <div className="w-8 h-8 bg-gray-900 relative">
      <div className="grid grid-cols-4 grid-rows-4 gap-0 w-full h-full">
        {Array.from({ length: 16 }).map((_, i) => {
          const row = Math.floor(i / 4)
          const col = i % 4
          const isBitcoin =
            (row === 0 && col >= 1 && col <= 2) ||
            (row === 1 && (col === 0 || col === 3)) ||
            (row === 2 && (col === 0 || col === 3)) ||
            (row === 3 && col >= 1 && col <= 2)
          return <div key={i} className={`w-full h-full ${isBitcoin ? "bg-orange-500" : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}

function PixelEthereum() {
  return (
    <div className="w-8 h-8 bg-gray-900 relative">
      <div className="grid grid-cols-4 grid-rows-4 gap-0 w-full h-full">
        {Array.from({ length: 16 }).map((_, i) => {
          const row = Math.floor(i / 4)
          const col = i % 4
          const isEth =
            (row === 0 && col >= 1 && col <= 2) ||
            (row === 1 && col >= 0 && col <= 3) ||
            (row === 2 && col >= 1 && col <= 2) ||
            (row === 3 && col >= 0 && col <= 3)
          return <div key={i} className={`w-full h-full ${isEth ? "bg-gray-400" : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}

// Add similar components for other blockchains...
function PixelGeneric({ color }: { color: string }) {
  return (
    <div className="w-8 h-8 bg-gray-900 relative">
      <div className="grid grid-cols-4 grid-rows-4 gap-0 w-full h-full">
        {Array.from({ length: 16 }).map((_, i) => {
          const row = Math.floor(i / 4)
          const col = i % 4
          const isPixel = row >= 1 && row <= 2 && col >= 1 && col <= 2
          return <div key={i} className={`w-full h-full ${isPixel ? color : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}

const blockchains = [
  { name: "Avalanche", component: <PixelAvalanche />, color: "bg-red-500" },
  { name: "Bitcoin", component: <PixelBitcoin />, color: "bg-orange-500" },
  { name: "Ethereum", component: <PixelEthereum />, color: "bg-gray-400" },
  { name: "Linea", component: <PixelGeneric color="bg-gray-600" />, color: "bg-gray-600" },
  { name: "Optimism", component: <PixelGeneric color="bg-red-600" />, color: "bg-red-600" },
  { name: "Near", component: <PixelGeneric color="bg-green-500" />, color: "bg-green-500" },
  { name: "Solana", component: <PixelGeneric color="bg-purple-500" />, color: "bg-purple-500" },
  { name: "Sui", component: <PixelGeneric color="bg-blue-400" />, color: "bg-blue-400" },
  { name: "Sei", component: <PixelGeneric color="bg-red-400" />, color: "bg-red-400" },
  { name: "Aptos", component: <PixelGeneric color="bg-gray-500" />, color: "bg-gray-500" },
  { name: "Zetach", component: <PixelGeneric color="bg-green-400" />, color: "bg-green-400" },
]

export function MultichainSection() {
  return (
    <section className="bg-black py-20 px-4 relative overflow-hidden">
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {blockchains.map((blockchain, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-[#7ED321] transition-colors"
            >
              <div className="flex justify-center mb-2">{blockchain.component}</div>
              <div className="text-white text-sm font-mono">{blockchain.name}</div>
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

                // Define eye pattern in three stages
                const stage1Pattern = [
                  // Stage 1: Eye outline (appears first)
                  row === 1 && col >= 1 && col <= 6,
                  row === 4 && col >= 1 && col <= 6,
                  row === 2 && (col === 0 || col === 7),
                  row === 3 && (col === 0 || col === 7),
                ].some(Boolean)

                const stage2Pattern = [
                  // Stage 2: Eye white/iris area (appears second)
                  row === 2 && col >= 1 && col <= 6,
                  row === 3 && col >= 1 && col <= 6,
                ].some(Boolean)

                const stage3Pattern = [
                  // Stage 3: Pupil (appears last)
                  row === 2 && col >= 3 && col <= 4,
                  row === 3 && col >= 3 && col <= 4,
                ].some(Boolean)

                // Determine animation properties
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
                    className={`w-2 h-2 ${pixelColor} opacity-0`}
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
      <style jsx>{`
        @keyframes pixelFadeIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}
