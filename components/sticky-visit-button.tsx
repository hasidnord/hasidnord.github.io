"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar } from "lucide-react"

export default function StickyVisitButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Link
        href="/contact"
        className="flex items-center space-x-2 bg-terracotta hover:bg-terracotta/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
      >
        <Calendar className="w-5 h-5" />
        <span className="hidden sm:inline">Schedule a Visit</span>
        <span className="sm:hidden">Visit</span>
      </Link>
    </div>
  )
}
