"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, Mail, Phone, ArrowRight, X } from "lucide-react"

interface SuccessScreenProps {
  onClose: () => void
}

export function SuccessScreen({ onClose }: SuccessScreenProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-gray-900 border-gray-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="hexagon-pattern"></div>
        </div>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <CardHeader className="text-center pb-4 relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-black" />
            </div>
          </div>
          <CardTitle className="text-3xl text-white mb-2">Welcome to the Elite Tier!</CardTitle>
          <p className="text-gray-300 text-lg">
            Your request has been successfully submitted. You're now on the fast track to sports analytics dominance.
          </p>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="bg-gradient-to-r from-amber-600/10 to-amber-400/10 rounded-lg p-6 mb-6 border border-amber-600/20">
            <h3 className="text-xl font-semibold text-white mb-4">What happens next?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Elite Team Assignment</h4>
                  <p className="text-gray-300 text-sm">
                    Our senior analytics consultants will review your requirements within 2 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Strategic Consultation</h4>
                  <p className="text-gray-300 text-sm">
                    We'll contact you within 24 hours to schedule your personalized strategy session.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Custom Analytics Blueprint</h4>
                  <p className="text-gray-300 text-sm">
                    Receive a tailored analytics strategy designed for your specific goals and challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
              <Calendar className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white text-sm">Response Time</h4>
              <p className="text-gray-300 text-xs">{"< 24 hours"}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
              <Mail className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white text-sm">Confirmation Email</h4>
              <p className="text-gray-300 text-xs">Check your inbox</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
              <Phone className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <h4 className="font-semibold text-white text-sm">Direct Contact</h4>
              <p className="text-gray-300 text-xs">Priority support</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Reference ID:{" "}
              <span className="text-amber-400 font-mono">
                GH-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </span>
            </p>
            <Button onClick={onClose} className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-8">
              Continue Exploring
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
            <p className="text-gray-300 text-sm text-center">
              <strong className="text-white">Need immediate assistance?</strong>
              <br />
              Contact our elite support team at <span className="text-amber-400">elite@gamehouse.com</span> or{" "}
              <span className="text-amber-400">+1 (555) ELITE-GH</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
