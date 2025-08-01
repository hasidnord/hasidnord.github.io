import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Bed, Bath, Car, Ruler, TreePine } from "lucide-react"

export default function DescriptionPage() {
  const features = [
    { icon: Home, label: "Living space", value: "323 m²" },
    { icon: Bed, label: "Bedrooms", value: "7" },
    { icon: Bath, label: "Bathrooms", value: "6" },
    { icon: Car, label: "Parking", value: "4-6 cars" },
    { icon: Ruler, label: "Land", value: "1,000 m²" },
    { icon: TreePine, label: "Swimming pool", value: "12x6m" },
  ]

  const technicalDetails = [
    { label: "Year built", value: "1975" },
    { label: "Last renovation", value: "2024" },
    { label: "Energy rating", value: "C" },
    { label: "GHG emissions", value: "B" },
    { label: "Heating and cooling", value: "Heat pump and air conditioning system" },
    { label: "Insulation", value: "Renovated in 2004" },
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
                  This magnificent Provençal villa of 323m² living space will seduce you with its authentic charm and
                  quality features. Built in 1975 and completely renovated in 2004, with aircon installed in 2024, it perfectly combines Provençal
                  tradition and modern comfort.
                </p>
                <p>
                  The property consists of ground floor living areas with spacious living room with fireplace, an equipped kitchen open to the
                  dining room, 3 bedrooms and 2 bathrooms. On first floor and second floor, with breathtaking views, are 3 independent apartments, each with own living room, kitchen and bedrooms. Suitable for a high-yield rental property, an extended residence or a flexible combination of both.              </p>
                <p>
                  The landscaped grounds of 1,000m² offer numerous relaxation areas: shaded terraces, Mediterranean
                  garden with palm trees and bougainville, and a superb 12x6m swimming pool with panoramic views.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-playfair text-3xl font-bold text-terracotta mb-6">Property Assets</h2>
              <div className="space-y-3">
                {[
                  "Breathtaking panoramic views over the hills",
                  "South-facing with exceptional brightness",
                  "Noble materials: stone, terracotta tiles",

                  "Flat, ample parking on the property",
                  "Automatic irrigation system",
                  "Three independent apartments - ideal for steady rental income",
                  "Flexible layout with the potential to be merged into a generous family home",
                  "Sought-after location in one of the most desirable areas of the region",
                  "Centrally yet quietly situated, within walking distance to restaurants and supermarkets",
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
                    <div className="text-sm text-gray-500">132 kWh/m²/year</div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">GHG emissions</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Class B
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">4 kg CO2/m²/year</div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600">
                      Energy assessment carried out in 2023. Thermal insulation redone in 2004.
                    </p>
                  </div>

                  {/* Environmental Risk Assessment */}
                  <div className="pt-4 border-t border-gray-100">
                    <CardTitle className="font-playfair text-xl text-gray-800 mb-2">Public Environmental Risk Information</CardTitle>
                    <p className="text-sm text-gray-600 mb-2">
                      Like all properties in France, this home is subject to an environmental risk assessment via the official <strong>Géorisques</strong> portal.
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      This government resource provides details on any natural risks (such as flooding, ground movement, forest fire exposure, or radon levels) as well as technical or soil-related risks (like nearby industrial activity or land pollution), depending on the property's location.
                    </p>
                    <p className="text-sm text-gray-600">
                      You can consult the full report for this property at:<br/>
                      <a href="https://www.georisques.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-terracotta underline">www.georisques.gouv.fr</a>
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
                  "Living room",
                  "Kitchen",
                  "3 Bedrooms",
                  "Walk-in closet",
                  "2 Bathrooms",
                  "Laundry room",
                  "Technic room",
                ],
              },
              {
                title: "Basement",
                rooms: [
                  "Wine cellar and storage room",
                ],
              },
              {
                title: "Exterior",
                rooms: [
                  "Terrace with electrical awning",
                  "Swimming pool",
                  "Pool house 15m²",
                  "Garage 40m²",
                  "Landscaped garden",
                  "Parking 4-6 spaces",
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Apartment A",
                rooms: [
                  "Living room",
                  "Kitchen",
                  "Bedroom",
                  "Bathroom with shower",
                ],
              },
              {
                title: "Apartment B",
                rooms: [
                  "Living room with open kitchen",
                  "1 bedroom on first floor",
                  "1 Bedroom on second flor",
                  "1 Bathroom with shower on first floor",
                  "1 Bathroom with bathtub on second floor",
                  "Storage room on second floor",
                ],
              },
              {
                title: "Apartment C",
                rooms: [
                  "Living room",
                  "Kitchen",
                  "Bedroom",
                  "Bathroom",
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
