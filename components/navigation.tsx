"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="bg-[#7ED321] text-black font-bold text-xl px-2 py-1 font-mono cursor-pointer">P</div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-mono ${isActive("/") ? "text-white" : "text-gray-400 hover:text-[#7ED321]"}`}
              >
                Home
              </Link>
              <Link
                href="/daily"
                className={`px-3 py-2 text-sm font-mono ${isActive("/daily") ? "text-white" : "text-gray-400 hover:text-[#7ED321]"}`}
              >
                Daily
              </Link>
              <Link
                href="/tour"
                className={`px-3 py-2 text-sm font-mono ${isActive("/tour") ? "text-white" : "text-gray-400 hover:text-[#7ED321]"}`}
              >
                Tour
              </Link>
              <Link
                href="/lucky-wheel"
                className={`px-3 py-2 text-sm font-mono ${isActive("/lucky-wheel") ? "text-white" : "text-gray-400 hover:text-[#7ED321]"}`}
              >
                Lucky Wheel
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="bg-[#7ED321] text-black border-[#7ED321] hover:bg-[#6BC91A] font-mono text-sm"
            >
              Connect Wallet
            </Button>
            <Button
              variant="outline"
              className="bg-[#7ED321] text-black border-[#7ED321] hover:bg-[#6BC91A] font-mono text-sm"
            >
              Open App
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
