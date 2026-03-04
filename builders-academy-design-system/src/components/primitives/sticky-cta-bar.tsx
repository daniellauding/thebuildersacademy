"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

interface StickyCTABarProps {
  price: number
  label?: string
  className?: string
}

export function StickyCTABar({ price, label = "Buy Now", className }: StickyCTABarProps) {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 border-t bg-primary px-4 py-3 transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
        className
      )}
      role="complementary"
      aria-label="Quick purchase"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-white">
          <span className="text-lg font-bold font-mono">£{price}</span>
          <span className="ml-2 text-xs text-white/70 inline-flex items-center gap-1">
            <Shield className="size-3" aria-hidden="true" />
            Secure
          </span>
        </div>
        <Button variant="secondary" size="lg" className="min-w-[140px]">
          {label}
        </Button>
      </div>
    </div>
  )
}
