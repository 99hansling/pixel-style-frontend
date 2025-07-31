"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const wheelRewards = [
  { name: "5x Sapphire", color: "bg-purple-600", icon: "💎" },
  { name: "3x PUSD", color: "bg-[#7ED321]", icon: "🪙" },
  { name: "1x Sapphire", color: "bg-purple-600", icon: "💎" },
  { name: "10x PUSD", color: "bg-[#7ED321]", icon: "🪙" },
  { name: "3x Sapphire", color: "bg-purple-600", icon: "💎" },
  { name: "5x PUSD", color: "bg-[#7ED321]", icon: "🪙" },
]

export default function LuckyWheelPage() {
  const [activeWheel, setActiveWheel] = useState("Sapphire Wheel")
  const [isSpinning, setIsSpinning] = useState(false)

  const handleSpin = () => {
    setIsSpinning(true)
    setTimeout(() => {
      setIsSpinning(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-16 px-4 py-12">
        {/* Pixel decorations */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-gray-800"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 mb-12 font-mono">PIXEL LUCKY WHEEL</h1>

          {/* Wheel Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-0 border-b-2 border-gray-700">
              {["Sapphire Wheel", "Stone Wheel"].map((wheel) => (
                <button
                  key={wheel}
                  onClick={() => setActiveWheel(wheel)}
                  className={`px-8 py-4 font-mono text-lg ${
                    activeWheel === wheel ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {wheel}
                </button>
              ))}
            </div>
          </div>

          {/* Lucky Wheel */}
          <div className="mb-16">
            <div className="relative w-80 h-80 mx-auto">
              {/* Outer pixelated border */}
              <div className="absolute inset-0">
                {/* Create pixelated border effect */}
                <div
                  className="absolute inset-0 bg-yellow-400"
                  style={{
                    clipPath: "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
                  }}
                >
                  <div
                    className="absolute inset-4 bg-black"
                    style={{
                      clipPath: "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
                    }}
                  >
                    {/* Wheel sections */}
                    <div
                      className={`absolute inset-4 rounded-full bg-gradient-conic from-yellow-400 via-yellow-600 to-yellow-400 ${isSpinning ? "animate-spin" : ""}`}
                    >
                      <div className="absolute inset-8 rounded-full bg-black flex items-center justify-center">
                        {/* Center spin button */}
                        <Button
                          onClick={handleSpin}
                          disabled={isSpinning}
                          className="w-20 h-20 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 font-mono font-bold text-sm"
                        >
                          {isSpinning ? "..." : "SPIN"}
                          <br />
                          <span className="text-xs">3 Sapphire</span>
                        </Button>
                      </div>

                      {/* Reward sections around the wheel */}
                      {wheelRewards.map((reward, index) => {
                        const angle = index * 60 - 90 // 6 sections, 60 degrees each
                        const radius = 100
                        const x = Math.cos((angle * Math.PI) / 180) * radius
                        const y = Math.sin((angle * Math.PI) / 180) * radius

                        return (
                          <div
                            key={index}
                            className="absolute w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center text-xs font-mono"
                            style={{
                              left: `calc(50% + ${x}px - 24px)`,
                              top: `calc(50% + ${y}px - 24px)`,
                            }}
                          >
                            <div className="text-center">
                              <div className="text-black text-lg">{reward.icon}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* List Rewards */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 font-mono">List Rewards</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {wheelRewards.map((reward, index) => (
                <div
                  key={index}
                  className={`${reward.color} text-white px-4 py-3 rounded-lg font-mono text-sm flex items-center justify-center space-x-2`}
                >
                  <span>{reward.icon}</span>
                  <span>{reward.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Message */}
          <div className="mt-20">
            <p className="text-white text-lg font-mono max-w-4xl mx-auto">
              Enabling and Empowering Users by Providing Seamless and Accessible
              <br />
              DeFi Opportunities.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
