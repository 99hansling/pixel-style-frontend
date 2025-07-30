"use client"

interface PixelDividerProps {
  variant?: "top" | "bottom"
  className?: string
}

export function PixelDivider({ variant = "bottom", className = "" }: PixelDividerProps) {
  // Generate chunky pixel pattern like the original
  const generatePixelBlocks = () => {
    const blocks = []
    const numBlocks = 60 // Number of pixel blocks across the width

    for (let i = 0; i < numBlocks; i++) {
      // Create random heights for pixel blocks - more dramatic variation
      const heights = [8, 12, 16, 20, 24, 28, 32, 36, 40]
      const randomHeight = heights[Math.floor(Math.random() * heights.length)]

      // Occasionally skip blocks for more irregular look
      const shouldShow = Math.random() > 0.1

      blocks.push({
        height: shouldShow ? randomHeight : 0,
        width: Math.random() > 0.7 ? 24 : 16, // Vary width occasionally
      })
    }

    return blocks
  }

  const pixelBlocks = generatePixelBlocks()

  if (variant === "bottom") {
    return (
      <div className={`relative w-full h-10 overflow-hidden ${className}`}>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="flex items-end">
            {pixelBlocks.map((block, i) => (
              <div
                key={i}
                className="bg-black"
                style={{
                  height: `${block.height}px`,
                  width: `${block.width}px`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Top variant
  return (
    <div className={`relative w-full h-10 overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="flex items-start">
          {pixelBlocks.map((block, i) => (
            <div
              key={i}
              className="bg-black"
              style={{
                height: `${block.height}px`,
                width: `${block.width}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
