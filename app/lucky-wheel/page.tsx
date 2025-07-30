"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Add the same pixel art components as in daily page
function PixelDiamond() {
  return (
    <div className="w-4 h-4 bg-transparent relative inline-block">
      <div className="grid grid-cols-4 grid-rows-4 gap-0 w-full h-full">
        {Array.from({ length: 16 }).map((_, i) => {
          const row = Math.floor(i / 4)
          const col = i % 4
          const isDiamond =
            (row === 0 && col >= 1 && col <= 2) ||
            (row === 1 && col >= 0 && col <= 3) ||
            (row === 2 && col >= 0 && col <= 3) ||
            (row === 3 && col >= 1 && col <= 2)
          return <div key={i} className={`w-full h-full ${isDiamond ? "bg-purple-400" : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}

function PixelCoin() {
  return (
    <div className="w-4 h-4 bg-transparent relative inline-block">
      <div className="grid grid-cols-4 grid-rows-4 gap-0 w-full h-full">
        {Array.from({ length: 16 }).map((_, i) => {
          const row = Math.floor(i / 4)
          const col = i % 4
          const isCoin =
            (row === 0 && col >= 1 && col <= 2) ||
            (row === 1 && (col === 0 || col === 3)) ||
            (row === 2 && (col === 0 || col === 3)) ||
            (row === 3 && col >= 1 && col <= 2)
          return <div key={i} className={`w-full h-full ${isCoin ? "bg-[#7ED321]" : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}

const wheelRewards = [
  { name: "5x Sapphire", color: "bg-purple-600", component: <PixelDiamond /> },
  { name: "3x PUSD", color: "bg-[#7ED321]", component: <PixelCoin /> },
  { name: "1x Sapphire", color: "bg-purple-600", component: <PixelDiamond /> },
  { name: "10x PUSD", color: "bg-[#7ED321]", component: <PixelCoin /> },
  { name: "3x Sapphire", color: "bg-purple-600", component: <PixelDiamond /> },
  { name: "5x PUSD", color: "bg-[#7ED321]", component: <PixelCoin /> },
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
            <div className="relative w-96 h-96 mx-auto">
              {/* Wheel base circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-700 shadow-2xl">
                {/* Inner wheel circle */}
                <div className="absolute inset-4 rounded-full bg-gray-900 border-4 border-yellow-400">
                  {/* Spinning wheel segments */}
                  <div
                    className={`absolute inset-2 rounded-full overflow-hidden ${isSpinning ? "animate-spin" : ""} transition-transform duration-3000 ease-out`}
                  >
                    {/* Create 6 pie segments */}
                    {wheelRewards.map((reward, index) => {
                      const rotation = index * 60
                      const nextRotation = (index + 1) * 60

                      return (
                        <div
                          key={index}
                          className={`absolute inset-0 ${reward.color} opacity-90`}
                          style={{
                            clipPath: `polygon(50% 50%, 
                              ${50 + 50 * Math.cos((rotation * Math.PI) / 180)}% ${50 + 50 * Math.sin((rotation * Math.PI) / 180)}%, 
                              ${50 + 50 * Math.cos((nextRotation * Math.PI) / 180)}% ${50 + 50 * Math.sin((nextRotation * Math.PI) / 180)}%)`,
                          }}
                        >
                          {/* Segment border */}
                          <div className="absolute inset-0 border border-gray-800 rounded-full"></div>

                          {/* Reward content */}
                          <div
                            className="absolute w-full h-full flex items-center justify-center"
                            style={{
                              transform: `rotate(${rotation + 30}deg)`,
                              transformOrigin: "50% 50%",
                            }}
                          >
                            <div className="text-center text-white font-mono text-xs font-bold transform -rotate-90">
                              <div className="mb-1 scale-150">{reward.component}</div>
                              <div className="whitespace-nowrap">{reward.name}</div>
                            </div>
                          </div>
                        </div>
                      )
                    })}

                    {/* Wheel divider lines */}
                    {Array.from({ length: 6 }).map((_, index) => {
                      const angle = index * 60
                      return (
                        <div
                          key={`line-${index}`}
                          className="absolute w-0.5 h-1/2 bg-gray-800 origin-bottom"
                          style={{
                            left: "50%",
                            bottom: "50%",
                            transform: `translateX(-50%) rotate(${angle}deg)`,
                          }}
                        />
                      )
                    })}
                  </div>

                  {/* Center hub */}
                  <div className="absolute inset-1/3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-4 border-gray-800 shadow-inner flex items-center justify-center">
                    <Button
                      onClick={handleSpin}
                      disabled={isSpinning}
                      className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 text-black hover:from-yellow-200 hover:to-yellow-400 font-mono font-bold text-sm shadow-lg transform hover:scale-105 transition-all duration-200 border-2 border-yellow-600"
                    >
                      <div className="text-center">
                        <div className="text-lg">{isSpinning ? "🎰" : "SPIN"}</div>
                        <div className="text-xs opacity-80">3 💎</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Wheel pointer/arrow */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
                <div className="relative">
                  {/* Arrow shadow */}
                  <div className="absolute top-1 left-1 w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-gray-800"></div>
                  {/* Main arrow */}
                  <div className="w-0 h-0 border-l-6 border-r-6 border-b-12 border-l-transparent border-r-transparent border-b-red-500 drop-shadow-lg"></div>
                  {/* Arrow base */}
                  <div className="w-3 h-6 bg-red-500 mx-auto border border-red-700"></div>
                </div>
              </div>

              {/* Pixel decorative elements around wheel */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-yellow-400 animate-pulse"></div>
                  <div className="w-2 h-2 bg-yellow-400 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-yellow-400 animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-yellow-400 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                  <div className="w-2 h-2 bg-yellow-400 animate-pulse" style={{ animationDelay: "0.8s" }}></div>
                  <div className="w-2 h-2 bg-yellow-400 animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                <div className="flex flex-col space-y-1">
                  <div className="w-2 h-2 bg-yellow-400 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
                  <div className="w-2 h-2 bg-yellow-400 animate-pulse" style={{ animationDelay: "0.7s" }}></div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                <div className="flex flex-col space-y-1">
                  <div className="w-2 h-2 bg-yellow-400 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div className="w-2 h-2 bg-yellow-400 animate-pulse" style={{ animationDelay: "0.9s" }}></div>
                </div>
              </div>

              {/* Game UI elements */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="bg-gray-900 border-2 border-yellow-400 px-6 py-2 font-mono text-yellow-400 text-sm shadow-lg">
                  🎮 LUCKY WHEEL 🎮
                </div>
              </div>

              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="bg-gray-800 border border-gray-600 px-4 py-1 font-mono text-gray-300 text-xs rounded">
                  {isSpinning ? "🎲 SPINNING..." : "🎯 READY TO PLAY"}
                </div>
              </div>

              {/* Spinning particles effect */}
              {isSpinning && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping"
                      style={{
                        left: `${50 + 40 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                        top: `${50 + 40 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* List Rewards */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 font-mono">List Rewards</h2>
            {/* Update List Rewards section */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {wheelRewards.map((reward, index) => (
                <div
                  key={index}
                  className={`${reward.color} text-white px-4 py-3 rounded-lg font-mono text-sm flex items-center justify-center space-x-2`}
                >
                  {reward.component}
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
