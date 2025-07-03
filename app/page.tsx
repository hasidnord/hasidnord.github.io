"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Heart } from "lucide-react"
import PhotoViewer from "@/components/photo-viewer"

export default function HomePage() {
  const [viewerOpen, setViewerOpen] = useState(false)
  const [viewerPhotos, setViewerPhotos] = useState<Array<{ src: string; alt: string }>>([])
  const [viewerIndex, setViewerIndex] = useState(0)

  const openViewer = (imageSrc: string, alt: string) => {
    setViewerPhotos([{ src: imageSrc, alt }])
    setViewerIndex(0)
    setViewerOpen(true)
  }

  const closeViewer = () => {
    setViewerOpen(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/panoramic-view.jpeg?height=1080&width=1920"
            alt="Provençal villa with panoramic views"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Provençal Villa</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">An exceptional residence in the heart of Provence</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3 rounded-full"
            >
              <Link href="/gallery">Discover the Villa</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-terracotta px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-terracotta px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/contact?info=true">Send More Info</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Price and Key Info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">A Unique Opportunity</h2>
            <div className="text-6xl font-playfair font-bold text-terracotta mb-6">€1.498,000</div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Character villa of 180m² living space on a 2,500m² plot with swimming pool and breathtaking views over the
              Provençal hills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-terracotta mb-2">180m²</div>
                <p className="text-gray-600">Living space</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-terracotta mb-2">5</div>
                <p className="text-gray-600">Bedrooms</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-playfair font-bold text-terracotta mb-2">2,500m²</div>
                <p className="text-gray-600">Landscaped grounds</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About the Owners */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are Bent and Iwona Bjerre, and this magnificent villa has been our refuge for 15 wonderful years.
                Every stone, every lavender in the garden tells our love story with Provence.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today, we wish to pass on this little paradise to a new family who will appreciate the beauty and
                serenity of this unique place.
              </p>
              <div className="flex items-center space-x-2 text-terracotta">
                <Heart className="w-5 h-5" />
                <span className="font-medium">With all our love, Bent & Iwona</span>
              </div>
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() =>
                openViewer("/bentogiwona.jpg?height=400&width=600", "Bent and Iwona Bjerre in front of their villa")
              }
            >
              <Image
                src="/bentogiwona.jpg?height=400&width=600"
                alt="Bent and Iwona Bjerre in front of their villa"
                width={600}
                height={400}
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-8">
            We would be delighted to show you our villa and answer all your questions.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-terracotta mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+33 6 80 40 91 01</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-terracotta mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@netsafety.dk</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-terracotta mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Vence, Provence‑Alpes‑Côte d’Azur</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3 rounded-full"
            >
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
      <PhotoViewer photos={viewerPhotos} initialIndex={viewerIndex} isOpen={viewerOpen} onClose={closeViewer} />
    </div>
  )
}
