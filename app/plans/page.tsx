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
      description: "Main living areas, kitchen, guest bedrooms and facilities - With indoor staircase to first floor apartments",
      image: "/plan_ground_floor.jpg?height=600&width=800",
      area: "141m²",
      rooms: [
        // Apartment A
        "<desc>Main living room with fireplace and direct access to the terrace. Spacious and bright, perfect for family gatherings and relaxation.</desc>",
        "Living room",
        "Kitchen",
        "3 Bedrooms",
        "Walk-in closet",
        "2 Bathrooms",
        "Laundry",
        "Facilities",
      ],
      pdf: "/plan_ground_floor.pdf", // <-- Set your PDF filename here
    },
    {
      title: "First Floor - Apartments A, B & C",
      description: "Three independent apartments",
      image: "/plan_first_floor_w_ABC.jpg?height=600&width=800",
      area: "85m²",
      rooms: [
        // Apartment A
        "<strong>Apartment A:</strong>",
        "- Living room",
        "- Kitchen",
        "- Bedroom",
        "- Bathroom with shower",
        // Apartment B
        "<strong>Apartment B:</strong>",
        "- Living with open kitchen",
        "- 1 Bedroom (+ one on second floor)",
        "- Bathroom",
        // Apartment C
        "<strong>Apartment C:</strong>",
        "- Bedroom/Living room",
        "- Kitchen",
        "- Bedroom",
        "- Bathroom",
      ],
      pdf: "/plan_first_floor.pdf",
    },
    {
      title: "Second Floor - Apartment B",
      description: "Top floor of apartment B with panoramic views",
      image: "/plan_second_floor.jpg?height=600&width=800",
      area: "55m²",
      rooms: ["Bedroom", "Bathroom", "Storage"],
      pdf: "/plan_second_floor.pdf",
    },
    {
      title: "Basement Plan",
      description: "",
      image: "/plan_basement.jpg?height=600&width=800",
      area: "62m²",
      rooms: ["2 storage rooms",],
      pdf: "/plan_basement.pdf",
    },
    {
      title: "Site Plan & Grounds",
      description: "Complete property layout with garden and pool",
      image: "/placeholder.svg?height=600&width=800",
      area: "1,000m²",
      rooms: ["Swimming pool 12x6m", "Pool house 15m²", "Garage 40m²", "Terraces", "Garden", "Parking"],
      pdf: "/plan_site.pdf",
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
              <div className="text-2xl font-playfair font-bold text-gray-800 mb-1">323m²</div>
              <p className="text-sm text-gray-600">Total Living Space</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg rounded-xl">
            <CardContent className="p-6">
              <Building className="w-8 h-8 text-terracotta mx-auto mb-3" />
              <div className="text-2xl font-playfair font-bold text-gray-800 mb-1">7</div>
              <p className="text-sm text-gray-600">Bedrooms - across ground floor living area and first floor independent apartments</p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg rounded-xl">
            <CardContent className="p-6">
              <Ruler className="w-8 h-8 text-terracotta mx-auto mb-3" />
              <div className="text-2xl font-playfair font-bold text-gray-800 mb-1">1,000m²</div>
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
                    {plan.pdf ? (
                      <a href={plan.pdf} download className="mt-2 flex items-center space-x-2 text-terracotta hover:text-terracotta/80 transition-colors">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">Download PDF</span>
                      </a>
                    ) : (
                      <button className="mt-2 flex items-center space-x-2 text-terracotta hover:text-terracotta/80 transition-colors" disabled>
                        <Download className="w-4 h-4" />
                        <span className="text-sm">Download PDF</span>
                      </button>
                    )}
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
                        room.startsWith("<desc>") ? (
                          <li key={roomIndex} className="pb-1"><span className="text-gray-700" dangerouslySetInnerHTML={{ __html: room.replace(/<\/?desc>/g, "") }} /></li>
                        ) : room.startsWith("<strong>") ? (
                          <li key={roomIndex} className="pt-2 pb-1"><span className="font-bold text-gray-800" dangerouslySetInnerHTML={{ __html: room.replace(/<\/?strong>/g, "") }} /></li>
                        ) : (
                          <li key={roomIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-terracotta rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{room.replace(/^- /, "")}</span>
                          </li>
                        )
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
