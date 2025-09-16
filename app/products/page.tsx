"use client"

import { Car, Shield, Building2, ArrowRight, CheckCircle, Star, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SpotlightCard from "@/components/SpotlightCard"
import { motion } from "framer-motion"
import { useState, useMemo, useCallback, useEffect } from "react"

export default function ProductsPage() {
  const [pdfStatus, setPdfStatus] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  // Memoize the PDF handler to prevent unnecessary re-renders
  const handlePDFOpen = useCallback((productSubtitle: string) => {
    if (productSubtitle === "(CI)") {
      setPdfStatus("Opening PDF...")
      
      const pdfUrl = "/Panel-Pro-CI-2025.pdf"
      
      try {
        const newWindow = window.open(pdfUrl, "_blank")
        if (newWindow && !newWindow.closed) {
          setPdfStatus("PDF opened successfully!")
          setTimeout(() => setPdfStatus(""), 3000)
        } else {
          setPdfStatus("Popup blocked, trying download...")
          
          const link = document.createElement('a')
          link.href = pdfUrl
          link.target = '_blank'
          link.download = 'Panel-Pro-CI-2025.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          
          setPdfStatus("PDF download started!")
          setTimeout(() => setPdfStatus(""), 3000)
        }
      } catch (error) {
        console.error('Error opening PDF:', error)
        setPdfStatus("Error opening PDF. Please try again.")
        setTimeout(() => setPdfStatus(""), 3000)
      }
    }
  }, [])

  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  // Memoize products data to prevent unnecessary re-renders
  const products = useMemo(() => [
    {
      icon: <Car className="h-12 w-12" />,
      title: "PanelPro for Car Traders",
      subtitle: "(CT)",
      description: "Streamline your trading operations with instant damage assessment, accurate valuations, and detailed condition reports for faster transactions.",
      features: ["Instant Valuation", "Trade-in Assessment", "Condition Reports", "Market Analysis"],
      detailedFeatures: [
        "Real-time market value estimation",
        "Comprehensive damage documentation",
        "Automated condition scoring",
        "Historical price trend analysis",
        "Multi-angle photo analysis",
        "Integration with trading platforms",
      ],
      benefits: [
        "Reduce assessment time by 80%",
        "Increase trading volume by 40%",
        "Minimize valuation disputes",
        "Enhance customer trust",
      ],
      testimonial: {
        text: "PanelPro CT has revolutionized our trading process. We can now assess 3x more vehicles daily.",
        author: "Rajesh Kumar, Auto Trader",
        rating: 5,
      },
      stats: [
        { label: "Faster Assessment", value: "80%" },
        { label: "Accuracy Rate", value: "99%" },
        { label: "Customer Satisfaction", value: "95%" },
      ],
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "PanelPro for Car Insurance",
      subtitle: "(CI)",
      description: "Accelerate claims processing with AI-powered damage analysis, fraud detection, and automated repair cost estimation for insurance providers.",
      features: ["Claims Processing", "Fraud Detection", "Cost Estimation", "Risk Assessment"],
      detailedFeatures: [
        "Automated claims validation",
        "Advanced fraud pattern detection",
        "Precise repair cost calculation",
        "Risk profiling and scoring",
        "Integration with insurance systems",
        "Regulatory compliance reporting",
      ],
      benefits: [
        "Process claims 70% faster",
        "Reduce fraudulent claims by 60%",
        "Lower operational costs",
        "Improve customer satisfaction",
      ],
      testimonial: {
        text: "Our claim processing time dropped from days to hours. The fraud detection is incredibly accurate.",
        author: "Priya Sharma, Insurance Manager",
        rating: 5,
      },
      stats: [
        { label: "Faster Processing", value: "70%" },
        { label: "Fraud Reduction", value: "60%" },
        { label: "Cost Savings", value: "45%" },
      ],
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "PanelPro for Car Dealers",
      subtitle: "(CD)",
      description: "Enhance your dealership operations with comprehensive pre-sale inspections, warranty assessments, and customer transparency tools.",
      features: ["Pre-sale Inspection", "Warranty Assessment", "Customer Reports", "Inventory Management"],
      detailedFeatures: [
        "Detailed pre-sale vehicle inspection",
        "Warranty coverage analysis",
        "Customer-facing condition reports",
        "Inventory condition tracking",
        "Service history integration",
        "Quality assurance workflows",
      ],
      benefits: [
        "Increase sales conversion by 35%",
        "Reduce warranty claims by 50%",
        "Build customer confidence",
        "Streamline inventory management",
      ],
      testimonial: {
        text: "Our customers love the transparency. Sales have increased significantly since using PanelPro CD.",
        author: "Arjun Patel, Dealership Owner",
        rating: 5,
      },
      stats: [
        { label: "Sales Increase", value: "35%" },
        { label: "Warranty Reduction", value: "50%" },
        { label: "Customer Trust", value: "98%" },
      ],
    },
  ], [])

  // Loading skeleton component
  const LoadingSkeleton = () => (
    <div className="space-y-20">
      {[1, 2, 3].map((i) => (
        <div key={i} className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-8 w-64 bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 w-16 bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-700 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="h-48 bg-gray-700 rounded-lg animate-pulse"></div>
              <div className="h-32 bg-gray-700 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {/* Hero Section Skeleton */}
        <section className="relative overflow-hidden bg-gradient-to-r from-black via-blue-900 to-gray-900 pt-24 pb-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="h-16 w-96 bg-gray-700 rounded mx-auto animate-pulse"></div>
              <div className="h-6 w-3/4 bg-gray-700 rounded mx-auto animate-pulse"></div>
            </div>
          </div>
        </section>
        
        {/* Products Section Skeleton */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <LoadingSkeleton />
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {pdfStatus && (
        <div className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {pdfStatus}
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black via-blue-900 to-gray-900 pt-24 pb-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" variants={itemVariants}>
              Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Products
              </span>
            </motion.h1>
            <motion.p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto" variants={itemVariants}>
              Tailored AI solutions for different automotive industry professionals. Choose the perfect PanelPro solution for your business needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="max-w-7xl mx-auto"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Product Info */}
                  <div className={`space-y-6 lg:space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        {product.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">{product.title}</h2>
                        <p className="text-blue-400 font-medium text-lg mt-1">{product.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify">{product.description}</p>

                    <div className="space-y-4 lg:space-y-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">Key Features:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                        {product.detailedFeatures.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 lg:space-y-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-white">Benefits:</h3>
                      <div className="space-y-3">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3">
                            <TrendingUp className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 text-base font-medium">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300 bg-transparent px-6 py-3 text-base font-medium"
                        onClick={() => handlePDFOpen(product.subtitle)}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>

                  {/* Product Stats & Testimonial */}
                  <div className={`space-y-6 lg:space-y-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    {/* Stats */}
                    <SpotlightCard className="p-4 sm:p-6" spotlightColor="rgba(59, 130, 246, 0.1)">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 text-center lg:text-left">Performance Stats</h3>
                      <div className="grid grid-cols-3 gap-4 sm:gap-6">
                        {product.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center">
                            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400">{stat.value}</div>
                            <div className="text-xs sm:text-sm text-gray-300 leading-tight">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </SpotlightCard>

                    {/* Testimonial */}
                    <Card className="bg-gray-900 border-blue-500/20">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center space-x-1 mb-3">
                          {[...Array(product.testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-300 italic mb-4 text-sm sm:text-base leading-relaxed text-justify">"{product.testimonial.text}"</p>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-blue-400 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{product.testimonial.author}</span>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {product.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="outline"
                          className="border-blue-500/30 text-blue-300 bg-blue-500/10 text-xs sm:text-sm px-3 py-1"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4" variants={itemVariants}>
              Choose Your Solution
            </motion.h2>
            <motion.p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed" variants={itemVariants}>
              Compare our products and find the perfect fit for your business
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{ willChange: "transform, opacity" }}
              >
                <SpotlightCard className="h-full p-4 sm:p-6 text-center" spotlightColor="rgba(59, 130, 246, 0.1)">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {product.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-tight">{product.title}</h3>
                  <p className="text-blue-400 font-medium mb-3 sm:mb-4">{product.subtitle}</p>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-justify">{product.description}</p>
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                        <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm sm:text-base py-2 sm:py-3">
                    Choose Plan
                  </Button>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white leading-tight" variants={itemVariants}>
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed" variants={itemVariants}>
              Join hundreds of automotive professionals already using PanelPro to streamline their operations
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center" variants={itemVariants}>
              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/30">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 bg-transparent"
              >
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}