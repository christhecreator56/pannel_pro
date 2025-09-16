"use client"

import { motion } from "framer-motion"

interface LoadingSkeletonProps {
  className?: string
  variant?: "text" | "card" | "circle" | "button"
}

export default function LoadingSkeleton({ 
  className = "", 
  variant = "text" 
}: LoadingSkeletonProps) {
  const baseClasses = "bg-gray-300/20 animate-pulse"
  
  const variantClasses = {
    text: "h-4 w-full rounded",
    card: "h-48 w-full rounded-lg",
    circle: "h-12 w-12 rounded-full",
    button: "h-10 w-24 rounded-md"
  }

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}
