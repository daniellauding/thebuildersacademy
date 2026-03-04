"use client"

import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface FilterChipProps {
  label: string
  active?: boolean
  onToggle?: () => void
  onRemove?: () => void
  className?: string
}

export function FilterChip({
  label,
  active = false,
  onToggle,
  onRemove,
  className,
}: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary/5 text-primary"
          : "border-border bg-white text-muted-foreground hover:border-primary/30",
        className
      )}
      aria-pressed={active}
    >
      {label}
      {active && onRemove && (
        <X
          className="size-3.5 cursor-pointer hover:text-destructive"
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          aria-label={`Remove ${label} filter`}
        />
      )}
    </button>
  )
}
