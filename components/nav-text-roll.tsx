"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/** Single-line nav label: white by default, shifts to black on hover; active route stays white. Parent should use `className="group"`. */
export const NavLabel: React.FC<{
  children: string
  active?: boolean
  className?: string
}> = ({ children, active = false, className }) => {
  return (
    <span
      className={cn(
        "inline-block whitespace-nowrap font-extrabold uppercase tracking-[-0.03em] leading-none transition-colors duration-200 ease-out",
        active
          ? "text-white group-hover:text-black"
          : "text-white group-hover:text-black",
        className,
      )}
    >
      {children}
    </span>
  )
}
