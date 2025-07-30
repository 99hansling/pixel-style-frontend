"use client"

interface PixelDividerProps {
  variant?: "top" | "bottom"
  className?: string
}

export function PixelDivider({ variant = "bottom", className = "" }: PixelDividerProps) {
  // SVG 锯齿状图案
  const zigzagPath =
    "M0,20 L8,20 L8,12 L16,12 L16,20 L24,20 L24,8 L32,8 L32,20 L40,20 L40,16 L48,16 L48,20 L56,20 L56,4 L64,4 L64,20 L72,20 L72,12 L80,12 L80,20 L88,20 L88,8 L96,8 L96,20 L104,20 L104,16 L112,16 L112,20 L120,20"

  if (variant === "bottom") {
    return (
      <div className={`relative w-full h-5 overflow-hidden ${className}`}>
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 120 20"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d={zigzagPath} className="fill-black" />
        </svg>
      </div>
    )
  }

  // Top variant - 翻转锯齿图案
  return (
    <div className={`relative w-full h-5 overflow-hidden ${className}`}>
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 120 20"
        preserveAspectRatio="none"
        fill="currentColor"
        style={{ transform: "scaleY(-1)" }}
      >
        <path d={zigzagPath} className="fill-black" />
      </svg>
    </div>
  )
}
