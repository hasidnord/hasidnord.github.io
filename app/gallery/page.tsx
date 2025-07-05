"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import PhotoViewer from "@/components/photo-viewer"
import { useState } from "react"

export default function GalleryPage() {
  const galleryCategories = [
    {
      title: "Exterior & Garden",
      images: [
        { src: "/main_facade.jpg?height=400&width=600", alt: "Main facade of the villa" },
        { src: "/main_lawn.jpg?height=400&width=600", alt: "Mediterranean garden with flowers" },
        { src: "/main_swimmingpool.JPG?height=400&width=600", alt: "Swimming pool with panoramic view" },
        { src: "/main_terrace.jpg?height=400&width=600", alt: "Terrace with electric awning" },
      ],
    },
    {
      title: "Living Areas",
      images: [
        { src: "/main_livingroom.jpg?height=400&width=600", alt: "Main living room with fireplace" },
        { src: "/main_hall.jpg?height=400&width=600", alt: "Open layout kitchen and dining room" },
        { src: "/main_kitchen.jpg?height=400&width=600", alt: "Equipped kitchen" },
        { src: "/main_office.jpg?height=400&width=600", alt: "Office with garden view" },
      ],
    },
    {
      title: "Bedrooms & Suites",
      images: [
        { src: "/main_bedroom.jpg?height=400&width=600", alt: "Master suite with walk-in closet" },
        { src: "/main_guestroom.jpg?height=400&width=600", alt: "Guest bedroom with bathroom" },
        { src: "/main_toilet.jpg?height=400&width=600", alt: "Main bathroom" },
        { src: "/main_shower.jpg?height=400&width=600", alt: "Main shower" },
      ],
    },
    {
      title: "Views & Panoramas",
      images: [
        { src: "/placeholder.svg?height=400&width=600", alt: "Panoramic view from the terrace" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Sunset over the hills" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Village of Gordes in the distance" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Surrounding lavender fields" },
      ],
    },
    {
      title: "Apartment A - East Wing",
      images: [
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment A living area" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment A kitchenette" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment A bedroom" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment A private balcony" },
      ],
    },
    {
      title: "Apartment B - West Wing",
      images: [
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment B spacious living area" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment B equipped kitchen" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment B master bedroom" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment B terrace with view" },
      ],
    },
    {
      title: "Apartment C - South Wing",
      images: [
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment C living space" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment C modern kitchen" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment C cozy bedroom" },
        { src: "/placeholder.svg?height=400&width=600", alt: "Apartment C panoramic terrace" },
      ],
    },
  ]

  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerPhotos, setViewerPhotos] = useState<Array<{ src: string; alt: string }>>([])
  const [viewerIndex, setViewerIndex] = useState(0)

  const openViewer = (photos: Array<{ src: string; alt: string }>, index: number) => {
    setViewerPhotos(photos)
    setViewerIndex(index)
    setViewerOpen(true)
  }

  const closeViewer = () => {
    setViewerOpen(false)
  }

  return (
    <div className="min-h-screen py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover every corner of this exceptional villa through our photo collection
          </p>
        </div>

        {galleryCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className="font-playfair text-3xl font-bold text-terracotta mb-8 text-center">{category.title}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {category.images.map((image, imageIndex) => (
                <Card
                  key={imageIndex}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-xl cursor-pointer"
                  onClick={() => openViewer(category.images, imageIndex)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 text-center">{image.alt}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Would you like to visit the villa in person?</p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-colors font-medium"
          >
            Schedule a Visit
          </a>
        </div>
        <PhotoViewer photos={viewerPhotos} initialIndex={viewerIndex} isOpen={viewerOpen} onClose={closeViewer} />
      </div>
    </div>
  )
}
