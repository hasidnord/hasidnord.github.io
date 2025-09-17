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
          title: "Main residence - Walkthrough",
          duration: "3:51",
          thumbnail: "/Thumbnail_Main_residence.webp?height=300&width=500",
          video: "/Main_Residence.mp4",
          description: "Complete tour of the main residence, situated on the south side of the property",
        },
        {
          title: "Apartment 1 - Walkthrough",
          duration: "2:07",
          thumbnail: "/Thumbnail_Apt_1.webp?height=300&width=500",
          video: "Apt1.mp4",
          description: "This 46 m² holiday apartment offers views on three sides.",
        },
        {
          title: "Apartment 2 - Walkthrough",
          duration: "2:56",
          thumbnail: "/Thumbnail_Apt_2.webp?height=300&width=500",
          video: "Apt2.mp4",
          description: "This 72 m² holiday apartment spreads on 2 floors with stunning views.",
        },
        {
          title: "Apartment 3 - Walkthrough",
          duration: "2:04",
          thumbnail: "/Thumbnail_Apt_3.webp?height=300&width=500",
          video: "Apt3.mp4",
          description: "This 60 m² holiday apartment offers a very spacious living room and views on three sides.",
        },
      ],
    },
    {
      title: "Outdoor areas",
      videos: [
        {
          title: "Swimming pool area - Walkthrough",
          duration: "1:15",
          thumbnail: "/Thumbnail_Pool_area.webp?height=300&width=500",
          video: "Pool_View.mp4",
          description: "A scenic walk around the pool",
        },
        {
          title: "Driveway and upper terraces - Walkthrough",
          duration: "1:37",
          thumbnail: "/Thumbnail_Driveway.webp?height=300&width=500",
          video: "Driveway_And_Upper_Terraces.mp4",
          description: "A tour of the driveway and upper terraces, showcasing the ample parking space and views.",
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
            Take a closer look at the villa with our video tours, capturing the charm of the main home, the (holiday) 
            apartments, and the beautiful outdoor spaces
          </p>
        </div>

        {/* Request a Virtual Tour section moved up, icon removed, margin reduced */}
        <div className="text-center mb-4 bg-white p-6 rounded-xl shadow-lg">
          <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">Request a Virtual Tour</h3>
          <p className="text-lg text-gray-600 mb-4">
            Can't visit in person? We can arrange a live virtual tour via video call at your convenience.
          </p>
          <button
            type="button"
            className="inline-flex items-center px-8 py-3 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-colors font-medium"
            onClick={() => {
              const subject = encodeURIComponent("Contact Form Message")
              const body = encodeURIComponent(
                `Name: \nPhone: \nMessage: I would like to request a virtual tour.`
              )
              window.location.href = `mailto:info@netsafety.dk?subject=${subject}&body=${body}`
            }}
          >
            Request Virtual Tour
          </button>
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
