"use client"

interface PixelTransitionProps {
  fromBg: string
  toBg: string
  className?: string
}

export function PixelTransition({ fromBg, toBg, className = "" }: PixelTransitionProps) {
  // Generate pixel pattern data
  const generatePixelData = () => {
    const pixels = []
    const width = 100 // Number of pixel columns

    for (let x = 0; x < width; x++) {
      // Create organic wave pattern
      const wave1 = Math.sin(x * 0.15) * 8
      const wave2 = Math.sin(x * 0.08) * 4
      const noise = (Math.random() - 0.5) * 6

      const baseHeight = 20 + wave1 + wave2 + noise
      const height = Math.max(8, Math.min(40, baseHeight))

      // Occasionally create gaps for more organic look
      const hasPixel = Math.random() > 0.05

      pixels.push({
        x: x * 8, // 8px wide pixels
        height: hasPixel ? height : 0,
        width: 8,
      })
    }

    return pixels
  }

  const pixels = generatePixelData()

  return (
    <div className={`relative w-full h-12 overflow-hidden ${className}`}>
      {/* Background layers */}
      <div className={`absolute inset-0 ${fromBg}`}></div>
      <div className={`absolute bottom-0 inset-x-0 h-8 ${toBg}`}></div>

      {/* Pixel transition */}
      <svg
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        width="800"
        height="48"
        viewBox="0 0 800 48"
        preserveAspectRatio="xMidYEnd meet"
      >
        {pixels.map((pixel, i) => (
          <rect
            key={i}
            x={pixel.x}
            y={48 - pixel.height}
            width={pixel.width}
            height={pixel.height}
            className={
              toBg === "bg-black"
                ? "fill-black"
                : toBg === "bg-gray-900"
                  ? "fill-gray-900"
                  : toBg === "bg-[#7ED321]"
                    ? "fill-[#7ED321]"
                    : "fill-gray-900"
            }
          />
        ))}
      </svg>
    </div>
  )
}
