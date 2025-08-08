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
        // Main living area 
        `<desc>
At the centre of the home is a custom-designed open kitchen, thoughtfully made with locally sourced materials, including a stone sink carved from a nearby quarry. Terracotta flooring runs throughout, adding warmth and an authentic Provençal touch.<br/>
<br/>
The living room is a standout feature, with an open fireplace, terracotta tiles, and double doors that lead directly to the terrace.<br/>
<br/>
Filled with natural light, it offers a versatile layout that includes:
</desc>`,
        "A spacious master bedroom with en-suite shower room and a large dressing area, which could also serve as an additional bedroom",
        "A generous office, easily adaptable as a double guest room",
        "Another double bedroom with its own en-suite shower and WC, and direct access to the terrace",
        "A separate laundry room and utility space",
        "Indoor staircase to wine cellar and upper floors",
      ],
      pdf: "/plan_ground_floor.pdf", // <-- Set your PDF filename here
    },
    {
      title: "First Floor - Apartments 1, 2 & 3",
      description: "Three independent apartments",
      image: "/plan_first_floor.jpg?height=600&width=800",
      area: "46+57+60m²",
      rooms: [
        // Apartment 1
        `<strong>Apartment 1 - 46m²":</strong>`,
        `<desc>
With its own private entrance, this stylish apartment has been thoughtfully renovated to combine comfort with contemporary design. It features elegant travertine floors throughout, sleek lines, and a modern aesthetic.
The layout includes:
</desc>`,
        "A double bedroom with an adjoining bathroom",
        "A cosy living area, ideal for relaxed everyday living or short-term stays",
        "A fully equipped kitchen",
        // Apartment 2
        `<strong>Apartment 2 - 57m² (+ 15 upstairs adding to 72m²):</strong>`,
        `<desc>
Beautifully renovated with attention to detail, this generous apartment boasts stunning views from the living area, which flows seamlessly into a fully equipped kitchen. There's ample space for a dining area as well as a comfortable lounge.<br/>
The apartment includes two double bedrooms:
</desc>`,
        "One on the first floor, with an adjacent shower room and WC",
        "Another upstairs, featuring its own en-suite bathroom",
        // Apartment 3
        `<strong>Apartment 3 - 60m²:</strong>`,
        `<desc>
With its own private entrance—yet easily connectable to the main house—this apartment is ideal for welcoming guests or generating income through seasonal rentals and offers:<br/>
</desc>`,
        "A bright and airy living room featuring an open fireplace and uninterrupted views",
        "A fully equipped kitchen with everything needed for comfortable living",
        "A double bedroom with its own en-suite bathroom",
      ],
      pdf: "/plan_first_floor.pdf",
    },
    {
      title: "Second Floor - Apartment 2",
      description: "Top floor of apartment B with panoramic views",
      image: "/plan_second_floor.jpg?height=600&width=800",
      area: "15m²",
      rooms: [
        `<desc>
This upper level of Apartment 2 offers a private retreat with a spacious bedroom, bathroom with a tub, and ample storage.<br/>
Large windows provide sweeping views of the surrounding landscape, making it a tranquil and light-filled space.
</desc>`,
        "Bedroom",
        "Bathroom with tub",
        "Storage",
      ],
      pdf: "/plan_second_floor.pdf",
    },
    {
      title: "Cellar Plan",
      description: "",
      image: "/plan_basement.jpg?height=600&width=800",
      area: "42m²",
      rooms: [
        `<desc>
      The property also includes a versatile basement area, ideal for use as a wine cellar, storage space, or both. Naturally cool and well-proportioned, it offers the perfect conditions for storing wine, preserves, or seasonal items, while still leaving ample room for practical household storage.<br/>
      <br/>
      Direct access from the main house makes it convenient for everyday use while keeping living areas clutter-free.
      </desc>`,
        "2 storage rooms",
      ],
      pdf: "/plan_basement.pdf",
    },
  ]

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-4">House Plans & Drawings</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed architectural plans of the villa, including all floors
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
                      className="relative aspect-[4/3] bg-white cursor-pointer"
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
            Download all technical drawings in one PDF package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/plans_of_the_villa.pdf"
              download
              className="inline-flex items-center px-8 py-3 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-colors font-medium"
            >
              <Download className="w-5 h-5 mr-2" />
              Download All Plans (PDF)
            </a>
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
