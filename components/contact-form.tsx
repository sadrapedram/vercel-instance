"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Building, Mail, Phone, User, MessageSquare } from "lucide-react"

interface ContactFormProps {
  onClose: () => void
  onSuccess: () => void
}

export function ContactForm({ onClose, onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: "analytics",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    onSuccess()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-gray-900 border-gray-700 max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-sm">GH</span>
            </div>
            <span className="text-xl font-bold text-white">GameHouse</span>
          </div>
          <CardTitle className="text-2xl text-white">Get Elite Access</CardTitle>
          <CardDescription className="text-gray-300">
            Join the elite tier of sports analytics. Fill out the form below and our team will contact you within 24
            hours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black border-gray-600 text-white placeholder-gray-400"
                  placeholder="John Smith"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black border-gray-600 text-white placeholder-gray-400"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-300 flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  Organization *
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="bg-black border-gray-600 text-white placeholder-gray-400"
                  placeholder="Sports Analytics Corp"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-black border-gray-600 text-white placeholder-gray-400"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-gray-300">
                Service Interest *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-black border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
              >
                <option value="analytics">Performance Analytics</option>
                <option value="market">Market Analysis</option>
                <option value="predictive">Predictive Modeling</option>
                <option value="risk">Risk Assessment</option>
                <option value="consulting">Strategic Consulting</option>
                <option value="custom">Custom Solution</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                Project Details
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-black border-gray-600 text-white placeholder-gray-400 resize-none"
                placeholder="Tell us about your analytics needs, current challenges, and goals..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-black font-semibold py-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing...
                  </>
                ) : (
                  "Request Elite Access"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              >
                Cancel
              </Button>
            </div>

            <p className="text-xs text-gray-400 text-center">
              By submitting this form, you agree to our Terms of Service and Privacy Policy. We'll contact you within 24
              hours to discuss your analytics needs.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
