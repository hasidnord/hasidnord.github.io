"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Ruler, Home, Building } from "lucide-react"
import PhotoViewer from "@/components/photo-viewer"

export default function PlansPage() {
  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerPhotos, setViewerPhotos] = useState<Array<{ src: string; alt: string }>>([])
  const [viewerIndex, setViewerIndex] = useState(0)

  const openViewer = (imageSrc: string, title: string) => {
    setViewerPhotos([{ src: imageSrc, alt: title }])
    setViewerIndex(0)
    setViewerOpen(true)
  }

  const closeViewer = () => {
    setViewerOpen(false)
  }

  const floorPlans = [
    {
      title: "Ground Floor Plan",
      description: "Main living areas, kitchen, guest bedroom and facilities",
      image: "/placeholder.svg?height=600&width=800",
      area: "95m²",
      rooms: ["Living room 45m²", "Kitchen 20m²", "Bedroom 15m²", "Bathroom", "WC", "Laundry"],
    },
    {
      title: "Upper Floor - Main House",
      description: "Master suite and additional bedrooms",
      image: "/placeholder.svg?height=600&width=800",
      area: "85m²",
      rooms: ["Master suite 25m²", "Bedroom 18m²", "Bedroom 16m²", "Bedroom 14m²", "2 Bathrooms"],
    },
    {
      title: "Upper Floor - Apartment A",
      description: "Independent apartment in east wing",
      image: "/placeholder.svg?height=600&width=800",
      area: "55m²",
      rooms: ["Living area 35m²", "Kitchenette 12m²", "Bedroom 20m²", "Bathroom", "Balcony 8m²"],
    },
    {
      title: "Upper Floor - Apartment B",
      description: "Independent apartment in west wing",
      image: "/placeholder.svg?height=600&width=800",
      area: "62m²",
      rooms: ["Living area 40m²", "Kitchen 15m²", "Bedroom 22m²", "Bathroom", "Terrace 12m²"],
    },
    {
      title: "Upper Floor - Apartment C",
      description: "Independent apartment in south wing",
      image: "/placeholder.svg?height=600&width=800",
      area: "58m²",
      rooms: ["Living area 38m²", "Kitchen 14m²", "Bedroom 18m²", "Bathroom", "Terrace 15m²"],
    },
    {
      title: "Site Plan & Grounds",
      description: "Complete property layout with garden and pool",
      image: "/placeholder.svg?height=600&width=800",
      area: "2,500m²",
      rooms: ["Swimming pool 12x6m", "Pool house 15m²", "Garage 40m²", "Terraces", "Garden", "Parking"],
    },
  ]

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-4">House Plans & Drawings</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed architectural plans and technical drawings of the villa, including all floors and outdoor spaces
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center shadow-lg rounded-xl">
            <CardContent className="p-6">
              <Home className="w-8 h-8 text-terracotta mx-auto mb-3" />
              <div className="text-2xl font-playfair font-bold text-gray-800 mb-1">180m²</div>
              <p className="text-sm text-gray-600">Total Living Space</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg rounded-xl">
            <CardContent className="p-6">
              <Building className="w-8 h-8 text-terracotta mx-auto mb-3" />
              <div className="text-2xl font-playfair font-bold text-gray-800 mb-1">3</div>
              <p className="text-sm text-gray-600">Independent Apartments</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg rounded-xl">
            <CardContent className="p-6">
              <Ruler className="w-8 h-8 text-terracotta mx-auto mb-3" />
              <div className="text-2xl font-playfair font-bold text-gray-800 mb-1">2,500m²</div>
              <p className="text-sm text-gray-600">Total Plot Size</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg rounded-xl">
            <CardContent className="p-6">
              <Download className="w-8 h-8 text-terracotta mx-auto mb-3" />
              <div className="text-2xl font-playfair font-bold text-gray-800 mb-1">PDF</div>
              <p className="text-sm text-gray-600">Downloadable Plans</p>
            </CardContent>
          </Card>
        </div>

        {/* Floor Plans */}
        <div className="space-y-12">
          {floorPlans.map((plan, index) => (
            <Card key={index} className="shadow-lg rounded-xl overflow-hidden">
              <CardHeader className="bg-cream">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="font-playfair text-2xl text-terracotta mb-2">{plan.title}</CardTitle>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="text-2xl font-playfair font-bold text-terracotta">{plan.area}</div>
                    <button className="mt-2 flex items-center space-x-2 text-terracotta hover:text-terracotta/80 transition-colors">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">Download PDF</span>
                    </button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2">
                    <div
                      className="relative aspect-[4/3] bg-gray-100 cursor-pointer"
                      onClick={() => openViewer(plan.image, plan.title)}
                    >
                      <Image
                        src={plan.image || "/placeholder.svg"}
                        alt={plan.title}
                        fill
                        className="object-contain p-4 hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="p-6 bg-gray-50">
                    <h4 className="font-playfair text-lg font-semibold text-gray-800 mb-4">Room Details</h4>
                    <ul className="space-y-2">
                      {plan.rooms.map((room, roomIndex) => (
                        <li key={roomIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-terracotta rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{room}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download All Plans */}
        <div className="text-center mt-16 bg-cream p-8 rounded-xl">
          <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">Complete Plan Package</h3>
          <p className="text-lg text-gray-600 mb-6">
            Download all architectural plans, technical drawings, and specifications in one comprehensive PDF package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-colors font-medium">
              <Download className="w-5 h-5 mr-2" />
              Download All Plans (PDF)
            </button>
            <a
              href="/contact?plans=true"
              className="inline-flex items-center px-8 py-3 border-2 border-terracotta text-terracotta rounded-full hover:bg-terracotta hover:text-white transition-colors font-medium"
            >
              Request Technical Specifications
            </a>
          </div>
        </div>
      </div>
      <PhotoViewer photos={viewerPhotos} initialIndex={viewerIndex} isOpen={viewerOpen} onClose={closeViewer} />
    </div>
  )
}
