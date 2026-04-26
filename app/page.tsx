"use client"

import { MessageCircle, ArrowRight, Car, Shield, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpotlightCard from "@/components/SpotlightCard"
import ScrollReveal from "@/components/scroll-reveal"
import AnimatedBackground from "@/components/animated-background"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useState, useMemo, useCallback, useRef, useEffect } from "react"
import frame001 from "@/frames/Rotating_pan_shot_202604261334_001.png"
import frame002 from "@/frames/Rotating_pan_shot_202604261334_002.png"
import frame003 from "@/frames/Rotating_pan_shot_202604261334_003.png"
import frame004 from "@/frames/Rotating_pan_shot_202604261334_004.png"
import frame005 from "@/frames/Rotating_pan_shot_202604261334_005.png"
import frame006 from "@/frames/Rotating_pan_shot_202604261334_006.png"
import frame007 from "@/frames/Rotating_pan_shot_202604261334_007.png"
import frame008 from "@/frames/Rotating_pan_shot_202604261334_008.png"
import frame009 from "@/frames/Rotating_pan_shot_202604261334_009.png"
import frame010 from "@/frames/Rotating_pan_shot_202604261334_010.png"
import frame011 from "@/frames/Rotating_pan_shot_202604261334_011.png"
import frame012 from "@/frames/Rotating_pan_shot_202604261334_012.png"
import frame013 from "@/frames/Rotating_pan_shot_202604261334_013.png"
import frame014 from "@/frames/Rotating_pan_shot_202604261334_014.png"
import frame015 from "@/frames/Rotating_pan_shot_202604261334_015.png"
import frame016 from "@/frames/Rotating_pan_shot_202604261334_016.png"
import frame017 from "@/frames/Rotating_pan_shot_202604261334_017.png"
import frame018 from "@/frames/Rotating_pan_shot_202604261334_018.png"
import frame019 from "@/frames/Rotating_pan_shot_202604261334_019.png"
import frame020 from "@/frames/Rotating_pan_shot_202604261334_020.png"
import frame021 from "@/frames/Rotating_pan_shot_202604261334_021.png"
import frame022 from "@/frames/Rotating_pan_shot_202604261334_022.png"
import frame023 from "@/frames/Rotating_pan_shot_202604261334_023.png"
import frame024 from "@/frames/Rotating_pan_shot_202604261334_024.png"
import frame025 from "@/frames/Rotating_pan_shot_202604261334_025.png"
import frame026 from "@/frames/Rotating_pan_shot_202604261334_026.png"
import frame027 from "@/frames/Rotating_pan_shot_202604261334_027.png"
import frame028 from "@/frames/Rotating_pan_shot_202604261334_028.png"
import frame029 from "@/frames/Rotating_pan_shot_202604261334_029.png"
import frame030 from "@/frames/Rotating_pan_shot_202604261334_030.png"
import frame031 from "@/frames/Rotating_pan_shot_202604261334_031.png"
import frame032 from "@/frames/Rotating_pan_shot_202604261334_032.png"

export default function HomePage() {
  const router = useRouter()
  const [pdfStatus, setPdfStatus] = useState<string>("")
  const [heroImageReady, setHeroImageReady] = useState(false)
  const heroScrollRef = useRef<HTMLElement | null>(null)

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

  const heroFrames = useMemo(
    () => [
      frame001, frame002, frame003, frame004, frame005, frame006, frame007, frame008,
      frame009, frame010, frame011, frame012, frame013, frame014, frame015, frame016,
      frame017, frame018, frame019, frame020, frame021, frame022, frame023, frame024,
      frame025, frame026, frame027, frame028, frame029, frame030, frame031, frame032,
    ],
    []
  )

  const [activeHeroFrame, setActiveHeroFrame] = useState(0)
  const HERO_SCROLL_VH_PER_TRANSITION = 12
  const heroSequenceHeight = `calc(100vh + ${(heroFrames.length - 1) * HERO_SCROLL_VH_PER_TRANSITION}vh)`
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Avoid restoring a previous scroll position on reload/navigation.
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual"
      }
      window.scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {
    const updateFrameByScroll = () => {
      const el = heroScrollRef.current
      if (!el) return

      const sectionStart = el.offsetTop
      const sectionEnd = sectionStart + el.offsetHeight - window.innerHeight
      const sectionRange = Math.max(1, sectionEnd - sectionStart)
      const rawProgress = (window.scrollY - sectionStart) / sectionRange
      const progress = Math.max(0, Math.min(1, rawProgress))
      const frameIndex = Math.min(
        heroFrames.length - 1,
        Math.round(progress * (heroFrames.length - 1))
      )

      setActiveHeroFrame(frameIndex)
    }

    let rafId = 0
    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        updateFrameByScroll()
        rafId = 0
      })
    }

    updateFrameByScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", updateFrameByScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", updateFrameByScroll)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [heroFrames.length])

  return (
    <div className="min-h-screen relative text-slate-50">
      {/* PDF Status Message */}
      {pdfStatus && (
        <div className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {pdfStatus}
        </div>
      )}
      
      <AnimatedBackground />

      {/* Hero Scroll Frames Section */}
      <section ref={heroScrollRef} className="relative text-white" style={{ height: heroSequenceHeight }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {!heroImageReady && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
              <p className="text-xs uppercase tracking-[0.24em] text-blue-300">Loading frames...</p>
            </div>
          )}
          <Image
            src={heroFrames[activeHeroFrame]}
            alt={`Hero frame ${activeHeroFrame + 1}`}
            fill
            priority
            className="object-cover"
            onLoadingComplete={() => setHeroImageReady(true)}
          />
          {/* Cinematic movie-frame overlay */}
          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="absolute inset-x-0 top-0 h-20 bg-black sm:h-24"></div>
            <div className="absolute inset-x-0 bottom-0 h-20 bg-black sm:h-24"></div>
            <div className="absolute inset-x-0 top-3 h-px bg-blue-300/35"></div>
            <div className="absolute inset-x-0 bottom-3 h-px bg-blue-300/35"></div>
          </div>
          <div className="absolute inset-x-0 top-0 h-px bg-blue-500/40"></div>

          <div className="relative container mx-auto flex h-full items-center justify-center px-4">
            <motion.div
              className="w-full max-w-4xl p-2 text-center sm:p-4"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-blue-200/90">
                Panel Pro Intelligence
              </p>
              <h1 className="mb-4 text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                AI Powered Car
                <span className="mt-2 block text-blue-400">Body Repair Assessment</span>
              </h1>

              <p className="mx-auto mb-6 max-w-2xl text-sm text-slate-200 sm:text-base md:text-lg">
                Scroll to preview all 32 visual frames, then continue into the next section.
              </p>

              <div className="flex flex-col justify-center gap-3 px-2 sm:flex-row sm:gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold uppercase tracking-wide shadow-[0_0_30px_rgba(37,99,235,0.45)] transition-all duration-300 border border-blue-400/60 touch-manipulation"
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
                    className="w-full sm:w-auto border-blue-500/70 text-blue-300 hover:bg-blue-600/20 hover:text-blue-200 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold uppercase tracking-wide transition-all duration-300 bg-black/40 touch-manipulation"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.22em] text-blue-300/80">
            Frame {activeHeroFrame + 1} / {heroFrames.length}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.22em] text-blue-300/80">
            Scroll to next frame
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 relative" id="products">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-16">
              <p className="font-script text-3xl text-blue-200 mb-2">Why teams love Panel Pro</p>
              <h2 className="section-title text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 px-2">Why Choose Our Platform?</h2>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-2">
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
                  className="group glass-card card-rise rounded-3xl"
                  spotlightColor="rgba(59, 130, 246, 0.15)"
                >
                  <div className="text-center">
                    <motion.div
                      className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-script text-3xl text-blue-200 mb-2">Built for every workflow</p>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4 px-2">Our Products</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-2">
              Tailored AI solutions for different automotive industry professionals
            </p>
          </div>

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
                  className="group glass-card card-rise rounded-3xl h-full"
                  spotlightColor="rgba(59, 130, 246, 0.1)"
                >
                  <div className="text-center h-full flex flex-col">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl"
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
                      <h3 className="text-xl font-bold mb-2 text-white">{product.title}</h3>
                      <p className="text-blue-400 font-medium mb-4 text-sm">{product.subtitle}</p>
                      <p className="text-slate-300 mb-6 text-sm leading-relaxed">{product.description}</p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="bg-blue-500/10 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-500/20 text-center"
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
                        className="border-blue-400 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300 bg-transparent"
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
        className="py-16 sm:py-20 text-white relative overflow-hidden"
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
            <motion.div whileInView={{ scale: 1 }} initial={{ scale: 0.9 }} transition={{ duration: 0.5 }} className="glass-panel rounded-3xl px-6 py-10 sm:p-12">
              <p className="font-script text-3xl text-blue-200 mb-2">Let your assessments shine</p>
              <h2 className="section-title text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 px-2">Ready to Get Started?</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-slate-200 max-w-2xl mx-auto px-2">
                Join thousands of users who trust our AI-powered damage assessment platform
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/30 touch-manipulation"
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
