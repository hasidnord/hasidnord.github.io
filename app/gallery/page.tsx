"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import PhotoViewer from "@/components/photo-viewer"
import { useState } from "react"

export default function GalleryPage() {
  const galleryCategories = [
    {
      title: "Exterior & Garden, level 1",
      images: [
        { src: "/main_facade.jpg?height=400&width=600", alt: "Main facade of the villa" },
        { src: "/main_lawn.jpg?height=400&width=600", alt: "Mediterranean garden with flowers" },
        { src: "/main_swimmingpool.JPG?height=400&width=600", alt: "Swimming pool with panoramic view" },
        { src: "/main_terrace.jpg?height=400&width=600", alt: "Terrace with electric awning" },
      ],
    },
    {
      title: "Living Areas, level 1",
      images: [
        { src: "/main_livingroom.jpg?height=400&width=600", alt: "Main living room with fireplace" },
        { src: "/main_hall.jpg?height=400&width=600", alt: "Open layout kitchen and dining room" },
        { src: "/main_kitchen.jpg?height=400&width=600", alt: "Equipped kitchen" },
        { src: "/main_office.jpg?height=400&width=600", alt: "Office with garden view" },
        { src: "/main_bedroom.jpg?height=400&width=600", alt: "Master suite with walk-in closet" },
        { src: "/main_guestroom.jpg?height=400&width=600", alt: "Guest bedroom with bathroom" },
        { src: "/main_toilet.jpg?height=400&width=600", alt: "Main bathroom" },
        { src: "/main_shower.jpg?height=400&width=600", alt: "Main shower" },
      ],
    },
    {
      title: "Apartment 1",
      images: [
        { src: "/app1_1.jpg?height=400&width=600", alt: "Apartment 1 living area" },
        { src: "/app1_2.jpg?height=400&width=600", alt: "Apartment 1 kitchen with dining table" },
        { src: "/app1_3.jpg?height=400&width=600", alt: "Apartment 1 bedroom with garden view" },
        { src: "/app1_4.jpg?height=400&width=600", alt: "Apartment 1 bathroom" },
      ],
    },
    {
      title: "Apartment 2",
      images: [
        { src: "/app2_1.jpg?height=400&width=600", alt: "Apartment 2 spacious living area" },
        { src: "/app2_2.jpg?height=400&width=600", alt: "Apartment 2 master bedroom" },
        { src: "/app2_3.jpg?height=400&width=600", alt: "Apartment 2 bathroom" },
        { src: "/app2_4.jpg?height=400&width=600", alt: "Apartment 2 second floor bedroom" },
      ],
    },
    {
      title: "Apartment 3",
      images: [
        { src: "/app3_1.jpg?height=400&width=600", alt: "Apartment 3 spacious living room" },
        { src: "/app3_2.jpg?height=400&width=600", alt: "Apartment 3 living area with dining table" },
        { src: "/app3_3.jpg?height=400&width=600", alt: "Apartment 3 bedroom with adjoining bathroom" },
        { src: "/app3_4.jpg?height=400&width=600", alt: "Apartment 3 kitchen" },
      ],
    },
    {
      title: "Views & Panoramas",
      images: [
        { src: "/view1.jpg?height=400&width=600", alt: "Panoramic view from top floor" },
        { src: "/view2.jpg?height=400&width=600", alt: "Sunset over the hills" },
        { src: "/view3.jpg?height=400&width=600", alt: "Panoramic view from the terrace" },
        { src: "/view4.jpg?height=400&width=600", alt: "View from the pool" },
      ],
    },
    {
      title: "Driveway and upper terraces",
      images: [
         { src: "/Top1.jpg?height=400&width=600", alt: "Top terrace outside apartments A to C" },
        { src: "/Top2.jpg?height=400&width=600", alt: "Topterrace with views" },
        { src: "/Top3.jpg?height=400&width=600", alt: "House seen from driveway" },
        { src: "/Top4.jpg?height=400&width=600", alt: "Driveway with lots of parking space" },
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
            Request a Visit
          </a>
        </div>
        <PhotoViewer photos={viewerPhotos} initialIndex={viewerIndex} isOpen={viewerOpen} onClose={closeViewer} />
      </div>
    </div>
  )
}
