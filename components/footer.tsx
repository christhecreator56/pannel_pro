"use client"

import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <img src="/images/panel-pro-logo-white.png" alt="Panel Pro Logo" className="h-10 sm:h-12 w-auto" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-center sm:text-left">
              Leading AI-powered car damage assessment platform providing instant, accurate analysis for body repair
              shops and automotive professionals.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white text-center sm:text-left">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm text-center sm:text-left">
                  <p>78/34A, Ground Floor</p>
                  <p>Real Diamond Building, 32 Mount Road</p>
                  <p>Guindy, Chennai, Tamil Nadu 600032</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+919176661178" className="text-gray-300 text-sm hover:text-white transition-colors touch-manipulation">
                  +91 91766 61178
                </a>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:support@panelpro.ai"
                  className="text-gray-300 text-sm hover:text-white transition-colors touch-manipulation"
                >
                  support@panelpro.ai
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white text-center sm:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white text-center sm:text-left">Support</h3>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-3">Business Hours</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                <p>Sunday: Closed</p>
                <p className="text-blue-400 mt-2">24/7 AI Assessment Available</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-3">Emergency Support</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <p>For urgent damage assessments:</p>
                <a href="tel:+919176661178" className="text-blue-400 hover:text-blue-300 transition-colors font-medium touch-manipulation">
                  +91 91766 61178
                </a>
                <p className="text-xs text-gray-400 mt-1">Available 24/7 for emergency claims</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} Panel Pro. All rights reserved.</p>
          <div className="flex space-x-4 sm:space-x-6 mt-4 md:mt-0 text-sm sm:text-base">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
