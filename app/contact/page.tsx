"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will contact you shortly.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We would be delighted to meet you and show you our villa. Please don't hesitate to contact us to arrange a
            visit or ask your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-terracotta mb-6">Our Contact Details</h2>
              <p className="text-lg text-gray-700 mb-8">
                Bent and Iwona Bjerre are available to answer all your questions and arrange visits by appointment.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-terracotta" />
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+33 6 80 40 91 01</p>
                      <p className="text-sm text-gray-500">Available 7 days a week, 9am to 7pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-terracotta" />
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@netsafety.dk</p>
                      <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-terracotta" />
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">227 Chem. du Baric</p>
                      <p className="text-gray-600">06140 Vence</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-terracotta" />
                    <div>
                      <h3 className="font-playfair text-lg font-semibold text-gray-800">Visits</h3>
                      <p className="text-gray-600">By appointment only</p>
                      <p className="text-sm text-gray-500">Monday to Sunday, 10am-6pm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-terracotta">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-lg"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-lg"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-lg"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="rounded-lg"
                      placeholder="Tell us about your project, your questions, or request a visit..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields. Your data is protected and will not be shared.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Send More Info Section */}
            <div className="mt-8 p-6 bg-terracotta/5 rounded-xl border border-terracotta/20">
              <h3 className="font-playfair text-xl font-semibold text-terracotta mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Request Additional Information
              </h3>
              <p className="text-gray-700 mb-4">
                Get our complete information package including detailed specifications, investment analysis, and rental
                potential reports.
              </p>
              <button className="w-full bg-terracotta hover:bg-terracotta/90 text-white py-3 rounded-lg font-medium transition-colors">
                Send More Info Package
              </button>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h3 className="font-playfair text-xl font-semibold text-terracotta mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span>Direct owners, no intermediary</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span>Personalized and detailed visits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span>Complete transparency about property condition</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span>Support until signing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
