"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Car, Plane, Train, ShoppingBag, Utensils, Camera } from "lucide-react"

export default function MapPage() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-4">Location</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the privileged location of our villa in the heart of the Provence‑Alpes‑Côte d’Azur, close to Vence and all the
            emblematic sites of Provence
          </p>
        </div>

        {/* Map Embed */}
        <section className="mb-16">
          <Card className="shadow-lg rounded-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-terracotta flex items-center space-x-2">
                <MapPin className="w-6 h-6" />
                <span>227 Chem. du Baric, 06140 Vence</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.607592420321!2d7.103282575936741!3d43.718703371099096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd2a664d2cff9%3A0x23702ed28503b679!2sMaison%20de%20l&#39;Ara!5e0!3m2!1sda!2sit!4v1751541067658!5m2!1sda!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Villa location in Vence with nearby amenities"
                ></iframe>
              </div>
              
            </CardContent>
          </Card>
        </section>

        {/* Transportation */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-terracotta mb-8 text-center">Access & Transport</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg rounded-xl">
              <CardContent className="p-6 text-center">
                <Car className="w-8 h-8 text-terracotta mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-3">By Car</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Avignon: 45 min</li>
                  <li>Aix-en-Provence: 1h15</li>
                  <li>Marseille: 1h30</li>
                  <li>Lyon: 2h30</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl">
              <CardContent className="p-6 text-center">
                <Train className="w-8 h-8 text-terracotta mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-3">By Train</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Avignon TGV station: 45 min</li>
                  <li>Paris-Avignon: 2h40</li>
                  <li>Shuttle to Vence</li>
                  <li>Car rental available</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl">
              <CardContent className="p-6 text-center">
                <Plane className="w-8 h-8 text-terracotta mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-3">By Plane</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Marseille Airport: 1h15</li>
                  <li>Avignon Airport: 45 min</li>
                  <li>Lyon Airport: 2h30</li>
                  <li>Car rental recommended</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Amenities */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-terracotta mb-8 text-center">Amenities & Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-lg text-gray-800 flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-terracotta" />
                  <span>Shopping</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Vence supermarket: 5 min</li>
                  <li>• Artisan bakery: 3 min</li>
                  <li>• Pharmacy: 5 min</li>
                  <li>• Weekly market: Tuesday</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-lg text-gray-800 flex items-center space-x-2">
                  <Utensils className="w-5 h-5 text-terracotta" />
                  <span>Restaurants</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• La Bastide de Gordes: 8 min</li>
                  <li>• Le Carillon: 5 min</li>
                  <li>• Auberge de Carcarille: 10 min</li>
                  <li>• Many terraces: town center</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-lg text-gray-800 flex items-center space-x-2">
                  <Camera className="w-5 h-5 text-terracotta" />
                  <span>Attractions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Vence village: 5 min</li>
                  <li>• Sénanque Abbey: 15 min</li>
                  <li>• Roussillon: 20 min</li>
                  <li>• Fontaine-de-Vaucluse: 25 min</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-terracotta mb-8 text-center">
            Nearby Points of Interest
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-terracotta">Luberon Hilltop Villages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Vence (historic center)</span>
                    <span className="text-terracotta font-medium">5 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Roussillon (ochre cliffs)</span>
                    <span className="text-terracotta font-medium">20 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ménerbes</span>
                    <span className="text-terracotta font-medium">25 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Bonnieux</span>
                    <span className="text-terracotta font-medium">30 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lacoste</span>
                    <span className="text-terracotta font-medium">35 min</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-terracotta">Natural & Cultural Sites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Sénanque Abbey</span>
                    <span className="text-terracotta font-medium">15 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fontaine-de-Vaucluse</span>
                    <span className="text-terracotta font-medium">25 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Isle-sur-la-Sorgue</span>
                    <span className="text-terracotta font-medium">30 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Avignon (Papal Palace)</span>
                    <span className="text-terracotta font-medium">45 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Lavender fields</span>
                    <span className="text-terracotta font-medium">10 min</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">An ideal location to discover all the wonders of Provence</p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-terracotta text-white rounded-full hover:bg-terracotta/90 transition-colors font-medium"
          >
            Arrange a Visit
          </a>
        </div>
      </div>
    </div>
  )
}
