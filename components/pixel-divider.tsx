"use client"

interface PixelDividerProps {
  variant?: "top" | "bottom"
  fromColor?: string
  toColor?: string
  className?: string
}

export function PixelDivider({
  variant = "bottom",
  fromColor = "bg-black",
  toColor = "bg-gray-900",
  className = "",
}: PixelDividerProps) {
  // Create a more natural pixel pattern
  const generatePixelPattern = () => {
    const pattern = []
    const width = 200 // More pixels for smoother transition

    for (let i = 0; i < width; i++) {
      // Create wave-like pattern with randomness
      const baseHeight = Math.sin(i * 0.1) * 3 + 4
      const randomOffset = (Math.random() - 0.5) * 2
      const height = Math.max(1, Math.min(8, Math.round(baseHeight + randomOffset)))

      pattern.push({
        height: height * 4, // Make pixels bigger (4px each)
        opacity: Math.random() > 0.1 ? 1 : 0, // Occasional gaps
      })
    }
    return pattern
  }

  const pixels = generatePixelPattern()

  if (variant === "bottom") {
    return (
      <div className={`relative w-full h-8 ${className}`}>
        <div className={`absolute inset-0 ${fromColor}`}></div>
        <div className="absolute bottom-0 left-0 w-full flex justify-center">
          <div className="flex items-end">
            {pixels.map((pixel, i) => (
              <div
                key={i}
                className={`w-1 ${toColor}`}
                style={{
                  height: `${pixel.height}px`,
                  opacity: pixel.opacity,
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
    <div className={`relative w-full h-8 ${className}`}>
      <div className={`absolute inset-0 ${toColor}`}></div>
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="flex items-start">
          {pixels.map((pixel, i) => (
            <div
              key={i}
              className={`w-1 ${fromColor}`}
              style={{
                height: `${pixel.height}px`,
                opacity: pixel.opacity,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
