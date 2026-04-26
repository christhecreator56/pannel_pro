"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import StarBorder from "./StarBorder"
import { NavLabel } from "./nav-text-roll"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const aboutItem = { name: "About", href: "/about" as const }
const productsItem = { name: "Products", href: "/products" as const }

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

      setScrolled(currentScrollY > 20)

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
        setIsOpen(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

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
      if (pathname === "/") {
        scrollToSection(href)
      } else {
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

  const navLink = (item: { name: string; href: string }, motionDelay: number) => (
    <motion.div
      key={item.name}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: motionDelay,
        type: "spring",
        stiffness: 300,
      }}
    >
      <button
        type="button"
        onClick={() => handleNavigation(item.href)}
        className="group relative bg-transparent border-0 p-0 cursor-pointer touch-manipulation"
        aria-current={isActivePage(item.href) ? "page" : undefined}
      >
        <NavLabel
          active={isActivePage(item.href)}
          className="px-1 py-1 text-sm sm:text-base md:text-lg md:py-1.5"
        >
          {item.name}
        </NavLabel>
      </button>
    </motion.div>
  )

  return (
    <motion.nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-[background,backdrop-filter] duration-500",
        scrolled ? "bg-black/50 backdrop-blur-xl" : "bg-transparent",
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Join Us — top right */}
      <motion.div
        className="pointer-events-auto absolute right-3 top-3 z-20 sm:right-5 sm:top-5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <StarBorder
          color="rgba(59, 130, 246, 0.9)"
          speed="4s"
          thickness={2}
          className="hover:scale-105 transition-transform duration-300 [&_.inner-content]:px-4 [&_.inner-content]:py-2.5 [&_.inner-content]:text-sm sm:[&_.inner-content]:px-5 sm:[&_.inner-content]:text-base"
        >
          Join Us
        </StarBorder>
      </motion.div>

      <div className="container relative mx-auto px-4 pt-3 pb-3 sm:px-6 sm:pt-4 sm:pb-3 md:pt-3 md:pb-4">
        {/* Mobile menu toggle — left, clears logo center */}
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-3 top-3 z-20 rounded-lg p-2.5 text-white hover:bg-white/10 md:hidden touch-manipulation"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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

        {/* Desktop: About — Logo — Products */}
        <div className="hidden md:flex items-center justify-center gap-8 pt-0.5 lg:gap-14 xl:gap-20">
          {navLink(aboutItem, 0)}
          <motion.div
            className="flex shrink-0 items-center justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, type: "spring", stiffness: 280 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="block">
              <Image
                src="/images/panel-pro-logo-white.png"
                alt="Panel Pro Logo"
                width={300}
                height={80}
                priority
                className="h-14 w-auto cursor-pointer sm:h-16 lg:h-[4.5rem]"
              />
            </Link>
          </motion.div>
          {navLink(productsItem, 0.06)}
        </div>

        {/* Mobile: logo centered (links in drawer) */}
        <div className="flex justify-center md:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 280 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="block">
              <Image
                src="/images/panel-pro-logo-white.png"
                alt="Panel Pro Logo"
                width={300}
                height={80}
                priority
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mt-4 overflow-hidden rounded-2xl border border-blue-500/25 bg-black/55 backdrop-blur-xl md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center gap-6 px-4 py-6">
                <button
                  type="button"
                  onClick={() => handleNavigation(aboutItem.href)}
                  className="group bg-transparent border-0 p-0 cursor-pointer touch-manipulation"
                  aria-current={isActivePage(aboutItem.href) ? "page" : undefined}
                >
                  <NavLabel
                    active={isActivePage(aboutItem.href)}
                    className="py-1 text-3xl"
                  >
                    {aboutItem.name}
                  </NavLabel>
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigation(productsItem.href)}
                  className="group bg-transparent border-0 p-0 cursor-pointer touch-manipulation"
                  aria-current={isActivePage(productsItem.href) ? "page" : undefined}
                >
                  <NavLabel
                    active={isActivePage(productsItem.href)}
                    className="py-1 text-3xl"
                  >
                    {productsItem.name}
                  </NavLabel>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
