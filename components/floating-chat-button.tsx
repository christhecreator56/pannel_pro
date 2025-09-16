"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function FloatingChatButton() {
  const router = useRouter()

  const handleChatClick = () => {
    router.push("/chatbot")
  }

  return (
    <motion.button
      onClick={handleChatClick}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/30 group touch-manipulation"
      whileHover={{
        scale: 1.1,
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 1,
      }}
      aria-label="Open AI Chat Assistant"
    >
      <motion.div
        animate={{
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.div>

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-500/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs sm:text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        AI Chat Assistant
        <div className="absolute top-full right-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
      </motion.div>
    </motion.button>
  )
}
