"use client"

import { Car, Shield, Building2, ArrowRight, CheckCircle, Star, Users, TrendingUp, Smartphone, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SpotlightCard from "@/components/SpotlightCard"
import { motion } from "framer-motion"
import { useState, useMemo, useCallback, useEffect } from "react"

export default function ProductsPage() {
  const [pdfStatus, setPdfStatus] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPhoneColors, setSelectedPhoneColors] = useState<Record<string, string>>({
    ct: "Midnight Black",
    ci: "Midnight Black",
    cd: "Midnight Black",
  })
  const [activeFeatureSlides, setActiveFeatureSlides] = useState<Record<string, number>>({
    ct: 0,
    ci: 0,
    cd: 0,
  })
  const [expandedFeatureIds, setExpandedFeatureIds] = useState<Record<string, string>>({
    ct: "ct-scan",
    ci: "ci-claims",
    cd: "cd-inspection",
  })

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

  const phoneColors = useMemo(
    () => [
      { name: "Midnight Black", className: "from-zinc-700 via-zinc-900 to-black" },
      { name: "Ocean Blue", className: "from-blue-500 via-blue-700 to-blue-900" },
      { name: "Sunset Gold", className: "from-amber-300 via-amber-500 to-orange-700" },
      { name: "Forest Green", className: "from-emerald-300 via-emerald-600 to-emerald-900" },
    ],
    []
  )

  // Memoize products data to prevent unnecessary re-renders
  const products = useMemo(() => [
    {
      id: "ct",
      audience: "For Car Traders",
      theme: {
        iconBg: "from-sky-500 to-blue-700",
        accentText: "text-sky-300",
        accentSoftText: "text-sky-200",
        accentBorder: "border-sky-400/30",
        accentSoftBg: "bg-sky-500/10",
        accentHover: "hover:bg-sky-500/10 hover:border-sky-400/40",
        badge: "CT",
      },
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
      showcaseFeatures: [
        {
          id: "ct-scan",
          title: "Instant Trade-In Scan",
          summary: "Capture vehicle condition in one guided flow.",
          details: "Inspect panel damage and grade condition from your phone before making a trade-in offer.",
        },
        {
          id: "ct-market",
          title: "Live Market Benchmarks",
          summary: "Compare offers with local market trends.",
          details: "Use real-time valuation guidance with pricing confidence bands for smarter trade decisions.",
        },
        {
          id: "ct-report",
          title: "Shareable Buyer Report",
          summary: "Deliver a clean PDF condition report instantly.",
          details: "Generate transparent reports with image evidence so buyers trust your listed vehicle quality.",
        },
      ],
    },
    {
      id: "ci",
      audience: "For Insurance Teams",
      theme: {
        iconBg: "from-violet-500 to-fuchsia-700",
        accentText: "text-violet-300",
        accentSoftText: "text-violet-200",
        accentBorder: "border-violet-400/30",
        accentSoftBg: "bg-violet-500/10",
        accentHover: "hover:bg-violet-500/10 hover:border-violet-400/40",
        badge: "CI",
      },
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
      showcaseFeatures: [
        {
          id: "ci-claims",
          title: "Smart Claims Intake",
          summary: "Classify and route claims automatically.",
          details: "Auto-triage incoming cases by damage type, severity, and policy rules to reduce queue time.",
        },
        {
          id: "ci-fraud",
          title: "Fraud Signal Detection",
          summary: "Flag anomalies before payout approval.",
          details: "Cross-check claim evidence, repair history, and behavior patterns to surface suspicious claims.",
        },
        {
          id: "ci-estimate",
          title: "Repair Cost Intelligence",
          summary: "Estimate repair spend with high precision.",
          details: "Blend parts, labor, and regional rates into insurer-ready estimates with clear justification.",
        },
      ],
    },
    {
      id: "cd",
      audience: "For Car Dealers",
      theme: {
        iconBg: "from-emerald-500 to-teal-700",
        accentText: "text-emerald-300",
        accentSoftText: "text-emerald-200",
        accentBorder: "border-emerald-400/30",
        accentSoftBg: "bg-emerald-500/10",
        accentHover: "hover:bg-emerald-500/10 hover:border-emerald-400/40",
        badge: "CD",
      },
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
      showcaseFeatures: [
        {
          id: "cd-inspection",
          title: "Pre-Sale Inspection Mode",
          summary: "Standardize checks across your inventory.",
          details: "Follow guided inspection templates so every vehicle gets consistent grading and issue capture.",
        },
        {
          id: "cd-warranty",
          title: "Warranty Readiness",
          summary: "Assess and document warranty risk clearly.",
          details: "Track unresolved defects and recommended fixes before sale to prevent post-sale claim disputes.",
        },
        {
          id: "cd-showroom",
          title: "Customer-Facing Showcase",
          summary: "Present transparent condition highlights in-store.",
          details: "Display trusted inspection snapshots and service history that help customers buy with confidence.",
        },
      ],
    },
  ], [])

  const getActiveColorClass = useCallback(
    (productId: string) =>
      phoneColors.find((color) => color.name === selectedPhoneColors[productId])?.className ?? phoneColors[0].className,
    [phoneColors, selectedPhoneColors]
  )

  const goToNextFeature = useCallback((productId: string, featureCount: number) => {
    setActiveFeatureSlides((prev) => ({
      ...prev,
      [productId]: ((prev[productId] ?? 0) + 1) % featureCount,
    }))
  }, [])

  const goToPreviousFeature = useCallback((productId: string, featureCount: number) => {
    setActiveFeatureSlides((prev) => ({
      ...prev,
      [productId]: ((prev[productId] ?? 0) - 1 + featureCount) % featureCount,
    }))
  }, [])

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
    <div className="min-h-screen text-white">
      {pdfStatus && (
        <div className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {pdfStatus}
        </div>
      )}
      
      <section className="py-20">
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
                <div className="mb-5 flex items-center gap-3">
                  <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold tracking-wide ${product.theme.accentBorder} ${product.theme.accentSoftBg} ${product.theme.accentSoftText}`}>
                    {product.theme.badge}
                  </span>
                  <p className={`text-sm sm:text-base font-medium ${product.theme.accentText}`}>{product.audience}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 auto-rows-auto items-stretch gap-6 lg:gap-7">
                  <div className="md:col-span-3 xl:col-span-5 space-y-3">
                    <h3 className="text-xl font-semibold text-white">Product Overview</h3>
                    <SpotlightCard
                      className="h-full p-6 sm:p-7 glass-card rounded-3xl card-rise"
                      spotlightColor="rgba(59, 130, 246, 0.1)"
                    >
                      <div className="space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${product.theme.iconBg} rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                          {product.icon}
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">{product.title}</h2>
                          <p className={`font-medium text-lg mt-1 ${product.theme.accentText}`}>{product.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg text-slate-100 leading-relaxed text-left">{product.description}</p>
                      </div>
                    </SpotlightCard>
                  </div>

                  <div className="md:col-span-3 xl:col-span-7 space-y-3">
                    <h3 className="text-xl font-semibold text-white">Interactive iPhone Showcase</h3>
                    <SpotlightCard
                      className="h-full p-5 sm:p-6 glass-card rounded-3xl card-rise space-y-5"
                      spotlightColor="rgba(59, 130, 246, 0.1)"
                    >
                    <div className="flex items-center justify-between gap-3">
                      <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm ${product.theme.accentBorder} ${product.theme.accentSoftBg} ${product.theme.accentSoftText}`}>
                        <Smartphone className="h-4 w-4" />
                        iPhone Showcase
                      </div>
                      <p className="text-sm text-slate-200">Swipe-ready • Responsive</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {phoneColors.map((color) => {
                        const isActive = selectedPhoneColors[product.id] === color.name
                        return (
                          <button
                            key={`${product.id}-${color.name}`}
                            type="button"
                            onClick={() =>
                              setSelectedPhoneColors((prev) => ({
                                ...prev,
                                [product.id]: color.name,
                              }))
                            }
                            className={`rounded-full border px-3 py-1.5 text-sm transition-all duration-300 ${
                              isActive
                                ? "border-blue-300 bg-blue-500/20 text-blue-100"
                                : "border-white/30 bg-white/10 text-slate-100 hover:border-white/50"
                            }`}
                          >
                            {color.name}
                          </button>
                        )
                      })}
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <motion.div
                        key={`${product.id}-${selectedPhoneColors[product.id]}`}
                        initial={{ scale: 0.96, opacity: 0.85 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.35 }}
                        className={`w-[260px] sm:w-[300px] rounded-[2.4rem] p-2 bg-gradient-to-br ${getActiveColorClass(product.id)} shadow-[0_25px_45px_rgba(0,0,0,0.42)]`}
                      >
                        <div className="rounded-[2rem] bg-slate-950 p-3 border border-white/10">
                          <div className="mx-auto mb-3 h-5 w-24 rounded-b-2xl bg-black/70"></div>
                          <div className="rounded-[1.4rem] bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 overflow-hidden min-h-[360px]">
                            <motion.div
                              key={`${product.id}-${activeFeatureSlides[product.id] ?? 0}`}
                              initial={{ x: 20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.25 }}
                              className="h-full p-4 flex flex-col justify-between"
                            >
                              <div>
                                <p className={`text-xs ${product.theme.accentText}`}>PanelPro {product.subtitle} App</p>
                                <h4 className="text-white text-lg font-semibold mt-1">
                                  {product.showcaseFeatures[activeFeatureSlides[product.id] ?? 0].title}
                                </h4>
                                <p className="text-slate-100 text-sm mt-2 leading-relaxed">
                                  {product.showcaseFeatures[activeFeatureSlides[product.id] ?? 0].details}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2 mt-5">
                                <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
                                  <p className="text-[11px] text-slate-200">{product.stats[0].label}</p>
                                  <p className="text-white text-base font-semibold">{product.stats[0].value}</p>
                                </div>
                                <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
                                  <p className="text-[11px] text-slate-200">{product.stats[1].label}</p>
                                  <p className="text-white text-base font-semibold">{product.stats[1].value}</p>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>

                      <div className="flex items-center gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => goToPreviousFeature(product.id, product.showcaseFeatures.length)}
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent h-8 w-8 p-0"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center gap-1.5">
                          {product.showcaseFeatures.map((feature, idx) => (
                            <button
                              key={feature.id}
                              type="button"
                              onClick={() =>
                                setActiveFeatureSlides((prev) => ({
                                  ...prev,
                                  [product.id]: idx,
                                }))
                              }
                              className={`h-2 rounded-full transition-all duration-300 ${
                                (activeFeatureSlides[product.id] ?? 0) === idx ? "w-7 bg-blue-400" : "w-2 bg-white/35"
                              }`}
                              aria-label={`Go to ${feature.title}`}
                            />
                          ))}
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => goToNextFeature(product.id, product.showcaseFeatures.length)}
                          className="border-white/20 text-white hover:bg-white/10 bg-transparent h-8 w-8 p-0"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {product.showcaseFeatures.map((feature) => {
                        const isOpen = expandedFeatureIds[product.id] === feature.id
                        return (
                          <button
                            key={feature.id}
                            type="button"
                            onClick={() =>
                              setExpandedFeatureIds((prev) => ({
                                ...prev,
                                [product.id]: isOpen ? "" : feature.id,
                              }))
                            }
                            className={`w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left transition-all duration-300 ${product.theme.accentHover}`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-white text-sm font-medium">{feature.title}</p>
                                <p className="text-xs text-slate-100 mt-1">{feature.summary}</p>
                              </div>
                              <span className={`text-lg leading-none ${product.theme.accentText}`}>{isOpen ? "−" : "+"}</span>
                            </div>
                            <motion.div
                              initial={false}
                              animate={{
                                height: isOpen ? "auto" : 0,
                                opacity: isOpen ? 1 : 0,
                                marginTop: isOpen ? 8 : 0,
                              }}
                              className="overflow-hidden text-xs text-slate-200 leading-relaxed"
                            >
                              {feature.details}
                            </motion.div>
                          </button>
                        )
                      })}
                    </div>
                    </SpotlightCard>
                  </div>

                  <div className="md:col-span-4 xl:col-span-6 space-y-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Key Features</h3>
                    <SpotlightCard
                      className="h-full p-6 glass-card rounded-3xl card-rise"
                      spotlightColor="rgba(59, 130, 246, 0.1)"
                    >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.detailedFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${product.theme.accentText}`} />
                          <span className="text-slate-100 text-sm sm:text-base leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    </SpotlightCard>
                  </div>

                  <div className="md:col-span-2 xl:col-span-3 space-y-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Performance Stats</h3>
                    <SpotlightCard
                      className="h-full p-6 glass-card rounded-3xl card-rise"
                      spotlightColor="rgba(59, 130, 246, 0.1)"
                    >
                    <div className="grid grid-cols-3 gap-4">
                      {product.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className={`text-xl sm:text-2xl font-bold ${product.theme.accentText}`}>{stat.value}</div>
                          <div className="text-xs text-slate-100 leading-tight">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    </SpotlightCard>
                  </div>

                  <div className="md:col-span-6 xl:col-span-3 space-y-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Customer Testimonial</h3>
                    <Card className="h-full glass-card border-blue-500/20 rounded-3xl card-rise">
                      <CardContent className="p-6">
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(product.testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-100 italic mb-4 text-sm sm:text-base leading-relaxed text-left">"{product.testimonial.text}"</p>
                      <div className="flex items-center space-x-2">
                        <Users className={`h-4 w-4 flex-shrink-0 ${product.theme.accentText}`} />
                        <span className="text-sm text-slate-200">{product.testimonial.author}</span>
                      </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="md:col-span-3 xl:col-span-6 space-y-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Benefits</h3>
                    <SpotlightCard
                      className="h-full p-6 glass-card rounded-3xl card-rise"
                      spotlightColor="rgba(59, 130, 246, 0.1)"
                    >
                    <div className="space-y-3 mb-5">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-3">
                          <TrendingUp className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-slate-100 text-sm sm:text-base leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                      <Button className={`w-full sm:w-auto bg-gradient-to-r ${product.theme.iconBg} text-white px-6 py-3 text-base font-medium`}>
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className={`w-full sm:w-auto transition-all duration-300 bg-transparent px-6 py-3 text-base font-medium ${product.theme.accentBorder} ${product.theme.accentText} ${product.theme.accentHover}`}
                        onClick={() => handlePDFOpen(product.subtitle)}
                      >
                        Learn More
                      </Button>
                    </div>
                    </SpotlightCard>
                  </div>

                  <div className="md:col-span-3 xl:col-span-6 space-y-3">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Feature Tags</h3>
                    <SpotlightCard
                      className="h-full p-6 glass-card rounded-3xl card-rise"
                      spotlightColor="rgba(59, 130, 246, 0.1)"
                    >
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="outline"
                          className={`text-xs sm:text-sm px-3 py-1 ${product.theme.accentBorder} ${product.theme.accentText} ${product.theme.accentSoftBg}`}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    </SpotlightCard>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p className="font-script text-3xl text-blue-200 mb-2" variants={itemVariants}>Compare with confidence</motion.p>
            <motion.h2 className="section-title text-2xl sm:text-3xl lg:text-4xl text-white mb-4" variants={itemVariants}>
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
                <SpotlightCard className="h-full p-4 sm:p-6 text-center glass-card rounded-3xl card-rise" spotlightColor="rgba(59, 130, 246, 0.1)">
                  <div className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold mb-3 ${product.theme.accentBorder} ${product.theme.accentSoftBg} ${product.theme.accentSoftText}`}>
                    {product.theme.badge} • {product.audience}
                  </div>
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${product.theme.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {product.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-tight">{product.title}</h3>
                  <p className={`font-medium mb-3 sm:mb-4 ${product.theme.accentText}`}>{product.subtitle}</p>
                  <p className="text-slate-100 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-left">{product.description}</p>
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                        <CheckCircle className={`h-4 w-4 flex-shrink-0 ${product.theme.accentText}`} />
                        <span className="text-slate-100 text-xs sm:text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${product.theme.iconBg} text-white text-sm sm:text-base py-2 sm:py-3`}>
                    Choose Plan
                  </Button>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 className="section-title text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 text-white leading-tight" variants={itemVariants}>
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