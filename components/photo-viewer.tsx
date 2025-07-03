"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"

interface Photo {
  src: string
  alt: string
}

interface PhotoViewerProps {
  photos: Photo[]
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export default function PhotoViewer({ photos, initialIndex, isOpen, onClose }: PhotoViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          goToPrevious()
          break
        case "ArrowRight":
          goToNext()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
    setIsZoomed(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
    setIsZoomed(false)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  if (!isOpen) return null

  const currentPhoto = photos[currentIndex]

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-gradient-to-b from-black/50 to-transparent">
        <div className="text-white text-sm">
          {currentIndex + 1} of {photos.length}
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleZoom}
            className="text-white hover:text-terracotta transition-colors p-2 rounded-full hover:bg-white/10"
            title={isZoomed ? "Zoom out" : "Zoom in"}
          >
            {isZoomed ? <ZoomOut className="w-6 h-6" /> : <ZoomIn className="w-6 h-6" />}
          </button>
          <button
            onClick={onClose}
            className="text-white hover:text-terracotta transition-colors p-2 rounded-full hover:bg-white/10"
            title="Close (Esc)"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {photos.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-terracotta transition-colors p-3 rounded-full hover:bg-white/10 z-10"
            title="Previous (←)"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-terracotta transition-colors p-3 rounded-full hover:bg-white/10 z-10"
            title="Next (→)"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </>
      )}

      {/* Main Image */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div
          className={`relative transition-transform duration-300 ${
            isZoomed ? "scale-150 cursor-grab" : "cursor-zoom-in"
          }`}
          onClick={!isZoomed ? toggleZoom : undefined}
        >
          <Image
            src={currentPhoto.src || "/placeholder.svg"}
            alt={currentPhoto.alt}
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/50 to-transparent">
        <p className="text-white text-center text-sm md:text-base">{currentPhoto.alt}</p>
      </div>

      {/* Thumbnail Strip (for larger screens) */}
      {photos.length > 1 && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 hidden md:flex space-x-2 bg-black/30 rounded-lg p-2">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsZoomed(false)
              }}
              className={`relative w-16 h-12 rounded overflow-hidden transition-opacity ${
                index === currentIndex ? "ring-2 ring-terracotta opacity-100" : "opacity-60 hover:opacity-80"
              }`}
            >
              <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Touch/Click overlay for mobile */}
      <div className="absolute inset-0 md:hidden">
        <div className="w-1/3 h-full" onClick={goToPrevious} />
        <div className="w-1/3 h-full" onClick={toggleZoom} />
        <div className="w-1/3 h-full" onClick={goToNext} />
      </div>
    </div>
  )
}
