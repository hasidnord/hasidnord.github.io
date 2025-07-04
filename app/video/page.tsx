"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Camera } from "lucide-react"
import PhotoViewer from "@/components/photo-viewer"

export default function VideoPage() {
  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerPhotos, setViewerPhotos] = useState<Array<{ src: string; alt: string }>>([])
  const [viewerIndex, setViewerIndex] = useState(0)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [videoModalSrc, setVideoModalSrc] = useState<string | null>(null)

  const openViewer = (thumbnail: string, title: string) => {
    setViewerPhotos([{ src: thumbnail, alt: title }])
    setViewerIndex(0)
    setViewerOpen(true)
  }

  const closeViewer = () => {
    setViewerOpen(false)
  }

  const videoCategories = [
    {
      title: "Property Overview",
      videos: [
        {
          title: "Villa Tour - Complete Walkthrough",
          duration: "8:45",
          thumbnail: "/indkørsel.JPG?height=300&width=500",
          video: "/indkørsel.mp4",
          description: "Complete guided tour of the villa and grounds",
        },
        {
          title: "Aerial View - Drone Footage",
          duration: "3:20",
          thumbnail: "/placeholder.svg?height=300&width=500",
          video: "",
          description: "Stunning aerial views of the property and surroundings",
        },
      ],
    },
    {
      title: "Interior Spaces",
      videos: [
        {
          title: "Living Areas & Kitchen",
          duration: "4:15",
          thumbnail: "/placeholder.svg?height=300&width=500",
          video: "",
          description: "Detailed look at the main living spaces",
        },
        {
          title: "Bedrooms & Bathrooms",
          duration: "5:30",
          thumbnail: "/placeholder.svg?height=300&width=500",
          video: "",
          description: "Tour of all bedrooms and bathroom facilities",
        },
      ],
    },
    {
      title: "Apartments",
      videos: [
        {
          title: "Upper Floor Apartments Tour",
          duration: "6:10",
          thumbnail: "/placeholder.svg?height=300&width=500",
          video: "",
          description: "Complete tour of all three upper floor apartments",
        },
        {
          title: "Apartment Rental Potential",
          duration: "2:45",
          thumbnail: "/placeholder.svg?height=300&width=500",
          video: "",
          description: "Investment opportunities and rental potential",
        },
      ],
    },
    {
      title: "Outdoor Spaces",
      videos: [
        {
          title: "Garden & Pool Area",
          duration: "4:50",
          thumbnail: "/placeholder.svg?height=300&width=500",
          video: "",
          description: "Beautiful Mediterranean garden and swimming pool",
        },
        {
          title: "Sunset Views & Terraces",
          duration: "3:35",
          thumbnail: "/placeholder.svg?height=300&width=500",
          video: "",
          description: "Breathtaking sunset views from various terraces",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-4">Video Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the villa through our comprehensive video collection showcasing every detail of this exceptional
            property
          </p>
        </div>

        {videoCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className="font-playfair text-3xl font-bold text-terracotta mb-8 text-center">{category.title}</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {category.videos.map((video, videoIndex) => (
                <Card
                  key={videoIndex}
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-xl cursor-pointer group"
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden bg-gray-900" onClick={(e) => {
                      e.stopPropagation()
                      if (video.video) {
                        setVideoModalSrc(video.video)
                        setVideoModalOpen(true)
                      }
                    }}>
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-4 group-hover:bg-terracotta group-hover:text-white transition-colors duration-300">
                          <Play className="w-8 h-8 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-2">{video.title}</h3>
                      <p className="text-gray-600">{video.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center mt-16 bg-white p-8 rounded-xl shadow-lg">
          <Camera className="w-12 h-12 text-terracotta mx-auto mb-4" />
          <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">Request a Virtual Tour</h3>
          <p className="text-lg text-gray-600 mb-6">
            Can't visit in person? We can arrange a live virtual tour via video call at your convenience.
          </p>
          <a
            href="/contact?virtual=true"
            className="inline-flex items-center px-8 py-3 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-colors font-medium"
          >
            Schedule Virtual Tour
          </a>
        </div>
      </div>
      <PhotoViewer photos={viewerPhotos} initialIndex={viewerIndex} isOpen={viewerOpen} onClose={closeViewer} />

      {/* Video Modal */}
      {videoModalOpen && videoModalSrc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-2xl w-full relative flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-white bg-terracotta hover:bg-terracotta/90 rounded-full w-10 h-10 flex items-center justify-center text-2xl z-20 shadow-lg border-2 border-white focus:outline-none focus:ring-2 focus:ring-terracotta"
              onClick={() => { setVideoModalOpen(false); setVideoModalSrc(null); }}
              aria-label="Close video"
              style={{ transition: 'background 0.2s, color 0.2s' }}
            >
              &times;
            </button>
            <div className="w-full" style={{ aspectRatio: '16/9' }}>
              <video src={videoModalSrc} controls autoPlay className="w-full h-full rounded-lg object-contain bg-black" style={{ maxHeight: '70vh' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
