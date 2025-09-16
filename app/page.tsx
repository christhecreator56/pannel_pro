"use client"

import { MessageCircle, ArrowRight, Car, Shield, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotlightCard from "@/components/SpotlightCard"
import ScrollReveal from "@/components/scroll-reveal"
import AnimatedBackground from "@/components/animated-background"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useState, useMemo, useCallback } from "react"

export default function HomePage() {
  const router = useRouter()
  const [pdfStatus, setPdfStatus] = useState<string>("")

  const handleScheduleDemo = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSekD1-ThqmpejKtqAzOlsRUv9wdxlYe0MCEOrVFioRRhPsYfA/viewform?usp=dialog", "_blank");
    }
  }, [])

  const handlePDFOpen = useCallback((productSubtitle: string) => {
    // Remove the conditional check that was causing delays
    setPdfStatus("Opening PDF...")
    
    // Use a more efficient approach for all product types
    const pdfUrl = productSubtitle === "(CI)" ? "/Panel-Pro-CI-2025.pdf" : "/Panel-Pro-CT-2025.pdf"
    
    // Simplified PDF opening logic
    const openPDF = () => {
      try {
        const newWindow = window.open(pdfUrl, "_blank")
        if (newWindow && !newWindow.closed) {
          setPdfStatus("PDF opened successfully!")
          setTimeout(() => setPdfStatus(""), 2000)
        } else {
          // Fallback to download if popup is blocked
          downloadPDF(pdfUrl)
        }
      } catch (error) {
        console.error('Error opening PDF:', error)
        downloadPDF(pdfUrl)
      }
    }
    
    const downloadPDF = (url: string) => {
      setPdfStatus("Downloading PDF...")
      const link = document.createElement('a')
      link.href = url
      link.target = '_blank'
      link.download = url.split('/').pop() || 'Panel-Pro.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      setPdfStatus("PDF download started!")
      setTimeout(() => setPdfStatus(""), 2000)
    }
    
    // Execute immediately without delays
    openPDF()
  }, [])

  const features = useMemo(() => [
    {
      icon: (
        <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Instant Analysis",
      description:
        "Get comprehensive damage reports in seconds, not hours. Our AI processes your descriptions instantly.",
      delay: 0, // First feature loads immediately
    },
    {
      icon: (
        <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "99% Accuracy",
      description:
        "Industry-leading precision in damage detection and severity assessment backed by machine learning.",
      delay: 0.05, // Minimal delay for second feature
    },
    {
      icon: (
        <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Expert Support",
      description: "24/7 support from automotive experts and AI specialists to help with your assessments.",
      delay: 0.1, // Minimal delay for third feature
    },
  ], [])

  const products = useMemo(() => [
    {
      icon: <Car className="h-10 w-10" />,
      title: "PanelPro for Car Traders",
      subtitle: "(CT)",
      description:
        "Streamline your trading operations with instant damage assessment, accurate valuations, and detailed condition reports for faster transactions.",
      features: ["Instant Valuation", "Trade-in Assessment", "Condition Reports", "Market Analysis"],
      delay: 0, // First item loads immediately
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "PanelPro for Car Insurance",
      subtitle: "(CI)",
      description:
        "Accelerate claims processing with AI-powered damage analysis, fraud detection, and automated repair cost estimation for insurance providers.",
      features: ["Claims Processing", "Fraud Detection", "Cost Estimation", "Risk Assessment"],
      delay: 0.05, // Minimal delay for second item
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "PanelPro for Car Dealers",
      subtitle: "(CD)",
      description:
        "Enhance your dealership operations with comprehensive pre-sale inspections, warranty assessments, and customer transparency tools.",
      features: ["Pre-sale Inspection", "Warranty Assessment", "Customer Reports", "Inventory Management"],
      delay: 0.1, // Minimal delay for third item
    },
  ], [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* PDF Status Message */}
      {pdfStatus && (
        <div className="fixed top-4 right-4 z-50 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {pdfStatus}
        </div>
      )}
      
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black via-red-900 to-gray-900 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight" variants={itemVariants}>
              AI-Powered Car
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Body Repair Assessment
              </motion.span>
            </motion.h1>

            <motion.p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto px-2" variants={itemVariants}>
              Describe your car damage through our AI chat assistant and get instant, accurate damage analysis powered
              by Panel Pro's advanced AI technology for body repair professionals
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-red-500/30 touch-manipulation"
                  onClick={handleScheduleDemo}
                >
                  <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Schedule Demo
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-red-400 text-red-400 hover:bg-red-500/20 hover:text-red-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 bg-transparent backdrop-blur-sm touch-manipulation"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-black relative" id="products">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">Why Choose Our Platform?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
                Experience the future of body repair assessment with Panel Pro's cutting-edge AI technology
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "0px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={index === 0 ? undefined : itemVariants} 
                initial={index === 0 ? "visible" : "hidden"}
                animate={index === 0 ? "visible" : undefined}
                custom={feature.delay}
              >
                <SpotlightCard
                  className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                  spotlightColor="rgba(239, 68, 68, 0.15)"
                >
                  <div className="text-center">
                    <motion.div
                      className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-20 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">Our Products</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
                Tailored AI solutions for different automotive industry professionals
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, margin: "0px" }}
          >
            {products.map((product, index) => (
              <motion.div 
                key={index} 
                variants={index === 0 ? undefined : itemVariants} 
                initial={index === 0 ? "visible" : "hidden"}
                animate={index === 0 ? "visible" : undefined}
                custom={product.delay}
              >
                <SpotlightCard
                  className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full"
                  spotlightColor="rgba(239, 68, 68, 0.1)"
                >
                  <div className="text-center h-full flex flex-col">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)",
                        rotate: 5,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {product.icon}
                    </motion.div>

                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-2 text-white">{product.title}</h3>
                      <p className="text-red-400 font-medium mb-4 text-sm">{product.subtitle}</p>
                      <p className="text-gray-300 mb-6 text-sm leading-relaxed">{product.description}</p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="bg-red-500/10 text-red-300 text-xs px-2 py-1 rounded-full border border-red-500/20 text-center"
                            >
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-400 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-300 bg-transparent"
                        onClick={() => handlePDFOpen(product.subtitle)}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-20 bg-gradient-to-r from-red-900 to-black text-white relative overflow-hidden"
        id="chatbot"
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 text-center relative">
          <ScrollReveal>
            <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0.9 }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2">Ready to Get Started?</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto px-2">
                Join thousands of users who trust our AI-powered damage assessment platform
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-red-500/30 touch-manipulation"
                  onClick={handleScheduleDemo}
                >
                  <MessageCircle className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
                  Schedule Free Demo
                </Button>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
