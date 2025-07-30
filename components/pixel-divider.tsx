"use client"

interface PixelDividerProps {
  variant?: "top" | "bottom" | "both"
  className?: string
}

export function PixelDivider({ variant = "both", className = "" }: PixelDividerProps) {
  // Generate random pixel pattern for the divider
  const generatePixelRow = (width = 100) => {
    return Array.from({ length: width }).map((_, i) => {
      // Create irregular pixel pattern
      const shouldShow = Math.random() > 0.3
      const height = Math.random() > 0.5 ? "h-2" : "h-4"
      return { show: shouldShow, height, index: i }
    })
  }

  const topPixels = generatePixelRow(120)
  const bottomPixels = generatePixelRow(120)

  return (
    <div className={`relative w-full ${className}`}>
      {/* Top Divider */}
      {(variant === "top" || variant === "both") && (
        <div className="absolute top-0 left-0 w-full h-8 overflow-hidden">
          <div className="flex items-end justify-center w-full h-full">
            {topPixels.map((pixel, i) => (
              <div
                key={`top-${i}`}
                className={`${pixel.height} w-1 bg-gray-800 ${pixel.show ? "opacity-100" : "opacity-0"}`}
                style={{
                  animationDelay: `${i * 10}ms`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Bottom Divider */}
      {(variant === "bottom" || variant === "both") && (
        <div className="absolute bottom-0 left-0 w-full h-8 overflow-hidden">
          <div className="flex items-start justify-center w-full h-full">
            {bottomPixels.map((pixel, i) => (
              <div
                key={`bottom-${i}`}
                className={`${pixel.height} w-1 bg-gray-800 ${pixel.show ? "opacity-100" : "opacity-0"}`}
                style={{
                  animationDelay: `${i * 10}ms`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
