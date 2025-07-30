"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const rewardTiers = [
  { name: "Sapphire", color: "bg-purple-600", icon: "💎" },
  { name: "3x Sapphire", color: "bg-purple-600", icon: "💎" },
  { name: "5x Sapphire", color: "bg-purple-600", icon: "💎" },
  { name: "1x PUSD", color: "bg-[#7ED321]", icon: "🪙" },
  { name: "3x PUSD", color: "bg-[#7ED321]", icon: "🪙" },
]

const tabs = ["Check-in", "Referral", "Mint PSP"]

export default function DailyPage() {
  const [activeTab, setActiveTab] = useState("Check-in")

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

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-0 border border-gray-700 rounded-lg overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-mono text-sm border-r border-gray-700 last:border-r-0 ${
                    activeTab === tab ? "bg-gray-800 text-white" : "bg-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "Check-in" && (
            <>
              {/* Check-in Description */}
              <div className="text-center mb-12">
                <p className="text-gray-300 font-mono max-w-2xl mx-auto">
                  Check in daily to earn Sapphire. Moreover, share this to your friends and get
                  <br />
                  extra Sapphires. Let's spread the joy to everyone!
                </p>
                <button className="text-[#7ED321] hover:text-white underline font-mono mt-4">View details</button>
              </div>

              {/* Connect Wallet Button */}
              <div className="text-center mb-12">
                <Button className="bg-[#7ED321] text-black hover:bg-[#6BC91A] font-mono px-8 py-3">
                  Connect Wallet
                </Button>
              </div>

              {/* Reward Cards */}
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#7ED321] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-black font-bold text-2xl font-mono">P</div>
                  </div>
                  <h3 className="text-white font-mono text-lg mb-2">1 PUSD</h3>
                  <div className="text-gray-400 font-mono text-sm mb-4">
                    <span className="text-purple-400">💎</span> 0 Sapphire
                  </div>
                  <Button className="bg-[#7ED321] text-black hover:bg-[#6BC91A] font-mono w-full">
                    Connect Wallet
                  </Button>
                </div>

                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-black font-bold text-2xl">✦</div>
                  </div>
                  <h3 className="text-white font-mono text-lg mb-2">1 Gem Stone</h3>
                  <div className="text-gray-400 font-mono text-sm mb-4">
                    <span className="text-purple-400">💎</span> 0 Sapphire
                  </div>
                  <Button className="bg-[#7ED321] text-black hover:bg-[#6BC91A] font-mono w-full">
                    Connect Wallet
                  </Button>
                </div>
              </div>

              {/* Leaderboard */}
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-8 font-mono">Leaderboard</h2>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
                  <div className="text-gray-400 font-mono">Loading...</div>
                </div>
              </div>
            </>
          )}

          {/* List Rewards Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 font-mono">List Rewards</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {rewardTiers.map((reward, index) => (
                <div
                  key={index}
                  className={`${reward.color} text-white px-6 py-3 rounded-lg font-mono text-sm flex items-center space-x-2`}
                >
                  <span>{reward.icon}</span>
                  <span>{reward.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* History Section */}
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-8 font-mono">History</h2>
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 bg-gray-800 border-b border-gray-700">
                <div className="p-4 text-white font-mono font-bold">Time</div>
                <div className="p-4 text-white font-mono font-bold border-l border-gray-700">Rewards</div>
              </div>
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-gray-500 text-2xl">📊</div>
                </div>
                <div className="text-gray-400 font-mono">No data</div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center mt-16">
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
