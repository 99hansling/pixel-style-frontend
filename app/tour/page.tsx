"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

// Pixel art components for sponsors
function PixelFlag() {
  return (
    <div className="w-12 h-12 bg-gray-900 relative">
      <div className="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full">
        {Array.from({ length: 36 }).map((_, i) => {
          const row = Math.floor(i / 6)
          const col = i % 6
          const isFlag =
            (row === 1 && col >= 1 && col <= 4) || (row === 2 && col >= 1 && col <= 4) || (row >= 3 && col === 1)
          return <div key={i} className={`w-full h-full ${isFlag ? "bg-orange-500" : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}

function PixelUser() {
  return (
    <div className="w-12 h-12 bg-gray-900 relative">
      <div className="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full">
        {Array.from({ length: 36 }).map((_, i) => {
          const row = Math.floor(i / 6)
          const col = i % 6
          const isUser =
            (row === 1 && col >= 2 && col <= 3) || // head
            (row === 2 && col >= 1 && col <= 4) || // body
            (row === 3 && col >= 1 && col <= 4) ||
            (row === 4 && (col === 1 || col === 4)) // arms
          return <div key={i} className={`w-full h-full ${isUser ? "bg-purple-600" : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}

function PixelBaby() {
  return (
    <div className="w-12 h-12 bg-gray-900 relative">
      <div className="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full">
        {Array.from({ length: 36 }).map((_, i) => {
          const row = Math.floor(i / 6)
          const col = i % 6
          const isBaby =
            (row === 1 && col >= 2 && col <= 3) || // head
            (row === 2 && col >= 2 && col <= 3) || // body
            (row === 3 && col >= 1 && col <= 4)
          return <div key={i} className={`w-full h-full ${isBaby ? "bg-blue-500" : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}

function PixelLightning() {
  return (
    <div className="w-12 h-12 bg-gray-900 relative">
      <div className="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full">
        {Array.from({ length: 36 }).map((_, i) => {
          const row = Math.floor(i / 6)
          const col = i % 6
          const isLightning =
            (row === 0 && col === 2) ||
            (row === 1 && col >= 1 && col <= 2) ||
            (row === 2 && col >= 2 && col <= 3) ||
            (row === 3 && col >= 3 && col <= 4) ||
            (row === 4 && col === 4) ||
            (row === 5 && col === 3)
          return <div key={i} className={`w-full h-full ${isLightning ? "bg-yellow-500" : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}

function PixelB() {
  return (
    <div className="w-12 h-12 bg-gray-900 relative">
      <div className="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full">
        {Array.from({ length: 36 }).map((_, i) => {
          const row = Math.floor(i / 6)
          const col = i % 6
          const isB =
            col === 1 || // left line
            (row === 1 && col >= 1 && col <= 4) || // top
            (row === 3 && col >= 1 && col <= 4) || // middle
            (row === 5 && col >= 1 && col <= 4) || // bottom
            ((row === 2 || row === 4) && col === 4) // right sides
          return <div key={i} className={`w-full h-full ${isB ? "bg-blue-600" : "bg-transparent"}`} />
        })}
      </div>
    </div>
  )
}

const sponsors = [
  { name: "Micro3", component: <PixelFlag />, color: "bg-orange-500" },
  { name: "DerpDEXcom", component: <PixelUser />, color: "bg-purple-600" },
  { name: "ZkBaby", component: <PixelBaby />, color: "bg-blue-500" },
  { name: "ZNS Connect", component: <PixelLightning />, color: "bg-yellow-500" },
  { name: "More", component: <PixelB />, color: "bg-blue-600" },
]

const seasons = [
  {
    number: 1,
    title: "Season 1",
    description: "Introducing PixelSwap and Exploring Our Inaugural Partners in the Tour de DeXcellence",
    status: "completed",
  },
  {
    number: 2,
    title: "Season 2",
    description: "Exploring Pixel Soul Pets",
    status: "active",
  },
  {
    number: 3,
    title: "Season 3",
    description: "Coming soon",
    status: "upcoming",
  },
  {
    number: 4,
    title: "Season 4",
    description: "Coming soon",
    status: "upcoming",
  },
]

// Pixel art component for Season 2 logo - Enhanced game-style
function PixelLogo() {
  return (
    <div className="relative w-20 h-20">
      {/* Pixelated border effect */}
      <div className="absolute inset-0">
        {/* Create pixelated border using small squares */}
        <div className="absolute top-0 left-2 w-16 h-1 bg-[#7ED321]"></div>
        <div className="absolute top-1 left-1 w-18 h-1 bg-[#7ED321]"></div>
        <div className="absolute top-2 left-0 w-20 h-1 bg-[#7ED321]"></div>

        <div className="absolute bottom-0 left-2 w-16 h-1 bg-[#7ED321]"></div>
        <div className="absolute bottom-1 left-1 w-18 h-1 bg-[#7ED321]"></div>
        <div className="absolute bottom-2 left-0 w-20 h-1 bg-[#7ED321]"></div>

        <div className="absolute left-0 top-2 w-1 h-16 bg-[#7ED321]"></div>
        <div className="absolute left-1 top-1 w-1 h-18 bg-[#7ED321]"></div>
        <div className="absolute left-2 top-0 w-1 h-20 bg-[#7ED321]"></div>

        <div className="absolute right-0 top-2 w-1 h-16 bg-[#7ED321]"></div>
        <div className="absolute right-1 top-1 w-1 h-18 bg-[#7ED321]"></div>
        <div className="absolute right-2 top-0 w-1 h-20 bg-[#7ED321]"></div>
      </div>

      {/* Inner pixel art design */}
      <div className="absolute inset-3 bg-gray-900">
        {/* Create P letter with pixels */}
        <div className="grid grid-cols-8 grid-rows-8 gap-0 w-full h-full">
          {/* P letter pattern using individual pixels */}
          {Array.from({ length: 64 }).map((_, i) => {
            const row = Math.floor(i / 8)
            const col = i % 8
            // Define P letter pattern
            const isPLetter =
              (col === 0 && row >= 0 && row <= 7) || // Left vertical line
              (col === 1 && (row === 0 || row === 3)) || // Top and middle horizontal
              (col === 2 && (row === 0 || row === 3)) || // Top and middle horizontal
              (col === 3 && (row === 0 || row === 1 || row === 2 || row === 3)) // Right side of P
            return <div key={i} className={`w-full h-full ${isPLetter ? "bg-[#7ED321]" : "bg-transparent"}`} />
          })}
        </div>
      </div>

      {/* Glowing effect pixels */}
      <div className="absolute -top-1 left-1/2 w-1 h-1 bg-[#7ED321] animate-pulse transform -translate-x-1/2"></div>
      <div className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#7ED321] animate-pulse transform -translate-x-1/2"></div>
      <div className="absolute top-1/2 -left-1 w-1 h-1 bg-[#7ED321] animate-pulse transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 -right-1 w-1 h-1 bg-[#7ED321] animate-pulse transform -translate-y-1/2"></div>
    </div>
  )
}

// Pixel art question mark for inactive seasons
function PixelQuestionMark() {
  return (
    <div className="relative w-20 h-20">
      {/* Pixelated border */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-2 w-16 h-1 bg-gray-600"></div>
        <div className="absolute top-1 left-1 w-18 h-1 bg-gray-600"></div>
        <div className="absolute bottom-0 left-2 w-16 h-1 bg-gray-600"></div>
        <div className="absolute bottom-1 left-1 w-18 h-1 bg-gray-600"></div>
        <div className="absolute left-0 top-2 w-1 h-16 bg-gray-600"></div>
        <div className="absolute left-1 top-1 w-1 h-18 bg-gray-600"></div>
        <div className="absolute right-0 top-2 w-1 h-16 bg-gray-600"></div>
        <div className="absolute right-1 top-1 w-1 h-18 bg-gray-600"></div>
      </div>

      {/* Question mark pixel art */}
      <div className="absolute inset-3 bg-gray-800">
        <div className="grid grid-cols-6 grid-rows-8 gap-0 w-full h-full">
          {Array.from({ length: 48 }).map((_, i) => {
            const row = Math.floor(i / 6)
            const col = i % 6
            // Question mark pattern
            const isQuestionMark =
              (row === 0 && col >= 1 && col <= 4) || // Top horizontal
              (row === 1 && (col === 0 || col === 5)) || // Top sides
              (row === 2 && col === 5) || // Right side
              (row === 3 && col === 4) || // Middle right
              (row === 4 && col === 3) || // Middle
              (row === 5 && col === 2) || // Lower middle
              (row === 7 && col === 2) // Dot
            return <div key={i} className={`w-full h-full ${isQuestionMark ? "bg-gray-500" : "bg-transparent"}`} />
          })}
        </div>
      </div>
    </div>
  )
}

// Wireframe grid background component
function WireframeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Perspective grid lines */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#7ED321" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Perspective lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <g key={i}>
            <line
              x1={i * 40}
              y1="0"
              x2={200 + (i - 5) * 20}
              y2="300"
              stroke="#7ED321"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <line
              x1="0"
              y1={i * 30}
              x2="400"
              y2={150 + (i - 5) * 15}
              stroke="#7ED321"
              strokeWidth="0.5"
              opacity="0.4"
            />
          </g>
        ))}

        {/* Wireframe rocket/spaceship */}
        <g transform="translate(280, 180)">
          <path
            d="M0,0 L20,10 L15,20 L25,25 L20,35 L10,30 L5,40 L-5,35 L-10,25 L0,20 Z"
            fill="none"
            stroke="#7ED321"
            strokeWidth="1"
            opacity="0.8"
          />
          <path d="M-15,15 L-25,20 L-20,25 L-10,20 Z" fill="none" stroke="#7ED321" strokeWidth="1" opacity="0.6" />
        </g>

        {/* Additional wireframe elements */}
        <g transform="translate(320, 220)">
          <path d="M0,0 L10,5 L8,15 L-2,10 Z" fill="none" stroke="#7ED321" strokeWidth="1" opacity="0.6" />
        </g>
      </svg>
    </div>
  )
}

export default function TourPage() {
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

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
                Tour de DeXcellence -
                <br />
                Powered by PixelSwap
              </h1>

              <div className="text-6xl md:text-8xl font-bold text-[#7ED321] mb-8 font-mono">$10,000</div>

              <p className="text-gray-300 text-lg mb-8 font-mono leading-relaxed">
                Tour de DeXcellence: A DeX-focused campaign highlighting partner collaboration, offering users a journey
                through DeFi.
                <br />
                <br />
                We're hosting an event in Q4 2023, inviting partners to join us in enhancing user access and brand
                awareness.
              </p>

              <div className="flex gap-4">
                <Button className="bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 font-mono">
                  Join now
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white font-mono bg-transparent"
                >
                  Discord
                </Button>
              </div>
            </div>

            {/* Wireframe Graphics with Grid Background */}
            <div className="relative">
              <div className="border-2 border-[#7ED321] rounded-lg p-8 bg-black/80 relative overflow-hidden">
                {/* Wireframe background */}
                <WireframeBackground />

                {/* Content overlay */}
                <div className="relative z-10">
                  <div className="text-center mb-4">
                    <div className="bg-[#7ED321] text-black px-4 py-2 font-mono text-sm inline-block">PIXELSWAP</div>
                  </div>
                  <div className="border border-[#7ED321] p-4 mb-4">
                    <div className="text-[#7ED321] font-mono text-center text-xl font-bold">TOUR DE DEXCELLENCE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8 font-mono">How it works?</h2>
            <p className="text-gray-300 text-lg mb-12 font-mono max-w-3xl">
              Complete tasks in each season to unlock rewards, starting from Season 1 on partnered platforms like Galxe,
              Taskon, QuestN, Zealy and SoQuest.
            </p>

            {/* Task Flow */}
            <div className="flex items-center justify-center space-x-8 mb-12">
              <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                <div className="w-6 h-6 bg-red-500 rounded"></div>
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
                <div className="w-6 h-6 bg-green-500 rounded"></div>
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </div>
              <div className="text-gray-400 font-mono">→</div>
              <div className="bg-[#7ED321] text-black px-6 py-3 rounded-lg font-mono font-bold text-xl">$10,000</div>
              <div className="text-gray-400 font-mono">→</div>
              <Button className="bg-gray-800 text-white border border-gray-600 hover:bg-gray-700 font-mono">
                COMPLETE TASK
              </Button>
            </div>
          </div>

          {/* Seasons with Pixel Art */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12 font-mono">Seasons Tour de DeXcellence</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasons.map((season) => (
                <div
                  key={season.number}
                  className={`bg-gray-900 border rounded-lg p-6 text-center relative overflow-hidden ${
                    season.status === "active" ? "border-[#7ED321]" : "border-gray-700"
                  }`}
                >
                  {season.status === "active" && (
                    <div className="absolute inset-0 opacity-20">
                      {/* Pixel corner decorations */}
                      <div className="absolute top-2 left-2 w-2 h-2 bg-[#7ED321]"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-[#7ED321]"></div>
                      <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#7ED321]"></div>
                      <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#7ED321]"></div>

                      {/* Random pixel scatter */}
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-[#7ED321]"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                      {season.status === "active" ? <PixelLogo /> : <PixelQuestionMark />}
                    </div>

                    <h3
                      className={`text-xl font-bold mb-2 font-mono ${
                        season.status === "active" ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {season.title}
                    </h3>

                    <p
                      className={`text-sm font-mono mb-4 ${season.status === "active" ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {season.description}
                    </p>

                    {season.status === "active" && (
                      <div className="mt-4">
                        <div className="text-[#7ED321] font-mono text-2xl">▷</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsored by */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-12 font-mono">Sponsored by</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-[#7ED321] transition-colors"
                >
                  <div className="mx-auto mb-2 flex justify-center">{sponsor.component}</div>
                  <div className="text-white text-sm font-mono">{sponsor.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
