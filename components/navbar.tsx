"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import StarBorder from "./StarBorder"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set scrolled state for styling
      setScrolled(currentScrollY > 20)

      // Hide/show navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top
        setVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setVisible(false)
        setIsOpen(false) // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  const handleNavigation = (href: string) => {
    if (href === "/" || href.startsWith("/")) {
      router.push(href)
      setIsOpen(false)
    } else if (href.startsWith("#")) {
      // Only scroll to sections if we're on the homepage
      if (pathname === "/") {
        scrollToSection(href)
      } else {
        // Navigate to homepage first, then scroll
        router.push(`/${href}`)
        setIsOpen(false)
      }
    } else {
      router.push(href)
      setIsOpen(false)
    }
  }

  const isActivePage = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("/")) return pathname === href
    return false
  }

  return (
    <motion.nav
      className={cn(
        "fixed left-2 right-2 sm:left-4 sm:right-4 z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-black/30 backdrop-blur-xl shadow-2xl border border-blue-500/30 rounded-2xl"
          : "bg-black/20 backdrop-blur-lg shadow-xl border border-blue-400/20 rounded-2xl sm:rounded-full",
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: visible ? 8 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href="/">
              <Image
                src="/images/panel-pro-logo-white.png"
                alt="Panel Pro Logo"
                width={300}
                height={80}
                priority
                className="h-12 sm:h-16 lg:h-20 w-auto cursor-pointer"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg relative overflow-hidden",
                  isActivePage(item.href)
                    ? "text-blue-400 bg-blue-500/20"
                    : "text-white hover:text-blue-400 hover:bg-blue-500/20",
                )}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {item.name}
                {isActivePage(item.href) && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
            >
              <StarBorder
                color="rgba(59, 130, 246, 0.9)"
                speed="4s"
                thickness={2}
                className="hover:scale-105 transition-transform duration-300"
              >
                Join Us
              </StarBorder>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-lg text-white hover:bg-blue-500/20 transition-colors backdrop-blur-sm touch-manipulation"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-black/40 backdrop-blur-xl border-t border-blue-500/30 shadow-lg rounded-b-2xl mt-2 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-6 space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className={cn(
                      "block w-full text-left font-medium py-3 px-4 rounded-lg transition-colors touch-manipulation text-lg",
                      isActivePage(item.href)
                        ? "text-blue-400 bg-blue-500/20"
                        : "text-white hover:text-blue-400 hover:bg-blue-500/20",
                    )}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                <motion.div
                  className="mt-6 flex justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <StarBorder color="rgba(59, 130, 246, 0.9)" speed="4s" thickness={2} className="w-full py-3 text-lg">
                    Join Us
                  </StarBorder>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
