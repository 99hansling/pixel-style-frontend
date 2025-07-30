"use client"

import { Button } from "@/components/ui/button"

const blockchains = [
  { name: "Avalanche", icon: "🔺", color: "bg-red-500" },
  { name: "Bitcoin", icon: "₿", color: "bg-orange-500" },
  { name: "Ethereum", icon: "Ξ", color: "bg-gray-400" },
  { name: "Linea", icon: "⟡", color: "bg-gray-600" },
  { name: "Optimism", icon: "🔴", color: "bg-red-600" },
  { name: "Near", icon: "Ⓝ", color: "bg-green-500" },
  { name: "Solana", icon: "◎", color: "bg-purple-500" },
  { name: "Sui", icon: "💧", color: "bg-blue-400" },
  { name: "Sei", icon: "🌊", color: "bg-red-400" },
  { name: "Aptos", icon: "⬢", color: "bg-gray-500" },
  { name: "Zetach", icon: "Z", color: "bg-green-400" },
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
              <div
                className={`w-8 h-8 ${blockchain.color} rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto`}
              >
                {blockchain.icon}
              </div>
              <div className="text-white text-sm font-mono">{blockchain.name}</div>
            </div>
          ))}
        </div>

        {/* Future Vision Section */}
        <div className="border border-gray-700 rounded-lg p-8 max-w-4xl mx-auto relative">
          {/* Green pixel decorations */}
          <div className="absolute right-8 top-8">
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className={`w-3 h-3 ${Math.random() > 0.5 ? "bg-[#7ED321]" : "bg-transparent"}`} />
              ))}
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
