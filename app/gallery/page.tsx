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
        { src: "/facade.jpg?height=400&width=600", alt: "Facade of the villa from the poolside" },
        { src: "/exterior2_lawn.jpg?height=400&width=600", alt: "Mediterranean garden with flowers" },
        { src: "/exterior1_poolfacade.jpg?height=400&width=600", alt: "Swimming pool with panoramic view" },
        { src: "/exterior4_terrace.jpg?height=400&width=600", alt: "Terrace with electric awning" },
      ],
    },
    {
      title: "Main residence",
      images: [
        { src: "/main1_livingroom.jpg?height=400&width=600", alt: "Main living room with fireplace" },
        { src: "/main2_hall.jpg?height=400&width=600", alt: "Open layout kitchen and dining room" },
        { src: "/main3_kitchen.jpg?height=400&width=600", alt: "Equipped kitchen" },
        { src: "/main4_office.jpg?height=400&width=600", alt: "Office (or bedroom) with garden view" },
        { src: "/main5_bedroom.jpg?height=400&width=600", alt: "Master bedroom with walk-in closet" },
        { src: "/main6_terrace_room.jpg?height=400&width=600", alt: "Guest bedroom with bbq-terrace and bathroom" },
        { src: "/main7_toilet.jpg?height=400&width=600", alt: "Main bathroom" },
        { src: "/main8_shower.jpg?height=400&width=600", alt: "Shower in main bathroom" },
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
        { src: "/app2_4.jpg?height=400&width=600", alt: "Apartment 2 top floor bedroom" },
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
        { src: "/view1.jpg?height=400&width=600", alt: "Panoramic view" },
        { src: "/view2.jpg?height=400&width=600", alt: "Sunset over the hills" },
        { src: "/view3.jpg?height=400&width=600", alt: "View from the house" },
        { src: "/view4.jpg?height=400&width=600", alt: "View from the pool" },
      ],
    },
    {
      title: "Driveway and upper terraces",
      images: [
         { src: "/Top1.jpg?height=400&width=600", alt: "Top terrace outside the (holiday) apartments" },
        { src: "/Top2.jpg?height=400&width=600", alt: "Top terrace with views" },
        { src: "/Top3.jpg?height=400&width=600", alt: "House seen from driveway" },
        { src: "/Top4.jpg?height=400&width=600", alt: "Driveway with lots of parking space" },
      ],
    },
  ]

  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerPhotos, setViewerPhotos] = useState<Array<{ src: string; alt: string }>>([])
  const [viewerIndex, setViewerIndex] = useState(0)

  // For single-photo viewer navigation
  const [singlePhotoIndex, setSinglePhotoIndex] = useState(0)
  const allPhotos = galleryCategories.flatMap(cat => cat.images)

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
        <div className="text-center mb-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-2">Photo Gallery</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-2">
              With a total of 323 square meters of living space, the property includes the main residence and three (holiday) apartments. Built on a hillside, the villa offers ground-level access to both the main home and the apartments—each with its own private entrance on opposite sides. The apartments can also be accessed internally from the main residence, making the layout flexible. 
              <span className="block mt-2 text-base md:text-lg text-gray-700">
                <span className="italic">View all photos in one go below or explore the complexity of the villa one section at a time by scrolling down.</span> And don´t miss <a href="/video" className="text-terracotta underline">the walkthrough videos</a>.
              </span>
          </p>
        </div>

        {/* Single-photo viewer without white background */}
        <section className="mb-6">
          <div className="flex flex-col items-center mb-4">
            <div className="relative w-full max-w-md aspect-[4/3] mb-4 flex items-center justify-center">
              {/* Left arrow */}
              <button
                className="absolute left-2 z-10 bg-terracotta text-white rounded-full p-2 shadow hover:bg-terracotta/90 text-2xl font-bold"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                onClick={() => setSinglePhotoIndex((prev) => (prev === 0 ? allPhotos.length - 1 : prev - 1))}
                aria-label="Previous photo"
              >
                {'<'}
              </button>
              {/* Photo with fullscreen icon overlay */}
              <div className="relative w-full h-full cursor-pointer" onClick={() => openViewer(allPhotos, singlePhotoIndex)}>
                <Image
                  src={allPhotos[singlePhotoIndex].src}
                  alt={allPhotos[singlePhotoIndex].alt}
                  fill
                  className="object-cover rounded-lg shadow"
                />
                {/* Fullscreen icon */}
                <span className="absolute bottom-3 right-3 bg-black/60 text-white rounded-full p-2 flex items-center justify-center" style={{ pointerEvents: 'none' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M8 21H5a2 2 0 0 1-2-2v-3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
                </span>
              </div>
              {/* Right arrow */}
              <button
                className="absolute right-2 z-10 bg-terracotta text-white rounded-full p-2 shadow hover:bg-terracotta/90 text-2xl font-bold"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
                onClick={() => setSinglePhotoIndex((prev) => (prev === allPhotos.length - 1 ? 0 : prev + 1))}
                aria-label="Next photo"
              >
                {'>'}
              </button>
            </div>
            <div className="text-center text-gray-700 mt-2">
              {allPhotos[singlePhotoIndex].alt}
            </div>
          </div>
        </section>

        {/* First section of 4 photos above the line */}
        <section className="mb-12">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-terracotta mb-6 text-center">Exterior & Garden</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryCategories[0].images.map((image, imageIndex) => (
              <Card
                key={imageIndex}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-xl cursor-pointer"
                onClick={() => openViewer(galleryCategories[0].images, imageIndex)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-gray-700 text-center text-sm md:text-base">{image.alt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Remaining gallery sections below the line */}
        <hr className="my-12 border-gray-300" />
        {galleryCategories.slice(1).map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-terracotta mb-6 text-center">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {category.images.map((image, imageIndex) => (
                <Card
                  key={imageIndex}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-xl cursor-pointer"
                  onClick={() => openViewer(category.images, imageIndex)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-gray-700 text-center text-sm md:text-base">{image.alt}</p>
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
