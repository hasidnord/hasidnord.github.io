import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Bed, Bath, Car, Ruler, TreePine } from "lucide-react"

export default function DescriptionPage() {
  const features = [
    { icon: Home, label: "Living space", value: "180 m²" },
    { icon: Bed, label: "Bedrooms", value: "5" },
    { icon: Bath, label: "Bathrooms", value: "3" },
    { icon: Car, label: "Garage", value: "2 cars" },
    { icon: Ruler, label: "Land", value: "2,500 m²" },
    { icon: TreePine, label: "Swimming pool", value: "12x6m" },
  ]

  const technicalDetails = [
    { label: "Year built", value: "1995" },
    { label: "Last renovation", value: "2018" },
    { label: "Energy rating", value: "C" },
    { label: "GHG emissions", value: "B" },
    { label: "Heating", value: "Heat pump + Fireplace" },
    { label: "Insulation", value: "Renovated in 2018" },
  ]

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-4">Detailed Description</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the details of this exceptional Provençal villa, its technical characteristics and numerous
            assets
          </p>
        </div>

        {/* Main Features */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-terracotta mb-8 text-center">Main Characteristics</h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center shadow-lg rounded-xl">
                  <CardContent className="p-6">
                    <Icon className="w-8 h-8 text-terracotta mx-auto mb-3" />
                    <div className="text-2xl font-playfair font-bold text-gray-800 mb-1">{feature.value}</div>
                    <p className="text-sm text-gray-600">{feature.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Detailed Description */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-terracotta mb-6">General Description</h2>
              <div className="prose prose-lg text-gray-700 space-y-4">
                <p>
                  This magnificent Provençal villa of 180m² living space will seduce you with its authentic charm and
                  quality features. Built in 1995 and completely renovated in 2018, it perfectly combines Provençal
                  tradition and modern comfort.
                </p>
                <p>
                  The property consists of a spacious 45m² living room with fireplace, an equipped kitchen open to the
                  dining room, 5 bedrooms including a master suite with private terrace, and 3 bathrooms.
                </p>
                <p>
                  The landscaped grounds of 2,500m² offer numerous relaxation areas: shaded terraces, Mediterranean
                  garden with olive trees and lavender, and a superb 12x6m swimming pool with panoramic views.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-playfair text-3xl font-bold text-terracotta mb-6">Property Assets</h2>
              <div className="space-y-3">
                {[
                  "Breathtaking panoramic views over the hills",
                  "South-facing with exceptional brightness",
                  "Noble materials: stone, terracotta tiles, exposed beams",
                  "Heated swimming pool with pool house",
                  "Double garage + parking spaces",
                  "Automatic irrigation system",
                  "Electric gate and video intercom",
                  "Close to amenities and Vence village",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-terracotta rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-terracotta mb-8 text-center">Technical Information</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-gray-800">Technical Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {technicalDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="text-gray-600">{detail.label}</span>
                      <span className="font-medium text-gray-800">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-gray-800">Energy Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Energy consumption</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Class C
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">145 kWh/m²/year</div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">GHG emissions</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Class B
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">28 kg CO2/m²/year</div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      Energy assessment carried out in 2023. Thermal insulation redone in 2018.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Room Details */}
        <section>
          <h2 className="font-playfair text-3xl font-bold text-terracotta mb-8 text-center">Room Layout</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Ground Floor",
                rooms: [
                  "Living room 45m²",
                  "Equipped kitchen 20m²",
                  "Bedroom 15m²",
                  "Bathroom",
                  "Guest WC",
                  "Laundry room",
                ],
              },
              {
                title: "Upper Floor - Main House",
                rooms: [
                  "Master suite 25m²",
                  "Private terrace 15m²",
                  "Bedroom 18m²",
                  "Bedroom 16m²",
                  "Bedroom 14m²",
                  "Bathroom",
                  "Shower room",
                ],
              },
              {
                title: "Exterior",
                rooms: [
                  "Covered terrace 30m²",
                  "Swimming pool 12x6m",
                  "Pool house 15m²",
                  "Garage 40m²",
                  "Landscaped garden",
                  "Parking 4 spaces",
                ],
              },
            ].map((floor, index) => (
              <Card key={index} className="shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-terracotta">{floor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {floor.rooms.map((room, roomIndex) => (
                      <li key={roomIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-terracotta rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{room}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upper Floor Apartments */}
          <h3 className="font-playfair text-2xl font-bold text-terracotta mb-8 text-center">Upper Floor Apartments</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Apartment A - East Wing",
                rooms: [
                  "Living area 35m²",
                  "Kitchenette 12m²",
                  "Bedroom 20m²",
                  "Bathroom with shower",
                  "Private balcony 8m²",
                  "Storage space",
                ],
              },
              {
                title: "Apartment B - West Wing",
                rooms: [
                  "Living area 40m²",
                  "Equipped kitchen 15m²",
                  "Bedroom 22m²",
                  "Bathroom with bathtub",
                  "Terrace 12m²",
                  "Walk-in closet",
                ],
              },
              {
                title: "Apartment C - South Wing",
                rooms: [
                  "Living area 38m²",
                  "Kitchen 14m²",
                  "Bedroom 18m²",
                  "Bathroom",
                  "Panoramic terrace 15m²",
                  "Utility room",
                ],
              },
            ].map((apartment, index) => (
              <Card key={index} className="shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle className="font-playfair text-lg text-terracotta">{apartment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {apartment.rooms.map((room, roomIndex) => (
                      <li key={roomIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-terracotta rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{room}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
