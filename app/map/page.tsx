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
           Nestled in the hills above the French Riviera, Vence captures the essence of 
           Provençal charm and Côte d’Azur elegance. With its cobblestone streets, cute squares, and 
           medieval walls, this vibrant town offers a blend of culture, nature, and authenticity.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
          Just a 15-minute stroll from our doorstep lies the enchanting historic centre – a lively hub brimming 
          with artisan boutiques, open-air cafés, and weekly markets. Whether you're sipping a glass of rosé on 
          a terrace or enjoying a scenic hike in the surrounding hills, Vence offers a lifestyle that is both 
          refined and relaxed.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
          Here, you’re not just buying a home – you’re embracing a way of life where the light is golden, the air 
          is fresh, and the pace is beautifully unhurried.
          </p>
        </div>

        {/* Map Embed */}
        <section className="mb-16">
          <Card className="shadow-lg rounded-xl overflow-hidden">
            <CardHeader>
              <CardTitle className="font-playfair text-2xl text-terracotta flex items-center space-x-2">
                <MapPin className="w-6 h-6" />
                <span>227 Chemin du Baric, 06140 Vence, France</span>
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
                  <li>Nice city center: 30 min (24 km)</li>
                  <li>Antibes: 35 min (28 km)</li>
                  <li>Cannes: 45 min (40 km)</li>
                  <li>Monaco: 50 min (45 km)</li>
                  <li>Direct access via A8 motorway (exit 48 Cagnes-sur-Mer)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl">
              <CardContent className="p-6 text-center">
                <Train className="w-8 h-8 text-terracotta mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-3">By Public transport</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Bus 400 from Nice Airport to Vence: approx. 55 min</li>
                  <li>Frequent departures, direct connection</li>
                  <li>Cagnes-sur-Mer SNCF station: 20 min (13 km)</li>
                  <li>Direct TGV from Paris to Nice: 5h45</li>
               
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl">
              <CardContent className="p-6 text-center">
                <Plane className="w-8 h-8 text-terracotta mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-3">By Plane</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Nice Côte d'Azur International Airport: 20 min (16 km)</li>
                  <li>Direct flights to most European capitals</li>
                  <li>Taxi or car rental at airport</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Local Amenities */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-terracotta mb-8 text-center">Amenities & Services in walking distance</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-lg text-gray-800 flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-terracotta" />
                  <span>Shopping - a 10 min. walk to:</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Vence supermarket</li>
                  <li>• Artisan bakery</li>
                  <li>• Pharmacy</li>
                  <li>• Weekly market: Tuesday</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-lg text-gray-800 flex items-center space-x-2">
                  <Utensils className="w-5 h-5 text-terracotta" />
                  <span>Restaurants - a 15 min. walk to:</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• L’Auberge des Seigneurs</li>
                  <li>• L’Ambroisy</li>
                  <li>• La Table de Domi</li>
                  <li>• ...and many more</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-lg text-gray-800 flex items-center space-x-2">
                  <Camera className="w-5 h-5 text-terracotta" />
                  <span>Attractions - a 15-25 min walk to:</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Vence Cathédrale de la Nativité)</li>
                  <li>• Musée de Vence – Château de Villeneuve</li>
                  <li>• Chapelle du Rosaire (Matisse‑Chapel)</li>
                  <li>• Fontaine du Peyra</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-terracotta mb-8 text-center">
            Nearby Points of Interest - by car
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-terracotta">Charming nearby Hilltop Villages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>Saint-Paul-de-Vence</span>
                    <span className="text-terracotta font-medium">10 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tourrettes-sur-Loup</span>
                    <span className="text-terracotta font-medium">15 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Le Haut-de-Cagnes</span>
                    <span className="text-terracotta font-medium">20 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Le Bar-sur-Loup</span>
                    <span className="text-terracotta font-medium">30 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gourdon</span>
                    <span className="text-terracotta font-medium">45 min</span>
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
                    <span>Fondation Maeght</span>
                    <span className="text-terracotta font-medium">15 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gorges du Loup</span>
                    <span className="text-terracotta font-medium">25 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cagnes-sur-Mer Beach</span>
                    <span className="text-terracotta font-medium">25 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Promenade des Anglais, Nice</span>
                    <span className="text-terracotta font-medium">40 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Boulevard de la Croisette, Cannes</span>
                    <span className="text-terracotta font-medium">50 min</span>
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
            Request a Visit
          </a>
        </div>
      </div>
    </div>
  )
}
