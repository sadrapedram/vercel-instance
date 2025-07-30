"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BarChart3, Globe, TrendingUp, Zap, Shield, Target, ArrowRight, Play } from "lucide-react"
import { ContactForm as ContactFormAlias } from "@/components/contact-form"
import { SuccessScreen as SuccessScreenAlias } from "@/components/success-screen"

export default function GameHousePage() {
  const [showForm, setShowForm] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-sm">GH</span>
            </div>
            <span className="text-xl font-bold">GameHouse</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => setShowForm(true)} className="text-gray-300 hover:text-white transition-colors">
              Analytics
            </button>
            <button onClick={() => setShowForm(true)} className="text-gray-300 hover:text-white transition-colors">
              Services
            </button>
            <button onClick={() => setShowForm(true)} className="text-gray-300 hover:text-white transition-colors">
              Insights
            </button>
            <button onClick={() => setShowForm(true)} className="text-gray-300 hover:text-white transition-colors">
              Contact
            </button>
          </nav>
          <Button
            onClick={() => setShowForm(true)}
            className="bg-amber-600 hover:bg-amber-700 text-black font-semibold"
          >
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Hexagon Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black opacity-90"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="hexagon-pattern"></div>
          </div>
          {/* Additional geometric elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-amber-600/20 rotate-45 rounded-lg"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border border-amber-600/30 rotate-12 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-amber-400/40 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-400/60 rounded-full animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-amber-400 mr-2" />
              <span className="text-sm text-gray-300">Powering Global Sports Intelligence</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Dominate Through
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Data Mastery
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              GameHouse delivers unparalleled sports analytics that transform raw data into competitive advantage. Where
              precision meets power in international sports intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setShowForm(true)}
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-8 py-4 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Experience the Power
              </Button>
              <Button
                onClick={() => setShowForm(true)}
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg bg-transparent backdrop-blur-sm"
              >
                View Analytics Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black border-y border-gray-800 relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid-pattern"></div>
        </div>
        {/* Floating geometric elements */}
        <div className="absolute top-8 left-1/4 w-16 h-16 border border-amber-600/20 rotate-45"></div>
        <div className="absolute bottom-8 right-1/4 w-12 h-12 border border-amber-600/30 rotate-12 rounded-full"></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">150+</div>
              <div className="text-gray-300">Countries Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">50M+</div>
              <div className="text-gray-300">Data Points Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-gray-300">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="analytics" className="py-24 bg-black relative overflow-hidden">
        {/* Diamond Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="diamond-pattern"></div>
        </div>
        {/* Scattered geometric elements */}
        <div className="absolute top-16 right-20 w-8 h-8 bg-amber-600/10 rotate-45"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 border border-amber-600/20 rotate-45"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-amber-400/20 rounded-full"></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Precision-Engineered
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Analytics Suite
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our advanced analytics platform processes millions of data points to deliver insights that drive victory.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-amber-600/50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-white text-xl">Performance Intelligence</CardTitle>
                <CardDescription className="text-gray-400">
                  Deep-dive analytics revealing hidden patterns in athlete and team performance across all major sports.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-amber-600/50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-white text-xl">Global Market Analysis</CardTitle>
                <CardDescription className="text-gray-400">
                  Comprehensive international sports market intelligence spanning 150+ countries and territories.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-amber-600/50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-white text-xl">Predictive Modeling</CardTitle>
                <CardDescription className="text-gray-400">
                  AI-powered forecasting models that predict outcomes with unprecedented accuracy and reliability.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Elite-Level
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Strategic Services
                </span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Risk Assessment & Mitigation</h3>
                    <p className="text-gray-300">
                      Advanced risk modeling for investments, sponsorships, and strategic partnerships in the sports
                      industry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Precision Targeting</h3>
                    <p className="text-gray-300">
                      Identify high-value opportunities and optimize resource allocation with surgical precision.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time Intelligence</h3>
                    <p className="text-gray-300">
                      Lightning-fast data processing and insights delivery when every second counts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Dominate?</h3>
                <p className="text-gray-300">
                  Join the elite tier of sports analytics. Get exclusive access to our premium intelligence platform.
                </p>
              </div>
              <div className="space-y-4">
                <Input
                  placeholder="Your email address"
                  className="bg-black border-gray-600 text-white placeholder-gray-400"
                />
                <Input
                  placeholder="Organization name"
                  className="bg-black border-gray-600 text-white placeholder-gray-400"
                />
                <Button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold py-3"
                >
                  Request Elite Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-black via-gray-900 to-black border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The Future of Sports
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Intelligence is Here
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Don't just compete. Dominate. Transform your sports organization with the most advanced analytics platform
            on the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setShowForm(true)}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-8 py-4 text-lg"
            >
              Schedule Elite Consultation
            </Button>
            <Button
              onClick={() => setShowForm(true)}
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-sm flex items-center justify-center">
                  <span className="text-black font-bold text-sm">GH</span>
                </div>
                <span className="text-xl font-bold">GameHouse</span>
              </div>
              <p className="text-gray-400 mb-4">
                Powering the future of international sports analytics with precision, intelligence, and unmatched
                expertise.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Analytics</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    Performance Intelligence
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    Market Analysis
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    Predictive Modeling
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    Risk Assessment
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    Consulting
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    Custom Analytics
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    API Access
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    Training
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    Careers
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    Press
                  </button>
                </li>
                <li>
                  <button onClick={() => setShowForm(true)} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} GameHouse Analytics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => setShowForm(true)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Security
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showForm && !showSuccess && (
        <ContactFormAlias
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false)
            setShowSuccess(true)
          }}
        />
      )}

      {/* Success Screen Modal */}
      {showSuccess && <SuccessScreenAlias onClose={() => setShowSuccess(false)} />}
    </div>
  )
}
