"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 rounded-full ${
        scrolled ? "bg-black/95 shadow-lg" : "bg-black/90"
      } shadow-xl shadow-black/20 border border-gray-800/50`}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <h1 className="text-2xl font-bold tracking-tighter relative text-white font-horizon">
            ADULTING
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#609bf0] via-[#609bf0] to-[#ad31f3] group-hover:w-full transition-all duration-300"></span>
          </h1>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden relative overflow-hidden group text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative z-10">{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</div>
          <span className="absolute inset-0 bg-gray-700 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Benefits", "Features", "FAQ"].map((item) => (
            <Link key={item} href={`/#${item.toLowerCase()}`} className="text-sm font-medium relative group text-gray-300 hover:text-white transition-colors">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#609bf0] via-[#609bf0] to-[#ad31f3] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <Button className="bg-gradient-to-r from-[#609bf0] via-[#609bf0] to-[#ad31f3] text-white hover:opacity-90 rounded-full relative overflow-hidden group border-0 font-semibold shadow-lg">
            <span className="relative z-10">Coming Soon</span>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg md:hidden animate-slide-down border border-gray-200">
            <div className="flex flex-col p-4 space-y-4">
              {["Home", "Benefits", "Features", "FAQ"].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-300 flex items-center group"
                  onClick={(e) => handleMobileLinkClick(e, `#${item.toLowerCase()}`)}
                >
                  <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                  {item}
                </Link>
              ))}
              <Button
                className="bg-gradient-to-r from-[#609bf0] via-[#609bf0] to-[#ad31f3] text-white hover:opacity-90 rounded-full w-full relative overflow-hidden group border-0 font-semibold shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Download Now</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 