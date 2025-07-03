"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Home, ImageIcon, FileText, Mail, MapPin, Play, Layout, Menu, X, Phone } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/gallery", label: "Gallery", icon: ImageIcon },
    { href: "/video", label: "Videos", icon: Play },
    { href: "/plans", label: "House Plans", icon: Layout },
    { href: "/description", label: "Description", icon: FileText },
    { href: "/contact", label: "Contact", icon: Mail },
    { href: "/map", label: "Location", icon: MapPin },
  ]

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="font-playfair text-2xl font-bold text-terracotta"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Villa Provence
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      pathname === item.href
                        ? "bg-terracotta text-white"
                        : "text-gray-700 hover:bg-cream hover:text-terracotta"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-terracotta p-2 rounded-lg transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

          {/* Mobile Menu */}
          <div className="fixed top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-200">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-lg ${
                      pathname === item.href
                        ? "bg-terracotta text-white"
                        : "text-gray-700 hover:bg-cream hover:text-terracotta"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Contact Info in Mobile Menu */}
            <div className="border-t border-gray-200 px-4 py-6 bg-cream">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-4 h-4 text-terracotta" />
                  <span className="text-sm">+33 4 90 12 34 56</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-4 h-4 text-terracotta" />
                  <span className="text-sm">marie.pierre@villa-provence.fr</span>
                </div>
                <Link
                  href="/contact"
                  className="block w-full bg-terracotta text-white text-center py-3 rounded-lg font-medium mt-4 hover:bg-terracotta/90 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
